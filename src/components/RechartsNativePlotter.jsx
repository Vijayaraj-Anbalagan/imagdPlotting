/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/refs */
import {
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback,
  memo,
  useLayoutEffect,
} from "react";
import { createPortal } from "react-dom";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid } from "recharts";
import * as d3 from "d3";
import { usePlotterData } from "../lib/plotterData";
import { PLOT_DIMENSIONS, DATA_POINT_LIMITS } from "../lib/constants";
import {
  computeAdaptiveCellSize,
  computeEffectiveImageCount,
} from "../lib/densityLayout";
import PlotterControls from "./PlotterControls";
import ImageModal from "./ImageModal";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
import { useInteractionMode } from "../lib/interactionMode";
import { generateSyntheticPoints } from "../lib/syntheticDataGenerator";
import {
  getChartViewport,
  updateChartViewport,
  markViewportUserModified,
} from "../lib/chartViewportStore";
import { buildQuadtree, queryVisiblePointsQuadtree } from "../lib/quadtree";
import { useThrottledCallback } from "../lib/debouncedHooks";
import { computeImagePositions } from "../lib/gridLayout";
import { getImageBitmapLoD } from "../lib/imageBitmapCache";

const ZOOM_STEP = 1.5;
const ZOOM_EPS = 0.001;
const ZOOM_MAX = 1000;
const BRUSH_MIN_PIXELS = 5;
const BRUSH_FILL = "rgba(68, 147, 255, 0.15)";
const BRUSH_STROKE = "#4493ff";
const BRUSH_STROKE_WIDTH = 1.5;

const BASE_IMAGE_GAP_X = 10;
const BASE_IMAGE_GAP_Y = 10;

// Chart geometry. Recharts insets the plotting area by margin PLUS the axis
// width/height, so we lock both and derive the plot rect ourselves. This lets
// the Canvas overlay and the pointer hit-testing align pixel-for-pixel with
// what Recharts draws.
const MARGIN = { top: 20, right: 20, bottom: 10, left: 10 };
const Y_AXIS_WIDTH = 50;
const X_AXIS_HEIGHT = 30;

const PLOT_BG = "#16213e";

// Stable empty array for Canvas mode: keeps the Scatter's `data` identity
// constant so Recharts doesn't process 1000 points just to draw nothing.
const EMPTY_DATA = [];

const TooltipOverlay = memo(function TooltipOverlay({
  hoveredPoint,
  tooltipRef,
  position,
}) {
  if (!hoveredPoint) return null;
  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={tooltipRef}
      style={{
        position: "fixed",
        left: `${position?.x ?? 0}px`,
        top: `${position?.y ?? 0}px`,
        background: "#111",
        border: "1px solid #333",
        padding: "10px",
        borderRadius: "8px",
        color: "white",
        fontSize: "12px",
        pointerEvents: "none",
        zIndex: 1000,
      }}
    >
      <div>{hoveredPoint.label}</div>
      <div>X: {hoveredPoint.x}</div>
      <div>Y: {hoveredPoint.y}</div>
    </div>,
    document.body,
  );
});

function createInitialDragState() {
  return {
    dragging: false,
    pointerId: null,
    startClientX: 0,
    startClientY: 0,
    startTransform: { scale: 1, x: 0, y: 0 },
  };
}

/**
 * Canvas renderer for the "Canvas Rendering" toggle. Positioned exactly over
 * the Recharts plot rect; draws bitmaps with the same content-space transform
 * Recharts uses for its scatter points, so SVG and Canvas modes are identical.
 */
function RechartsImageCanvas({
  points,
  baseXScale,
  baseYScale,
  transform,
  cellSize,
  imageCount,
  plotLeft,
  plotTop,
  plotWidth,
  plotHeight,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || plotWidth <= 0 || plotHeight <= 0) return;

    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    canvas.width = plotWidth * dpr;
    canvas.height = plotHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, plotWidth, plotHeight);

    let cancelled = false;

    const render = async () => {
      const renderedPx = cellSize * transform.scale;
      const uniqueUrls = [...new Set(points.map((p) => p.image))];
      const bitmapMap = new Map();

      await Promise.all(
        uniqueUrls.map(async (url) => {
          try {
            bitmapMap.set(url, await getImageBitmapLoD(url, renderedPx));
          } catch {
            // ignore
          }
        }),
      );

      if (cancelled) return;

      for (const point of points) {
        const x = transform.x + baseXScale(point.scaledX) * transform.scale;
        const y = transform.y + baseYScale(point.scaledY) * transform.scale;

        if (
          x < -renderedPx ||
          x > plotWidth + renderedPx ||
          y < -renderedPx ||
          y > plotHeight + renderedPx
        ) {
          continue;
        }

        if (renderedPx < 6) {
          ctx.fillStyle = "#2a3a5a";
          ctx.fillRect(
            x - renderedPx / 2,
            y - renderedPx / 2,
            renderedPx,
            renderedPx,
          );
          continue;
        }

        const bitmap = bitmapMap.get(point.image);
        if (!bitmap) {
          ctx.fillStyle = "#444";
          ctx.fillRect(
            x - renderedPx / 2,
            y - renderedPx / 2,
            renderedPx,
            renderedPx,
          );
          continue;
        }

        const positions = computeImagePositions(
          x,
          y,
          renderedPx,
          renderedPx,
          imageCount,
        );

        for (const pos of positions) {
          ctx.drawImage(bitmap, pos.x, pos.y, pos.width, pos.height);
        }
      }
    };

    render();

    return () => {
      cancelled = true;
    };
  }, [
    points,
    baseXScale,
    baseYScale,
    transform.scale,
    transform.x,
    transform.y,
    cellSize,
    imageCount,
    plotWidth,
    plotHeight,
  ]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        left: `${plotLeft}px`,
        top: `${plotTop}px`,
        width: `${plotWidth}px`,
        height: `${plotHeight}px`,
        pointerEvents: "none",
      }}
    />
  );
}

