import { useState, useMemo, useRef, useEffect } from "react";
import DeckGL from "@deck.gl/react";
import { OrthographicView } from "@deck.gl/core";
import { IconLayer, TextLayer } from "@deck.gl/layers";
import * as d3 from "d3";

import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";

import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";

import PlotterControls from "./PlotterControls";

const ORTHOGRAPHIC_VIEW = new OrthographicView({
  id: "orthographic-view",
  flipY: true,
});

const ZOOM_MIN = -4;
const ZOOM_MAX = 8;

const BASE_X_GAP = 10;
const BASE_Y_GAP = 10;

function DeckGLPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) {
    return <div className="plotter-loading">Loading data…</div>;
  }

  if (loadError) {
    return <div className="plotter-error">Error: {loadError}</div>;
  }

  return (
    <DeckGLCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

function DeckGLCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const containerRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);

  const [hoveredPoint, setHoveredPoint] = useState(null);

  const [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
  });

  const [viewState, setViewState] = useState({
    target: [0, 0, 0],
    zoom: 0,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];

      if (entry) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const width = containerWidth;
  const height = PLOT_DIMENSIONS.height;

  const innerWidth = Math.max(
    width - PLOT_MARGIN.left - PLOT_MARGIN.right,
    320,
  );

  const innerHeight = Math.max(
    height - PLOT_MARGIN.top - PLOT_MARGIN.bottom,
    240,
  );

  /**
   * NORMALIZE DATA
   */
  const normalizedPoints = useMemo(() => {
    const xScale = xGap / BASE_X_GAP;
    const yScale = yGap / BASE_Y_GAP;

    return plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * xScale,
      scaledY: point.y * yScale,
    }));
  }, [plotterPoints, xGap, yGap]);

  /**
   * WORLD EXTENTS
   */
  const xExtent = useMemo(() => {
    return extentWithPadding(normalizedPoints.map((d) => d.scaledX));
  }, [normalizedPoints]);

  const yExtent = useMemo(() => {
    return extentWithPadding(normalizedPoints.map((d) => d.scaledY));
  }, [normalizedPoints]);

  /**
   * FIT DATA INITIALLY
   */
  useEffect(() => {
    const domainWidth = xExtent[1] - xExtent[0];
    const domainHeight = yExtent[1] - yExtent[0];

    const scaleX = innerWidth / domainWidth;
    const scaleY = innerHeight / domainHeight;

    const scale = Math.min(scaleX, scaleY);

    const zoom = Math.log2(scale);

    const centerX = (xExtent[0] + xExtent[1]) / 2;
    const centerY = (yExtent[0] + yExtent[1]) / 2;

    setViewState({
      target: [centerX, centerY, 0],
      zoom,
    });
  }, [xExtent, yExtent, innerWidth, innerHeight]);

  /**
   * IMAGE DATA
   */
  const imageData = useMemo(() => {
    const items = [];

    for (const point of normalizedPoints) {
      const positions = computeImagePositions(
        point.scaledX,
        point.scaledY,
        CELL_SIZE,
        CELL_SIZE,
        imageCount,
      );

      positions.forEach((position, index) => {
        if (!point.image) return;

        items.push({
          id: `${point.id}-${index}`,

          x: position.x,
          y: position.y,

          width: position.width,
          height: position.height,

          image: point.image,

          point,
        });
      });
    }

    return items;
  }, [normalizedPoints, imageCount]);

  /**
   * GRID LINES
   */
  const gridLayer = useMemo(() => {
    const lines = [];

    const xTicks = d3.ticks(xExtent[0], xExtent[1], 10);

    const yTicks = d3.ticks(yExtent[0], yExtent[1], 8);

    xTicks.forEach((x) => {
      lines.push({
        source: [x, yExtent[0]],
        target: [x, yExtent[1]],
      });
    });

    yTicks.forEach((y) => {
      lines.push({
        source: [xExtent[0], y],
        target: [xExtent[1], y],
      });
    });

    return lines;
  }, [xExtent, yExtent]);

  /**
   * LAYERS
   */
  const layers = useMemo(() => {
    return [
      new IconLayer({
        id: "image-layer",

        data: imageData,

        pickable: true,

        billboard: false,

        sizeUnits: "common",

        getPosition: (d) => [d.x, d.y],

        getIcon: (d) => ({
          url: d.image,
          width: d.width,
          height: d.height,
        }),

        getSize: (d) => d.width,

        onHover: (info) => {
          if (info.object) {
            setHoveredPoint(info.object.point);

            setTooltipPos({
              x: info.x,
              y: info.y,
            });
          } else {
            setHoveredPoint(null);
          }
        },

        updateTriggers: {
          getIcon: imageData,
        },
      }),

      new TextLayer({
        id: "axis-labels",

        data: [
          ...d3.ticks(xExtent[0], xExtent[1], 10).map((x) => ({
            position: [x, yExtent[0] - 10],
            text: formatTick(x),
          })),

          ...d3.ticks(yExtent[0], yExtent[1], 8).map((y) => ({
            position: [xExtent[0] - 10, y],
            text: formatTick(y),
          })),
        ],

        getPosition: (d) => d.position,

        getText: (d) => d.text,

        getSize: 12,

        getColor: [140, 140, 140],

        getTextAnchor: "middle",

        getAlignmentBaseline: "center",
      }),
    ];
  }, [imageData, xExtent, yExtent]);

  /**
   * CONTROLS
   */
  const handleZoomIn = () => {
    setViewState((prev) => ({
      ...prev,
      zoom: Math.min(prev.zoom + 0.5, ZOOM_MAX),
    }));
  };

  const handleZoomOut = () => {
    setViewState((prev) => ({
      ...prev,
      zoom: Math.max(prev.zoom - 0.5, ZOOM_MIN),
    }));
  };

  const handleReset = () => {
    const domainWidth = xExtent[1] - xExtent[0];
    const domainHeight = yExtent[1] - yExtent[0];

    const scaleX = innerWidth / domainWidth;
    const scaleY = innerHeight / domainHeight;

    const scale = Math.min(scaleX, scaleY);

    const zoom = Math.log2(scale);

    setViewState({
      target: [(xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2, 0],
      zoom,
    });
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      <PlotterControls
        zoomLevel={Number(Math.pow(2, viewState.zoom).toFixed(2))}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          height,
          background: "#16213e",
          overflow: "hidden",
        }}
      >
        <DeckGL
          views={ORTHOGRAPHIC_VIEW}
          controller={{
            dragPan: true,
            scrollZoom: true,
            doubleClickZoom: true,
            touchZoom: true,
            touchRotate: false,
            keyboard: false,
          }}
          layers={layers}
          width={width}
          height={height}
          viewState={viewState}
          onViewStateChange={({ viewState }) => {
            setViewState({
              ...viewState,
              zoom: clamp(viewState.zoom, ZOOM_MIN, ZOOM_MAX),
            });
          }}
          parameters={{
            depthTest: false,
            blend: true,
          }}
          style={{
            position: "absolute",
            inset: 0,
          }}
        />

        {hoveredPoint && (
          <div
            className="plotter-tooltip"
            style={{
              display: "block",
              position: "fixed",
              left: tooltipPos.x + 12,
              top: tooltipPos.y - 10,
              pointerEvents: "none",
              zIndex: 1000,
            }}
          >
            <div className="tooltip-label">{hoveredPoint.label}</div>

            <div className="tooltip-meta">
              <span>Interval: {hoveredPoint.meta.interval}s</span>

              <span>Angle: {hoveredPoint.meta.angle}°</span>

              <span>Quality: {hoveredPoint.meta.quality}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function extentWithPadding(values) {
  if (!values.length) return [0, 1];

  const min = Math.min(...values);
  const max = Math.max(...values);

  const span = max - min;

  const pad = span === 0 ? 5 : Math.max(span * 0.18, 1);

  return [min - pad, max + pad];
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function formatTick(value) {
  if (Number.isInteger(value)) {
    return String(value);
  }

  return parseFloat(Number(value).toPrecision(4)).toString();
}

export default DeckGLPlotter;
