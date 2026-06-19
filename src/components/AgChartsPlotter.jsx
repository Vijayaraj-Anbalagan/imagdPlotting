import { useState, useMemo, useEffect, useRef } from "react";
import { AgCharts } from "ag-charts-react";
import { ModuleRegistry } from "ag-charts-community";
import { AllEnterpriseModule } from "ag-charts-enterprise";

// AG Charts v13 is fully modular — nothing renders until modules are registered.
// AllEnterpriseModule bundles community + enterprise (scatter, number axis, zoom,
// etc.). Registered once at import time. Without a license key the enterprise
// features run in trial mode (watermark + console notice), fine for this PoC.
ModuleRegistry.registerModules([AllEnterpriseModule]);

import { usePlotterData } from "../lib/plotterData";
import { PLOT_DIMENSIONS, DATA_POINT_LIMITS } from "../lib/constants";
import { generateSyntheticPoints } from "../lib/syntheticDataGenerator";
import ImageModal from "./ImageModal";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";

const PLOT_BG = "#16213e";
const GRID_STROKE = "#2a2a3e";
const AXIS_STROKE = "#555";
const AXIS_LABEL = "#9aa0b4";

// Resolution (px) of each square sub-image inside a composite. The composite is
// a single square texture used as the marker's image fill, so the whole "N
// images per point" cluster becomes one bitmap that AG Charts renders natively.
const COMPOSITE_TILE_PX = 128;

// Module-level cache so composites survive remounts (multi-chart / virtualized
// mode) and are shared across every chart instance. Keyed by `${url}@${count}`.
const compositeCache = new Map();

/**
 * Column/row split for a cluster of N images. Mirrors gridLayout.chooseGrid:
 * 1 -> 1x1, 2 -> 2x1, and everything larger packs into exactly 2 rows.
 */
function chooseGrid(count) {
  if (count <= 1) return { columns: 1, rows: 1 };
  if (count <= 2) return { columns: count, rows: 1 };
  const rows = 2;
  const columns = Math.ceil(count / rows);
  return { columns, rows };
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

/**
 * Builds a single square data-URL texture with `imageCount` copies of the source
 * image tiled in the chooseGrid layout, square sub-images centered inside the
 * cell (matching computeGridOffsets: gaps for non-square grids are transparent).
 */
async function buildComposite(url, imageCount) {
  const cacheKey = `${url}@${imageCount}`;
  if (compositeCache.has(cacheKey)) return compositeCache.get(cacheKey);

  const img = await loadImage(url);
  const { columns, rows } = chooseGrid(imageCount);

  // Square composite canvas; square sub-image is limited by the tighter axis.
  const cell = COMPOSITE_TILE_PX * Math.max(columns, rows);
  const sub = Math.min(cell / columns, cell / rows);
  const clusterWidth = columns * sub;
  const clusterHeight = rows * sub;
  const originX = (cell - clusterWidth) / 2;
  const originY = (cell - clusterHeight) / 2;

  const canvas = document.createElement("canvas");
  canvas.width = cell;
  canvas.height = cell;
  const ctx = canvas.getContext("2d");

  for (let index = 0; index < imageCount; index++) {
    const column = index % columns;
    const row = Math.floor(index / columns);
    ctx.drawImage(img, originX + column * sub, originY + row * sub, sub, sub);
  }

  const dataUrl = canvas.toDataURL();
  compositeCache.set(cacheKey, dataUrl);
  return dataUrl;
}

function AgChartsPlotter({ imageCount, dataPointCount }) {
  const {
    plotterPoints: fetchedPoints,
    isLoading,
    loadError,
  } = usePlotterData();

  const syntheticPoints = useMemo(() => {
    return generateSyntheticPoints(
      Math.max(
        DATA_POINT_LIMITS.min,
        Math.min(dataPointCount, DATA_POINT_LIMITS.max),
      ),
    );
  }, [dataPointCount]);

  const plotterPoints = syntheticPoints || fetchedPoints;

  if (!syntheticPoints && isLoading)
    return <div className="plotter-loading">Loading data…</div>;
  if (!syntheticPoints && loadError)
    return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <AgChartsCanvas plotterPoints={plotterPoints} imageCount={imageCount} />
  );
}