function RechartsNativePlotter({
  enableQuadtree,
  enableLOD,
  enableCanvas,
  chartId,
  imageCount,
  xGap,
  yGap,
  dataPointCount,
}) {
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
    <RechartsNativeCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
      chartId={chartId}
      enableQuadtree={enableQuadtree}
      enableLOD={enableLOD}
      enableCanvas={enableCanvas}
    />
  );
}

const ControlsLayer = memo(function ControlsLayer({
  zoomLevel,
  onZoomIn,
  onZoomOut,
  onReset,
  interactionMode,
  onModeChange,
  forceNumericTicks,
  onForceNumericToggle,
}) {
  return (
    <div style={{ position: "relative", zIndex: 10, marginBottom: 12 }}>
      <PlotterControls
        zoomLevel={zoomLevel}
        onZoomIn={onZoomIn}
        onZoomOut={onZoomOut}
        onReset={onReset}
        interactionMode={interactionMode}
        onModeChange={onModeChange}
        forceNumericTicks={forceNumericTicks}
        onForceNumericToggle={onForceNumericToggle}
      />
    </div>
  );
});

function RechartsNativeCanvas({
  plotterPoints,
  imageCount,
  xGap,
  yGap,
  chartId,
  enableQuadtree,
  enableLOD,
  enableCanvas,
}) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const rafIdRef = useRef(null);
  const dragRef = useRef(createInitialDragState());
  const cachedScalesRef = useRef({ key: null, xScale: null, yScale: null });
  const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);
  const initialViewportRef = useRef(getChartViewport(chartId));
  const prevGapRef = useRef({ xGap, yGap });
  // console.log("Chart view poort", getChartViewport(chartId))

  const [transform, setTransform] = useState(() => ({
    scale: initialViewportRef.current.scale || 1,
    x: initialViewportRef.current.translateX || 0,
    y: initialViewportRef.current.translateY || 0,
  }));
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const tooltipRef = useRef(null);
  const [brushRect, setBrushRect] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const brushStartRef = useRef(null);
  const pendingTransformRef = useRef(null);
  const [clickedPoint, setClickedPoint] = useState(null);
  const [clickedTileIndex, setClickedTileIndex] = useState(0);
  const pointerDownInfoRef = useRef(null);
  const [forceNumericTicks, setForceNumericTicks] = useState(false);
  const { interactionMode, setInteractionMode, isPanMode } =
    useInteractionMode();

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setContainerWidth(entry.contentRect.width);
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPanMode) {
      brushStartRef.current = null;
      setBrushRect(null);
    }
  }, [isPanMode]);

  useEffect(() => {
    updateChartViewport(chartId, {
      scale: transform.scale,
      translateX: transform.x,
      translateY: transform.y,
    });
  }, [chartId, transform]);

  useLayoutEffect(() => {
    const saved = getChartViewport(chartId);
    setTransform({
      scale: saved?.scale ?? 1,
      x: saved?.translateX ?? 0,
      y: saved?.translateY ?? 0,
    });
  }, [chartId]);

  const height = PLOT_DIMENSIONS.height;

  // Plot rect derived from Recharts' inset model (margin + axis size).
  const plotLeft = MARGIN.left + Y_AXIS_WIDTH;
  const plotTop = MARGIN.top;
  const plotWidth = Math.max(containerWidth - plotLeft - MARGIN.right, 320);
  const plotHeight = Math.max(
    height - plotTop - MARGIN.bottom - X_AXIS_HEIGHT,
    240,
  );

  // Gap spreads images apart: the content box grows with the gap while the
  // viewport stays the plot rect (matching the other plotters).
  const xSpacingScale = xGap / BASE_IMAGE_GAP_X;
  const ySpacingScale = yGap / BASE_IMAGE_GAP_Y;
  const contentWidth = plotWidth * xSpacingScale;
  const contentHeight = plotHeight * ySpacingScale;

  const fitScale = Math.min(
    plotWidth / contentWidth,
    plotHeight / contentHeight,
  );

  const homeTransform = useMemo(
    () =>
      clampTransform(
        { scale: fitScale, x: 0, y: 0 },
        contentWidth,
        contentHeight,
        plotWidth,
        plotHeight,
      ),
    [fitScale, contentWidth, contentHeight, plotWidth, plotHeight],
  );

  // Reset to home when gap settings change, or on first mount with no saved
  // user viewport. Container resize alone does NOT reset, so zoom/pan survives
  // virtualization remounts.
  useEffect(() => {
    const gapChanged =
      prevGapRef.current.xGap !== xGap || prevGapRef.current.yGap !== yGap;
    prevGapRef.current = { xGap, yGap };

    const saved = getChartViewport(chartId);
    if (saved?.userModified && !gapChanged) {
      return;
    }

    if (gapChanged) {
      updateChartViewport(chartId, { userModified: false });
    }
    setTransform(homeTransform);
  }, [chartId, xGap, yGap, homeTransform]);

  const normalizedPoints = useMemo(() => {
    return plotterPoints.map((point) => ({
      id: point.id,
      x: point.x,
      y: point.y,
      scaledX: point.x,
      scaledY: point.y,
      image: point.image,
      label: point.label,
      meta: point.meta,
    }));
  }, [plotterPoints]);

  const xExtent = useMemo(
    () => extentWithPaddingFromPoints(normalizedPoints, (p) => p.scaledX),
    [normalizedPoints],
  );

  const yExtent = useMemo(
    () => extentWithPaddingFromPoints(normalizedPoints, (p) => p.scaledY),
    [normalizedPoints],
  );

  const { baseXScale, baseYScale } = useMemo(() => {
    const scaleKey = `${xExtent[0]}-${xExtent[1]}-${yExtent[0]}-${yExtent[1]}-${contentWidth}-${contentHeight}`;

    if (
      cachedScalesRef.current.key === scaleKey &&
      cachedScalesRef.current.xScale &&
      cachedScalesRef.current.yScale
    ) {
      return {
        baseXScale: cachedScalesRef.current.xScale,
        baseYScale: cachedScalesRef.current.yScale,
      };
    }

    const xScale = d3.scaleLinear().domain(xExtent).range([0, contentWidth]);
    const yScale = d3.scaleLinear().domain(yExtent).range([contentHeight, 0]);

    cachedScalesRef.current = { key: scaleKey, xScale, yScale };
    return { baseXScale: xScale, baseYScale: yScale };
  }, [xExtent, yExtent, contentWidth, contentHeight]);

  const quadtree = useMemo(() => {
    if (!normalizedPoints.length) return null;
    return buildQuadtree(normalizedPoints);
  }, [normalizedPoints]);

  const viewportCulledPoints = useMemo(() => {
    if (!quadtree || normalizedPoints.length === 0) {
      return normalizedPoints;
    }

    const xMinPx = (0 - transform.x) / transform.scale;
    const xMaxPx = (plotWidth - transform.x) / transform.scale;
    const yMaxPx = (0 - transform.y) / transform.scale;
    const yMinPx = (plotHeight - transform.y) / transform.scale;

    const xMin = baseXScale.invert(xMinPx);
    const xMax = baseXScale.invert(xMaxPx);
    const yMin = baseYScale.invert(yMinPx);
    const yMax = baseYScale.invert(yMaxPx);

    const result = queryVisiblePointsQuadtree(
      quadtree,
      { xMin, xMax, yMin, yMax },
      0,
    );

    return Array.isArray(result) && result.length ? result : normalizedPoints;
  }, [
    quadtree,
    normalizedPoints,
    transform.x,
    transform.scale,
    transform.y,
    plotWidth,
    plotHeight,
    baseXScale,
    baseYScale,
  ]);

  const visibleDomain = useMemo(
    () =>
      computeVisibleDomain(
        xExtent,
        yExtent,
        transform,
        contentWidth,
        contentHeight,
        plotWidth,
        plotHeight,
      ),
    [
      xExtent,
      yExtent,
      transform,
      contentWidth,
      contentHeight,
      plotWidth,
      plotHeight,
    ],
  );

  const xTicks = useMemo(() => {
    const maxCount = Math.max(4, Math.floor(plotWidth / 60));
    if (forceNumericTicks) {
      return d3.ticks(visibleDomain.xMin, visibleDomain.xMax, maxCount);
    }
    return computeDataTicks(
      normalizedPoints,
      (p) => p.scaledX,
      visibleDomain.xMin,
      visibleDomain.xMax,
      maxCount,
    );
  }, [
    normalizedPoints,
    visibleDomain.xMin,
    visibleDomain.xMax,
    forceNumericTicks,
    plotWidth,
  ]);

  const yTicks = useMemo(() => {
    const maxCount = Math.max(3, Math.floor(plotHeight / 45));
    if (forceNumericTicks) {
      return d3.ticks(visibleDomain.yMin, visibleDomain.yMax, maxCount);
    }
    return computeDataTicks(
      normalizedPoints,
      (p) => p.scaledY,
      visibleDomain.yMin,
      visibleDomain.yMax,
      maxCount,
    );
  }, [
    normalizedPoints,
    visibleDomain.yMin,
    visibleDomain.yMax,
    forceNumericTicks,
    plotHeight,
  ]);

  const adaptiveCellSizeBase = useMemo(() => {
    return computeAdaptiveCellSize(
      normalizedPoints,
      (val) => baseXScale(val),
      (val) => baseYScale(val),
    );
  }, [normalizedPoints, baseXScale, baseYScale]);

  const cellPx = adaptiveCellSizeBase * transform.scale;

  const visiblePointsForRender = useMemo(() => {
    if (!enableQuadtree) {
      return normalizedPoints;
    }
    return viewportCulledPoints;
  }, [enableQuadtree, normalizedPoints, viewportCulledPoints]);

  const effectiveImageCountForRender = useMemo(() => {
    if (!enableLOD) {
      return imageCount;
    }
    return Math.max(1, computeEffectiveImageCount(cellPx, imageCount));
  }, [enableLOD, cellPx, imageCount]);

  const throttledTransformUpdate = useThrottledCallback(
    (nextTransform) => setTransform(nextTransform),
    16,
  );

  const scheduleTransformUpdate = useCallback(
    (nextTransform) => {
      pendingTransformRef.current = nextTransform;
      if (rafIdRef.current) return;

      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = null;
        if (pendingTransformRef.current) {
          throttledTransformUpdate(pendingTransformRef.current);
          pendingTransformRef.current = null;
        }
      });
    },
    [throttledTransformUpdate],
  );

  const zoomTo = useCallback(
    (nextScale, anchorX, anchorY) => {
      setTransform((prev) => {
        const clampedScale = clamp(nextScale, fitScale, ZOOM_MAX);
        const pivotX = Number.isFinite(anchorX) ? anchorX : plotWidth / 2;
        const pivotY = Number.isFinite(anchorY) ? anchorY : plotHeight / 2;

        const nextX =
          prev.x - (pivotX - prev.x) * (clampedScale / prev.scale - 1);
        const nextY =
          prev.y - (pivotY - prev.y) * (clampedScale / prev.scale - 1);

        return clampTransform(
          { scale: clampedScale, x: nextX, y: nextY },
          contentWidth,
          contentHeight,
          plotWidth,
          plotHeight,
        );
      });
    },
    [plotWidth, plotHeight, contentWidth, contentHeight, fitScale],
  );

  const handleZoomIn = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "ZOOM_IN",
      visualizationLibrary: "Recharts (Native)",
      interactionSource: "button",
    });
    markViewportUserModified(chartId);
    zoomTo(transform.scale * ZOOM_STEP, plotWidth / 2, plotHeight / 2);
  }, [chartId, transform.scale, zoomTo, plotWidth, plotHeight]);

  const handleZoomOut = useCallback(() => {
    if (transform.scale <= fitScale + ZOOM_EPS) {
      return;
    }
    logChartInteractionEvent({
      interactionType: "ZOOM_OUT",
      visualizationLibrary: "Recharts (Native)",
      interactionSource: "button",
    });
    markViewportUserModified(chartId);
    zoomTo(transform.scale / ZOOM_STEP, plotWidth / 2, plotHeight / 2);
  }, [chartId, transform.scale, zoomTo, plotWidth, plotHeight, fitScale]);

  const handleReset = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Recharts (Native)",
      interactionSource: "button",
    });
    updateChartViewport(chartId, { userModified: false });
    setTransform(homeTransform);
    setHoveredPoint(null);
  }, [chartId, homeTransform]);

  // Wheel zoom is coalesced to one transform commit per animation frame.
  // Multiple wheel ticks inside a frame accumulate their zoom factor and apply
  // through a single functional setTransform, so we never read a stale base.
  const pendingWheelRef = useRef(null);
  const wheelRafRef = useRef(null);

  const flushWheel = useCallback(() => {
    wheelRafRef.current = null;
    const pending = pendingWheelRef.current;
    pendingWheelRef.current = null;
    if (!pending) return;

    setTransform((prev) => {
      const clampedScale = clamp(
        prev.scale * pending.factor,
        fitScale,
        ZOOM_MAX,
      );
      if (clampedScale === prev.scale) return prev;

      const nextX =
        prev.x - (pending.localX - prev.x) * (clampedScale / prev.scale - 1);
      const nextY =
        prev.y - (pending.localY - prev.y) * (clampedScale / prev.scale - 1);
      return clampTransform(
        { scale: clampedScale, x: nextX, y: nextY },
        contentWidth,
        contentHeight,
        plotWidth,
        plotHeight,
      );
    });
  }, [fitScale, contentWidth, contentHeight, plotWidth, plotHeight]);

  const handleWheel = useCallback(
    (event) => {
      event.preventDefault();

      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;

      const localX = event.clientX - rect.left - plotLeft;
      const localY = event.clientY - rect.top - plotTop;

      if (localX < 0 || localY < 0 || localX > plotWidth || localY > plotHeight) {
        return;
      }

      const isZoomIn = event.deltaY < 0;
      if (!isZoomIn && transform.scale <= fitScale + ZOOM_EPS) {
        return;
      }

      logChartInteractionEvent({
        interactionType: isZoomIn ? "ZOOM_IN" : "ZOOM_OUT",
        visualizationLibrary: "Recharts (Native)",
        interactionSource: "wheel",
      });

      const factor = event.deltaY > 0 ? 1 / ZOOM_STEP : ZOOM_STEP;
      markViewportUserModified(chartId);

      const prevPending = pendingWheelRef.current;
      pendingWheelRef.current = {
        localX,
        localY,
        factor: (prevPending ? prevPending.factor : 1) * factor,
      };

      if (!wheelRafRef.current) {
        wheelRafRef.current = requestAnimationFrame(flushWheel);
      }
    },
    [
      chartId,
      plotLeft,
      plotTop,
      plotWidth,
      plotHeight,
      transform.scale,
      fitScale,
      flushWheel,
    ],
  );

  const handlePointerDown = useCallback(
    (event) => {
      pointerDownInfoRef.current = {
        clientX: event.clientX,
        clientY: event.clientY,
        time: Date.now(),
      };

      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;

      const localX = event.clientX - rect.left - plotLeft;
      const localY = event.clientY - rect.top - plotTop;

      if (localX < 0 || localY < 0 || localX > plotWidth || localY > plotHeight) {
        return;
      }

      if (isPanMode) {
        if (transform.scale <= fitScale + ZOOM_EPS) {
          return;
        }
        logChartInteractionEvent({
          interactionType: "PAN",
          visualizationLibrary: "Recharts (Native)",
          interactionSource: "drag",
        });
        markViewportUserModified(chartId);
        setIsDragging(true);
        dragRef.current = {
          dragging: true,
          pointerId: event.pointerId,
          startClientX: event.clientX,
          startClientY: event.clientY,
          startTransform: transform,
        };
        event.currentTarget.setPointerCapture?.(event.pointerId);
        return;
      }

      const clampedX = clamp(localX, 0, plotWidth);
      const clampedY = clamp(localY, 0, plotHeight);
      brushStartRef.current = { x: clampedX, y: clampedY };
      setBrushRect({ x: clampedX, y: clampedY, width: 0, height: 0 });
      event.currentTarget.setPointerCapture?.(event.pointerId);
    },
    [chartId, plotLeft, plotTop, plotWidth, plotHeight, fitScale, transform, isPanMode],
  );

  const handlePointerMove = useCallback(
    (event) => {
      if (brushStartRef.current) {
        const rect = svgRef.current?.getBoundingClientRect();
        if (!rect) return;

        const localX = clamp(
          event.clientX - rect.left - plotLeft,
          0,
          plotWidth,
        );
        const localY = clamp(
          event.clientY - rect.top - plotTop,
          0,
          plotHeight,
        );
        const startPoint = brushStartRef.current;

        setBrushRect({
          x: Math.min(startPoint.x, localX),
          y: Math.min(startPoint.y, localY),
          width: Math.abs(localX - startPoint.x),
          height: Math.abs(localY - startPoint.y),
        });
        return;
      }

      const dragState = dragRef.current;

      if (dragState?.dragging) {
        if (dragState.pointerId !== event.pointerId) {
          return;
        }
        if (dragState.startTransform.scale <= fitScale + ZOOM_EPS) {
          dragRef.current = createInitialDragState();
          setIsDragging(false);
          setTransform(homeTransform);
          return;
        }

        const dx = event.clientX - dragState.startClientX;
        const dy = event.clientY - dragState.startClientY;

        const next = clampTransform(
          {
            scale: dragState.startTransform.scale,
            x: dragState.startTransform.x + dx,
            y: dragState.startTransform.y + dy,
          },
          contentWidth,
          contentHeight,
          plotWidth,
          plotHeight,
        );

        scheduleTransformUpdate(next);
        return;
      }

      // --- Hover hit-testing (content-space; works for SVG and canvas) ---
      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;

      const hoverLocalX = event.clientX - rect.left - plotLeft;
      const hoverLocalY = event.clientY - rect.top - plotTop;

      if (
        hoverLocalX < 0 ||
        hoverLocalY < 0 ||
        hoverLocalX > plotWidth ||
        hoverLocalY > plotHeight
      ) {
        setHoveredPoint((prev) => (prev ? null : prev));
        return;
      }

      const contentX = (hoverLocalX - transform.x) / transform.scale;
      const contentY = (hoverLocalY - transform.y) / transform.scale;

      const hitRadius = Math.max(adaptiveCellSizeBase * 0.6, 4);
      const hitRadiusSq = hitRadius * hitRadius;

      let nearest = null;
      let nearestDistSq = Infinity;

      for (const p of visiblePointsForRender) {
        const px = baseXScale(p.scaledX);
        const py = baseYScale(p.scaledY);
        const dx = contentX - px;
        const dy = contentY - py;
        const distSq = dx * dx + dy * dy;
        if (distSq <= hitRadiusSq && distSq < nearestDistSq) {
          nearest = p;
          nearestDistSq = distSq;
        }
      }

      if (!nearest) {
        setHoveredPoint((prev) => (prev ? null : prev));
        return;
      }

      setTooltipPosition({ x: event.clientX + 12, y: event.clientY + 12 });
      setHoveredPoint((prev) => (prev?.id === nearest.id ? prev : nearest));
    },
    [
      plotLeft,
      plotTop,
      plotWidth,
      plotHeight,
      contentWidth,
      contentHeight,
      fitScale,
      homeTransform,
      scheduleTransformUpdate,
      transform,
      adaptiveCellSizeBase,
      visiblePointsForRender,
      baseXScale,
      baseYScale,
    ],
  );

  const handlePointerUp = useCallback(
    (event) => {
      const downInfo = pointerDownInfoRef.current;
      pointerDownInfoRef.current = null;

      if (downInfo) {
        const dx = event.clientX - downInfo.clientX;
        const dy = event.clientY - downInfo.clientY;
        const isClick =
          dx * dx + dy * dy < 25 && Date.now() - downInfo.time < 300;
        if (isClick) {
          const rect = svgRef.current?.getBoundingClientRect();
          if (rect) {
            const localX = event.clientX - rect.left - plotLeft;
            const localY = event.clientY - rect.top - plotTop;
            if (
              localX >= 0 &&
              localY >= 0 &&
              localX <= plotWidth &&
              localY <= plotHeight
            ) {
              const contentX = (localX - transform.x) / transform.scale;
              const contentY = (localY - transform.y) / transform.scale;
              const hitRadius = Math.max(adaptiveCellSizeBase * 0.6, 4);
              const hitRadiusSq = hitRadius * hitRadius;
              let nearest = null;
              let nearestDistSq = Infinity;
              for (const p of visiblePointsForRender) {
                const px = baseXScale(p.scaledX);
                const py = baseYScale(p.scaledY);
                const ddx = contentX - px;
                const ddy = contentY - py;
                const d2 = ddx * ddx + ddy * ddy;
                if (d2 <= hitRadiusSq && d2 < nearestDistSq) {
                  nearest = p;
                  nearestDistSq = d2;
                }
              }
              if (nearest) {
                const positions = computeImagePositions(
                  baseXScale(nearest.scaledX),
                  baseYScale(nearest.scaledY),
                  adaptiveCellSizeBase,
                  adaptiveCellSizeBase,
                  effectiveImageCountForRender,
                );
                let tileIndex = 0;
                for (const pos of positions) {
                  const tileCX = pos.x + pos.width / 2;
                  const tileCY = pos.y + pos.height / 2;
                  if (
                    Math.abs(contentX - tileCX) <= pos.width / 2 &&
                    Math.abs(contentY - tileCY) <= pos.height / 2
                  ) {
                    tileIndex = pos.imageIndex;
                    break;
                  }
                }
                brushStartRef.current = null;
                setBrushRect(null);
                event.currentTarget.releasePointerCapture?.(event.pointerId);
                setClickedPoint(nearest);
                setClickedTileIndex(tileIndex);
                return;
              }
            }
          }
        }
      }

      if (brushStartRef.current && brushRect) {
        const isTooSmall =
          brushRect.width < BRUSH_MIN_PIXELS ||
          brushRect.height < BRUSH_MIN_PIXELS;

        if (!isTooSmall) {
          logChartInteractionEvent({
            interactionType: "ZOOM_IN",
            visualizationLibrary: "Recharts (Native)",
            interactionSource: "brush",
          });
          markViewportUserModified(chartId);
          const newTransform = convertBrushToTransform(
            brushRect,
            transform,
            contentWidth,
            contentHeight,
            plotWidth,
            plotHeight,
            fitScale,
          );
          setTransform(newTransform);
        }

        brushStartRef.current = null;
        setBrushRect(null);
        event.currentTarget.releasePointerCapture?.(event.pointerId);
        return;
      }

      setIsDragging(false);

      const dragState = dragRef.current;
      if (dragState?.dragging && transform.scale <= fitScale + ZOOM_EPS) {
        setTransform(homeTransform);
      }

      dragRef.current = createInitialDragState();
      event.currentTarget.releasePointerCapture?.(event.pointerId);
    },
    [
      chartId,
      brushRect,
      transform,
      plotLeft,
      plotTop,
      plotWidth,
      plotHeight,
      contentWidth,
      contentHeight,
      fitScale,
      homeTransform,
      adaptiveCellSizeBase,
      effectiveImageCountForRender,
      baseXScale,
      baseYScale,
      visiblePointsForRender,
    ],
  );

  useEffect(() => {
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      if (wheelRafRef.current) {
        cancelAnimationFrame(wheelRafRef.current);
        wheelRafRef.current = null;
      }
      dragRef.current = createInitialDragState();
      brushStartRef.current = null;
      cachedScalesRef.current = { key: null, xScale: null, yScale: null };
      pendingTransformRef.current = null;
      pendingWheelRef.current = null;
    };
  }, []);

  useEffect(() => {
    const svgElement = svgRef.current;
    if (!svgElement) return;

    const wheelHandler = (event) => {
      event.preventDefault();
      handleWheel(event);
    };

    svgElement.addEventListener("wheel", wheelHandler, { passive: false });
    return () => {
      svgElement.removeEventListener("wheel", wheelHandler);
    };
  }, [handleWheel]);

  const handleDoubleClick = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Recharts (Native)",
      interactionSource: "double_click",
    });
    updateChartViewport(chartId, { userModified: false });
    setTransform(homeTransform);
    setHoveredPoint(null);
  }, [chartId, homeTransform]);

  // Latest shape params live in a ref so the shape callback identity stays
  // stable across zoom frames. Otherwise Recharts sees a new `shape` prop every
  // frame and re-renders every symbol, churning memory.
  const shapeParamsRef = useRef({});
  shapeParamsRef.current = {
    cellPx,
    imageCount: effectiveImageCountForRender,
    plotLeft,
    plotTop,
    plotWidth,
    plotHeight,
  };

  // Recharts-driven scatter shape: renders the image cluster centered on the
  // pixel coords (cx, cy) Recharts computes from the (derived) visible domain.
  const renderImageShape = useCallback((shapeProps) => {
    const { cx, cy, payload } = shapeProps;
    const {
      cellPx: cell,
      imageCount: imgCount,
      plotLeft: left,
      plotTop: top,
      plotWidth: width,
      plotHeight: pHeight,
    } = shapeParamsRef.current;

    if (cx == null || cy == null || Number.isNaN(cx) || Number.isNaN(cy)) {
      return null;
    }
    if (
      cx < left - cell ||
      cx > left + width + cell ||
      cy < top - cell ||
      cy > top + pHeight + cell
    ) {
      return null;
    }

    const positions = computeImagePositions(cx, cy, cell, cell, imgCount);

    return (
      <g>
        {positions.map((pos) => (
          <image
            key={`${payload.id}-${pos.imageIndex}`}
            href={payload.image}
            x={pos.x}
            y={pos.y}
            width={pos.width}
            height={pos.height}
            preserveAspectRatio="none"
          />
        ))}
      </g>
    );
  }, []);

  const tickFormatter = useCallback(
    (value) => formatTick(value, forceNumericTicks),
    [forceNumericTicks],
  );

  const stageCursor = isPanMode
    ? isDragging
      ? "grabbing"
      : "grab"
    : "crosshair";

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%" }}>
      <ControlsLayer
        zoomLevel={transform.scale / fitScale}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        interactionMode={interactionMode}
        onModeChange={setInteractionMode}
        forceNumericTicks={forceNumericTicks}
        onForceNumericToggle={() => setForceNumericTicks((v) => !v)}
      />

      <div
        style={{ position: "relative", width: "100%", background: PLOT_BG }}
      >
        <ScatterChart
          width={containerWidth}
          height={height}
          margin={MARGIN}
        >
          <CartesianGrid stroke="#2a2a3e" strokeDasharray="3 3" />
          <XAxis
            type="number"
            dataKey="scaledX"
            domain={[visibleDomain.xMin, visibleDomain.xMax]}
            allowDataOverflow
            ticks={xTicks}
            interval={0}
            height={X_AXIS_HEIGHT}
            tickFormatter={tickFormatter}
            tick={{ fill: "#888", fontSize: 11 }}
            axisLine={{ stroke: "#555" }}
            tickLine={{ stroke: "#555" }}
          />
          <YAxis
            type="number"
            dataKey="scaledY"
            domain={[visibleDomain.yMin, visibleDomain.yMax]}
            allowDataOverflow
            ticks={yTicks}
            interval={0}
            width={Y_AXIS_WIDTH}
            tickFormatter={tickFormatter}
            tick={{ fill: "#888", fontSize: 11 }}
            axisLine={{ stroke: "#555" }}
            tickLine={{ stroke: "#555" }}
          />
          <Scatter
            data={enableCanvas ? EMPTY_DATA : visiblePointsForRender}
            shape={renderImageShape}
            isAnimationActive={false}
          />
        </ScatterChart>

        {enableCanvas && (
          <RechartsImageCanvas
            points={visiblePointsForRender}
            baseXScale={baseXScale}
            baseYScale={baseYScale}
            transform={transform}
            cellSize={adaptiveCellSizeBase}
            imageCount={effectiveImageCountForRender}
            plotLeft={plotLeft}
            plotTop={plotTop}
            plotWidth={plotWidth}
            plotHeight={plotHeight}
          />
        )}

        {/* Transparent interaction + hit-test overlay (pointer + wheel) */}
        <svg
          ref={svgRef}
          width={containerWidth}
          height={height}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "block",
            touchAction: "none",
            userSelect: "none",
            cursor: stageCursor,
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onDoubleClick={handleDoubleClick}
        >
          {brushRect && brushRect.width > 0 && brushRect.height > 0 && (
            <g transform={`translate(${plotLeft},${plotTop})`}>
              <rect
                x={brushRect.x}
                y={brushRect.y}
                width={brushRect.width}
                height={brushRect.height}
                fill={BRUSH_FILL}
                stroke={BRUSH_STROKE}
                strokeWidth={BRUSH_STROKE_WIDTH}
                rx={2}
                ry={2}
              />
            </g>
          )}
        </svg>
      </div>

      <TooltipOverlay
        hoveredPoint={hoveredPoint}
        tooltipRef={tooltipRef}
        position={tooltipPosition}
      />

      {clickedPoint && (
        <ImageModal
          point={clickedPoint}
          imageCount={effectiveImageCountForRender}
          initialImageIndex={clickedTileIndex}
          onClose={() => {
            setClickedPoint(null);
            setClickedTileIndex(0);
          }}
        />
      )}
    </div>
  );
}

/* ─── Pure helpers (ported from the SVG/d3 RechartsPlotter) ─────────────── */

function extentWithPaddingFromPoints(points, accessor) {
  if (!points.length) return [0, 1];

  let min = Infinity;
  let max = -Infinity;

  for (const point of points) {
    const value = accessor(point);
    if (value < min) min = value;
    if (value > max) max = value;
  }

  const span = max - min;
  const pad = span === 0 ? 5 : Math.max(span * 0.18, 1);

  return [min - pad, max + pad];
}

function computeVisibleDomain(
  xExtent,
  yExtent,
  transform,
  contentWidth,
  contentHeight,
  viewWidth,
  viewHeight,
) {
  const domainWidth = xExtent[1] - xExtent[0];
  const domainHeight = yExtent[1] - yExtent[0];

  const xMin =
    xExtent[0] - (transform.x / transform.scale / contentWidth) * domainWidth;
  const xMax =
    xMin + (viewWidth / transform.scale / contentWidth) * domainWidth;

  const yMax =
    yExtent[1] + (transform.y / transform.scale / contentHeight) * domainHeight;
  const yMin =
    yMax - (viewHeight / transform.scale / contentHeight) * domainHeight;

  return { xMin, xMax, yMin, yMax };
}

function clampTransform(transform, contentWidth, contentHeight, viewWidth, viewHeight) {
  const scale = transform.scale;
  const scaledWidth = contentWidth * scale;
  const scaledHeight = contentHeight * scale;

  let x = transform.x;
  let y = transform.y;

  if (scaledWidth <= viewWidth) {
    x = (viewWidth - scaledWidth) / 2;
  } else {
    x = Math.min(0, Math.max(viewWidth - scaledWidth, x));
  }

  if (scaledHeight <= viewHeight) {
    y = (viewHeight - scaledHeight) / 2;
  } else {
    y = Math.min(0, Math.max(viewHeight - scaledHeight, y));
  }

  return { scale, x, y };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function convertBrushToTransform(
  brushPixelRect,
  currentTransform,
  contentWidth,
  contentHeight,
  plotInnerWidth,
  plotInnerHeight,
  minScale,
) {
  const contentX0 =
    (brushPixelRect.x - currentTransform.x) / currentTransform.scale;
  const contentY0 =
    (brushPixelRect.y - currentTransform.y) / currentTransform.scale;
  const contentBrushWidth = brushPixelRect.width / currentTransform.scale;
  const contentBrushHeight = brushPixelRect.height / currentTransform.scale;

  const fitScaleX = plotInnerWidth / contentBrushWidth;
  const fitScaleY = plotInnerHeight / contentBrushHeight;
  const newScale = clamp(Math.min(fitScaleX, fitScaleY), minScale, ZOOM_MAX);

  const rawX = -contentX0 * newScale;
  const rawY = -contentY0 * newScale;

  return clampTransform(
    { scale: newScale, x: rawX, y: rawY },
    contentWidth,
    contentHeight,
    plotInnerWidth,
    plotInnerHeight,
  );
}

function computeDataTicks(points, accessor, domainMin, domainMax, maxCount, threshold = 20) {
  const inRange = new Set();
  for (const p of points) {
    const v = accessor(p);
    if (v >= domainMin && v <= domainMax) inRange.add(v);
  }
  const sorted = Array.from(inRange).sort((a, b) => a - b);
  if (
    sorted.length === 0 ||
    sorted.length > threshold ||
    sorted.length < Math.ceil(maxCount / 2)
  ) {
    return d3.ticks(domainMin, domainMax, maxCount);
  }
  if (sorted.length <= maxCount) return sorted;
  const step = (sorted.length - 1) / (maxCount - 1);
  return Array.from(
    { length: maxCount },
    (_, i) => sorted[Math.round(i * step)],
  );
}

function formatTick(value, forceNumeric = false) {
  const num = forceNumeric ? Number(value) : value;
  if (!Number.isFinite(num)) return String(value);
  const str = String(num);
  const dotIndex = str.indexOf(".");
  if (dotIndex === -1) return str;
  if (str.length - dotIndex - 1 > 6) return num.toFixed(6).replace(/\.?0+$/, "");
  return str;
}

export default RechartsNativePlotter;