function AgChartsCanvas({ plotterPoints, imageCount }) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);
  const [composites, setComposites] = useState({});
  const [clickedPoint, setClickedPoint] = useState(null);
  // Current zoom factor (1 = fully zoomed out). Driven by AG's `zoom` event so
  // we can grow the markers as the user zooms — AG markers are a fixed pixel
  // size and don't scale on their own.
  const [zoomFactor, setZoomFactor] = useState(1);

  // Measure the container so we can convert data-space spacing into pixel
  // spacing for adaptive marker sizing.
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setContainerWidth(entry.contentRect.width);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const uniqueImages = useMemo(
    () => [...new Set(plotterPoints.map((p) => p.image))],
    [plotterPoints],
  );

  // Approximate plot area in pixels (container minus chart padding). Used to
  // size markers relative to point spacing and to pad the domain by the marker
  // half-size — exactness isn't critical.
  const plotWidth = Math.max(containerWidth - 44 - 20, 100);
  const plotHeight = Math.max(PLOT_DIMENSIONS.height - 16 - 24, 100);

  // Raw (unpadded) data extents.
  const { xExtent, yExtent } = useMemo(() => {
    const extent = (values) => {
      if (!values.length) return [0, 1];
      let min = Infinity;
      let max = -Infinity;
      for (const v of values) {
        if (v < min) min = v;
        if (v > max) max = v;
      }
      return [min, max];
    };
    return {
      xExtent: extent(plotterPoints.map((p) => p.x)),
      yExtent: extent(plotterPoints.map((p) => p.y)),
    };
  }, [plotterPoints]);

  // Adaptive base size: size each marker to a fraction of the nearest-neighbour
  // distance (in pixels) so sparse data shows large images and dense data shows
  // small ones without overlap. Capped so a few points don't produce giant tiles.
  const baseMarkerSize = useMemo(() => {
    const n = plotterPoints.length;
    if (n <= 1) return 160;
    const xSpan = xExtent[1] - xExtent[0] || 1;
    const ySpan = yExtent[1] - yExtent[0] || 1;
    const px = plotterPoints.map((p) => [
      ((p.x - xExtent[0]) / xSpan) * plotWidth,
      ((p.y - yExtent[0]) / ySpan) * plotHeight,
    ]);
    const neighbor = [];
    for (let i = 0; i < n; i++) {
      let best = Infinity;
      const ax = px[i][0];
      const ay = px[i][1];
      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        const dx = ax - px[j][0];
        const dy = ay - px[j][1];
        const d = dx * dx + dy * dy;
        if (d < best) best = d;
      }
      if (best < Infinity) neighbor.push(Math.sqrt(best));
    }
    neighbor.sort((a, b) => a - b);
    const median = neighbor[Math.floor(neighbor.length / 2)] || 60;
    return Math.max(8, Math.min(160, median * 0.7));
  }, [plotterPoints, xExtent, yExtent, plotWidth, plotHeight]);

  // Pad the domain so a marker centred on an edge point stays fully inside the
  // plot: at least 12% of the span, but never less than half the marker size
  // (converted px → data units) plus a small margin. This stops edge images
  // from spilling over the axes at the default (fit) view.
  const { xDomain, yDomain } = useMemo(() => {
    // Half the marker plus a small visual gap, in pixels.
    const halfPx = baseMarkerSize / 2 + 8;
    const pad = (extent, plotPx) => {
      const span = extent[1] - extent[0] || 1;
      // Solve for the data-unit padding that still fits the half-marker AFTER
      // the padding itself stretches the domain (which shrinks the px scale):
      //   needed_px = halfPx  →  pad = halfPx * span / (plotPx - 2*halfPx)
      // ×1.15 safety for the approximate plot size; 8% of span as a floor.
      const denom = Math.max(plotPx - 2 * halfPx, plotPx * 0.4);
      const needed = (1.15 * halfPx * span) / denom;
      const p = Math.max(span * 0.08, needed);
      return [extent[0] - p, extent[1] + p];
    };
    return {
      xDomain: pad(xExtent, plotWidth),
      yDomain: pad(yExtent, plotHeight),
    };
  }, [xExtent, yExtent, baseMarkerSize, plotWidth, plotHeight]);

  // Effective size grows with zoom (capped) so the images visibly enlarge.
  const markerSize = useMemo(
    () => Math.min(400, Math.round(baseMarkerSize * zoomFactor)),
    [baseMarkerSize, zoomFactor],
  );

  // Pre-build one composite texture per unique (image, imageCount). itemStyler
  // is synchronous, so the chart only renders once every composite is ready.
  useEffect(() => {
    let cancelled = false;

    Promise.all(
      uniqueImages.map(async (url) => {
        try {
          const dataUrl = await buildComposite(url, imageCount);
          return [`${url}@${imageCount}`, dataUrl];
        } catch {
          return null;
        }
      }),
    ).then((entries) => {
      if (cancelled) return;
      setComposites(Object.fromEntries(entries.filter(Boolean)));
    });

    return () => {
      cancelled = true;
    };
  }, [uniqueImages, imageCount]);

  const options = useMemo(
    () => ({
      data: plotterPoints,
      background: { fill: PLOT_BG },
      // Only clip once zoomed in — at the fit view the domain padding already
      // keeps whole images inside, so we avoid cutting them. When zoomed, fixed
      // pixel markers near the viewport edge would otherwise paint over the axes.
      seriesArea: { clip: zoomFactor > 1.01 },
      // Reserve room on the bottom/left for the X/Y tick labels — AG applies
      // chart padding as an outer boundary before laying out axes, so too little
      // here clips the labels against the canvas edge.
      padding: { top: 16, right: 20, bottom: 24, left: 44 },
      legend: { enabled: false },
      // Disable all enter/update transitions.
      animation: { enabled: false },
      series: [
        {
          type: "scatter",
          xKey: "x",
          yKey: "y",
          labelKey: "label",
          shape: "square",
          size: markerSize,
          fillOpacity: 1,
          strokeWidth: 0,
          itemStyler: ({ datum }) => {
            const url = composites[`${datum.image}@${imageCount}`];
            return url
              ? { fill: { type: "image", url, fit: "stretch" } }
              : { fillOpacity: 0 };
          },
          tooltip: {
            renderer: ({ datum }) => ({
              title: datum.label,
              content: `X: ${datum.x} Y: ${datum.y}`,
            }),
          },
          listeners: {
            seriesNodeClick: ({ datum }) => {
              logChartInteractionEvent({
                interactionType: "CLICK",
                visualizationLibrary: "AG Charts",
                interactionSource: "node",
              });
              setClickedPoint(datum);
            },
          },
        },
      ],
      // AG Charts v13: `axes` is a dictionary keyed by x/y, NOT an array.
      axes: {
        x: {
          type: "number",
          position: "bottom",
          min: xDomain[0],
          max: xDomain[1],
          label: {
            enabled: true,
            color: AXIS_LABEL,
            fontSize: 11,
            avoidCollisions: false,
          },
          tick: { enabled: true, stroke: AXIS_STROKE },
          line: { enabled: true, stroke: AXIS_STROKE },
          gridLine: { enabled: true, style: [{ stroke: GRID_STROKE }] },
        },
        y: {
          type: "number",
          position: "left",
          min: yDomain[0],
          max: yDomain[1],
          label: {
            enabled: true,
            color: AXIS_LABEL,
            fontSize: 11,
            avoidCollisions: false,
          },
          tick: { enabled: true, stroke: AXIS_STROKE },
          line: { enabled: true, stroke: AXIS_STROKE },
          gridLine: { enabled: true, style: [{ stroke: GRID_STROKE }] },
        },
      },
      // Enterprise zoom: wheel = zoom, drag = select-to-zoom (brush),
      // Alt+drag = pan, double-click = reset. anchorPoint 'pointer' zooms toward
      // the cursor instead of the axis edge.
      zoom: {
        enabled: true,
        axes: "xy",
        enableScrolling: true,
        enableSelecting: true,
        enablePanning: true,
        enableDoubleClickToReset: true,
        panKey: "alt",
        anchorPointX: "pointer",
        anchorPointY: "pointer",
      },
      // Grow markers with the zoom level: ratioX/ratioY are the visible fraction
      // of each axis, so 1/span is the zoom factor.
      listeners: {
        zoom: (event) => {
          const spanX = (event.ratioX?.end ?? 1) - (event.ratioX?.start ?? 0);
          const spanY = (event.ratioY?.end ?? 1) - (event.ratioY?.start ?? 0);
          const span = Math.max(0.0001, (spanX + spanY) / 2);
          setZoomFactor(1 / span);
        },
      },
    }),
    [
      plotterPoints,
      composites,
      imageCount,
      markerSize,
      xDomain,
      yDomain,
      zoomFactor,
    ],
  );

  const ready = uniqueImages.length === 0 || Object.keys(composites).length > 0;

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%" }}>
      <div style={{ width: "100%", height: PLOT_DIMENSIONS.height }}>
        {ready ? (
          <AgCharts
            options={options}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <div className="plotter-loading">Preparing images…</div>
        )}
      </div>

      {clickedPoint && (
        <ImageModal
          point={clickedPoint}
          imageCount={imageCount}
          initialImageIndex={0}
          onClose={() => setClickedPoint(null)}
        />
      )}
    </div>
  );
}

export default AgChartsPlotter;
