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
import * as d3 from "d3";
import { usePlotterData } from "../lib/plotterData";
import {
  PLOT_DIMENSIONS,
  PLOT_MARGIN,
  DATA_POINT_LIMITS,
} from "../lib/constants";
import {
  computeAdaptiveCellSize,
  computeEffectiveImageCount,
} from "../lib/densityLayout";
import PlotterControls from "./PlotterControls";
import ImageModal from "./ImageModal";
import ImageCanvasLayer from "./ImageCanvasLayer";
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

const ZOOM_STEP = 1.5;
const ZOOM_EPS = 0.001;
const ZOOM_MAX = 1000;
const BRUSH_MIN_PIXELS = 5;
const BRUSH_FILL = "rgba(68, 147, 255, 0.15)";
const BRUSH_STROKE = "#4493ff";
const BRUSH_STROKE_WIDTH = 1.5;

const BASE_IMAGE_GAP_X = 10;
const BASE_IMAGE_GAP_Y = 10;

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
    startTransform: {
      scale: 1,
      x: 0,
      y: 0,
    },
  };
}

function SvgImageLayer({
  points,
  baseXScale,
  baseYScale,
  cellSize,
  transform,
  imageCount,
}) {
  return (
    <g
      transform={`translate(${transform.x},${transform.y}) scale(${transform.scale})`}
    >
      {points.flatMap((point) => {
        const centerX = baseXScale(point.scaledX);
        const centerY = baseYScale(point.scaledY);

        const positions = computeImagePositions(
          centerX,
          centerY,
          cellSize,
          cellSize,
          imageCount,
        );

        return positions.map((pos) => (
          <image
            key={`${point.id}-${pos.imageIndex}`}
            href={point.image}
            x={pos.x}
            y={pos.y}
            width={pos.width}
            height={pos.height}
            preserveAspectRatio="none"
            data-point-id={point.id}
          />
        ));
      })}
    </g>
  );
}

function RechartsPlotter({
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
    <RechartsCanvas
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

function RechartsCanvas({
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
  const innerWidth = Math.max(
    containerWidth - PLOT_MARGIN.left - PLOT_MARGIN.right,
    320,
  );
  const innerHeight = Math.max(
    height - PLOT_MARGIN.top - PLOT_MARGIN.bottom,
    240,
  );

  // Gap spreads images apart: the content box grows with the gap (matching the
  // D3 plotter's range model), while the viewport stays innerWidth/innerHeight.
  const xSpacingScale = xGap / BASE_IMAGE_GAP_X;
  const ySpacingScale = yGap / BASE_IMAGE_GAP_Y;
  const contentWidth = innerWidth * xSpacingScale;
  const contentHeight = innerHeight * ySpacingScale;

  // The scale at which the whole content fits inside the viewport. No cap: if
  // content is larger than the viewport we zoom out to fit, and if it is
  // smaller we zoom in so it fills the viewport ("contain" behaviour).
  const fitScale = Math.min(
    innerWidth / contentWidth,
    innerHeight / contentHeight,
  );

  // The "home"/reset view: fully fitted and centered.
  const homeTransform = useMemo(
    () =>
      clampTransform(
        { scale: fitScale, x: 0, y: 0 },
        contentWidth,
        contentHeight,
        innerWidth,
        innerHeight,
      ),
    [fitScale, contentWidth, contentHeight, innerWidth, innerHeight],
  );

  // Reset to home when gap settings change, or on first mount with no saved
  // user viewport. Container resize (homeTransform change without gap change)
  // does NOT reset so that the user's zoom/pan survives virtualization remounts.
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
    const xMaxPx = (innerWidth - transform.x) / transform.scale;

    const yMaxPx = (0 - transform.y) / transform.scale;
    const yMinPx = (innerHeight - transform.y) / transform.scale;

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
    innerWidth,
    innerHeight,
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
        innerWidth,
        innerHeight,
      ),
    [
      xExtent,
      yExtent,
      transform,
      contentWidth,
      contentHeight,
      innerWidth,
      innerHeight,
    ],
  );

  const xTicks = useMemo(() => {
    const maxCount = Math.max(4, Math.floor(innerWidth / 60));
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
  }, [normalizedPoints, visibleDomain.xMin, visibleDomain.xMax, forceNumericTicks, innerWidth]);

  const yTicks = useMemo(() => {
    const maxCount = Math.max(3, Math.floor(innerHeight / 45));
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
  }, [normalizedPoints, visibleDomain.yMin, visibleDomain.yMax, forceNumericTicks, innerHeight]);

  const xTickScale = useMemo(() => {
    const scale = d3.scaleLinear();
    scale.domain([visibleDomain.xMin, visibleDomain.xMax]);
    scale.range([0, innerWidth]);
    return scale;
  }, [visibleDomain.xMin, visibleDomain.xMax, innerWidth]);

  const yTickScale = useMemo(() => {
    const scale = d3.scaleLinear();
    scale.domain([visibleDomain.yMin, visibleDomain.yMax]);
    scale.range([innerHeight, 0]);
    return scale;
  }, [visibleDomain.yMin, visibleDomain.yMax, innerHeight]);

  const axisProps = useMemo(
    () => ({
      xTicks,
      yTicks,
      xTickScale,
      yTickScale,
      innerWidth,
      innerHeight,
      forceNumericTicks,
    }),
    [xTicks, yTicks, xTickScale, yTickScale, innerWidth, innerHeight, forceNumericTicks],
  );

  const clipId = useMemo(
    () => `recharts-clip-${String(chartId).replace(/[^a-zA-Z0-9_-]/g, "")}`,
    [chartId],
  );

  const adaptiveCellSizeForRender = useMemo(() => {
    return computeAdaptiveCellSize(
      normalizedPoints,
      (val) => baseXScale(val),
      (val) => baseYScale(val),
    );
  }, [normalizedPoints, baseXScale, baseYScale]);

  const visiblePointsForRender = useMemo(() => {
    if (!enableQuadtree) {
      return normalizedPoints;
    }
    return viewportCulledPoints;
  }, [enableQuadtree, normalizedPoints, viewportCulledPoints]);

  const renderStats = useMemo(() => {
    const totalPoints = plotterPoints.length;
    const viewportCulledCount = Math.max(
      0,
      totalPoints - viewportCulledPoints.length,
    );
    const renderCulledCount = Math.max(
      0,
      viewportCulledPoints.length - visiblePointsForRender.length,
    );
    const totalCulledCount = Math.max(
      0,
      totalPoints - visiblePointsForRender.length,
    );

    return {
      chartId,
      totalPoints,
      afterViewportCulling: viewportCulledPoints.length,
      renderedPoints: visiblePointsForRender.length,
      viewportCulledCount,
      renderCulledCount,
      totalCulledCount,
      zoomScale: Number(transform.scale.toFixed(3)),
    };
  }, [
    chartId,
    plotterPoints.length,
    viewportCulledPoints.length,
    visiblePointsForRender.length,
    transform.scale,
  ]);

  const effectiveImageCountForRender = useMemo(() => {
    if (!enableLOD) {
      return imageCount;
    }

    return Math.max(
      1,
      computeEffectiveImageCount(
        adaptiveCellSizeForRender * transform.scale,
        imageCount,
      ),
    );
  }, [enableLOD, adaptiveCellSizeForRender, transform.scale, imageCount]);

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

        const pivotX = Number.isFinite(anchorX) ? anchorX : innerWidth / 2;
        const pivotY = Number.isFinite(anchorY) ? anchorY : innerHeight / 2;

        const nextX =
          prev.x - (pivotX - prev.x) * (clampedScale / prev.scale - 1);
        const nextY =
          prev.y - (pivotY - prev.y) * (clampedScale / prev.scale - 1);

        return clampTransform(
          { scale: clampedScale, x: nextX, y: nextY },
          contentWidth,
          contentHeight,
          innerWidth,
          innerHeight,
        );
      });
    },
    [innerWidth, innerHeight, contentWidth, contentHeight, fitScale],
  );

  const handleZoomIn = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "ZOOM_IN",
      visualizationLibrary: "Recharts",
      interactionSource: "button",
    });
    markViewportUserModified(chartId);
    zoomTo(transform.scale * ZOOM_STEP, innerWidth / 2, innerHeight / 2);
  }, [chartId, transform.scale, zoomTo, innerWidth, innerHeight]);

  const handleZoomOut = useCallback(() => {
    if (transform.scale <= fitScale + ZOOM_EPS) {
      return;
    }

    logChartInteractionEvent({
      interactionType: "ZOOM_OUT",
      visualizationLibrary: "Recharts",
      interactionSource: "button",
    });

    markViewportUserModified(chartId);
    zoomTo(transform.scale / ZOOM_STEP, innerWidth / 2, innerHeight / 2);
  }, [chartId, transform.scale, zoomTo, innerWidth, innerHeight, fitScale]);

  const handleReset = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Recharts",
      interactionSource: "button",
    });
    updateChartViewport(chartId, { userModified: false });
    setTransform(homeTransform);
    setHoveredPoint(null);
  }, [chartId, homeTransform]);

  const handleWheel = useCallback(
    (event) => {
      event.preventDefault();

      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;

      const clientX = event.clientX - rect.left;
      const clientY = event.clientY - rect.top;

      const localX = clientX - PLOT_MARGIN.left;
      const localY = clientY - PLOT_MARGIN.top;

      if (
        localX < 0 ||
        localY < 0 ||
        localX > innerWidth ||
        localY > innerHeight
      ) {
        return;
      }

      const isZoomIn = event.deltaY < 0;

      if (!isZoomIn && transform.scale <= fitScale + ZOOM_EPS) {
        return;
      }

      logChartInteractionEvent({
        interactionType: isZoomIn ? "ZOOM_IN" : "ZOOM_OUT",
        visualizationLibrary: "Recharts",
        interactionSource: "wheel",
      });

      const factor = event.deltaY > 0 ? 1 / ZOOM_STEP : ZOOM_STEP;

      markViewportUserModified(chartId);
      setTransform((prev) => {
        const clampedScale = clamp(prev.scale * factor, fitScale, ZOOM_MAX);

        const nextX =
          prev.x - (localX - prev.x) * (clampedScale / prev.scale - 1);
        const nextY =
          prev.y - (localY - prev.y) * (clampedScale / prev.scale - 1);
        return clampTransform(
          { scale: clampedScale, x: nextX, y: nextY },
          contentWidth,
          contentHeight,
          innerWidth,
          innerHeight,
        );
      });
    },
    [
      chartId,
      innerWidth,
      innerHeight,
      contentWidth,
      contentHeight,
      transform.scale,
      fitScale,
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

      const localX = event.clientX - rect.left - PLOT_MARGIN.left;
      const localY = event.clientY - rect.top - PLOT_MARGIN.top;

      if (
        localX < 0 ||
        localY < 0 ||
        localX > innerWidth ||
        localY > innerHeight
      ) {
        return;
      }

      if (isPanMode) {
        if (transform.scale <= fitScale + ZOOM_EPS) {
          return;
        }
        logChartInteractionEvent({
          interactionType: "PAN",
          visualizationLibrary: "Recharts",
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

      const clampedX = clamp(localX, 0, innerWidth);
      const clampedY = clamp(localY, 0, innerHeight);
      brushStartRef.current = { x: clampedX, y: clampedY };
      setBrushRect({ x: clampedX, y: clampedY, width: 0, height: 0 });
      event.currentTarget.setPointerCapture?.(event.pointerId);
    },
    [chartId, innerWidth, innerHeight, fitScale, transform, isPanMode],
  );

  const handlePointerMove = useCallback(
    (event) => {
      if (brushStartRef.current) {
        const rect = svgRef.current?.getBoundingClientRect();
        if (!rect) return;

        const localX = clamp(
          event.clientX - rect.left - PLOT_MARGIN.left,
          0,
          innerWidth,
        );
        const localY = clamp(
          event.clientY - rect.top - PLOT_MARGIN.top,
          0,
          innerHeight,
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
          innerWidth,
          innerHeight,
        );

        scheduleTransformUpdate(next);
        return;
      }

      // --- Hover hit-testing (geometry-based; works for SVG and canvas) ---
      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;

      const hoverLocalX = event.clientX - rect.left - PLOT_MARGIN.left;
      const hoverLocalY = event.clientY - rect.top - PLOT_MARGIN.top;

      if (
        hoverLocalX < 0 ||
        hoverLocalY < 0 ||
        hoverLocalX > innerWidth ||
        hoverLocalY > innerHeight
      ) {
        setHoveredPoint((prev) => (prev ? null : prev));
        return;
      }

      // Undo pan/zoom to get content-space coordinates
      const contentX = (hoverLocalX - transform.x) / transform.scale;
      const contentY = (hoverLocalY - transform.y) / transform.scale;

      const hitRadius = Math.max(adaptiveCellSizeForRender * 0.6, 4);
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

      setTooltipPosition({
        x: event.clientX + 12,
        y: event.clientY + 12,
      });

      setHoveredPoint((prev) => (prev?.id === nearest.id ? prev : nearest));
    },
    [
      innerWidth,
      innerHeight,
      contentWidth,
      contentHeight,
      fitScale,
      homeTransform,
      scheduleTransformUpdate,
      transform,
      adaptiveCellSizeForRender,
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
            const localX = event.clientX - rect.left - PLOT_MARGIN.left;
            const localY = event.clientY - rect.top - PLOT_MARGIN.top;
            if (
              localX >= 0 &&
              localY >= 0 &&
              localX <= innerWidth &&
              localY <= innerHeight
            ) {
              const contentX = (localX - transform.x) / transform.scale;
              const contentY = (localY - transform.y) / transform.scale;
              const hitRadius = Math.max(adaptiveCellSizeForRender * 0.6, 4);
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
                  adaptiveCellSizeForRender,
                  adaptiveCellSizeForRender,
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
            visualizationLibrary: "Recharts",
            interactionSource: "brush",
          });
          markViewportUserModified(chartId);
          const newTransform = convertBrushToTransform(
            brushRect,
            transform,
            contentWidth,
            contentHeight,
            innerWidth,
            innerHeight,
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
      innerWidth,
      innerHeight,
      contentWidth,
      contentHeight,
      fitScale,
      homeTransform,
      adaptiveCellSizeForRender,
      effectiveImageCountForRender,
      baseXScale,
      baseYScale,
      visiblePointsForRender,
    ],
  );

  useEffect(() => {
    console.log("[RechartsPlotter] point stats", renderStats);
  }, [renderStats]);

  useEffect(() => {
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      dragRef.current = createInitialDragState();
      brushStartRef.current = null;
      cachedScalesRef.current = { key: null, xScale: null, yScale: null };
      pendingTransformRef.current = null;
    };
  }, []);

  useEffect(() => {
    const svgElement = svgRef.current;

    if (!svgElement) return;

    const wheelHandler = (event) => {
      event.preventDefault();
      handleWheel(event);
    };

    svgElement.addEventListener("wheel", wheelHandler, {
      passive: false,
    });

    return () => {
      svgElement.removeEventListener("wheel", wheelHandler);
    };
  }, [handleWheel]);

  const handleDoubleClick = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Recharts",
      interactionSource: "double_click",
    });
    updateChartViewport(chartId, { userModified: false });
    setTransform(homeTransform);
    setHoveredPoint(null);
  }, [chartId, homeTransform]);

  const stageCursor = isPanMode
    ? isDragging
      ? "grabbing"
      : "grab"
    : "crosshair";

  const contentTransform = `translate(${transform.x}, ${transform.y}) scale(${transform.scale})`;
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

      <div style={{ position: "relative", width: "100%" }}>
        {enableCanvas ? (
          <ImageCanvasLayer
            points={visiblePointsForRender}
            baseXScale={baseXScale}
            baseYScale={baseYScale}
            cellSize={adaptiveCellSizeForRender}
            transform={transform}
            imageCount={effectiveImageCountForRender}
          />
        ) : (
          <svg
            width={containerWidth}
            height={height}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              pointerEvents: "none",
            }}
          >
            <defs>
              <clipPath id={`${clipId}-img`}>
                <rect
                  x={PLOT_MARGIN.left}
                  y={PLOT_MARGIN.top}
                  width={innerWidth}
                  height={innerHeight}
                />
              </clipPath>
            </defs>
            <g clipPath={`url(#${clipId}-img)`}>
              <g
                transform={`translate(${PLOT_MARGIN.left},${PLOT_MARGIN.top})`}
              >
                <SvgImageLayer
                  points={visiblePointsForRender}
                  baseXScale={baseXScale}
                  baseYScale={baseYScale}
                  cellSize={adaptiveCellSizeForRender}
                  transform={transform}
                  imageCount={effectiveImageCountForRender}
                />
              </g>
            </g>
          </svg>
        )}

        <svg
          ref={svgRef}
          width={containerWidth}
          height={height}
          style={{
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
          <defs>
            <clipPath id={clipId}>
              <rect
                x={PLOT_MARGIN.left}
                y={PLOT_MARGIN.top}
                width={innerWidth}
                height={innerHeight}
              />
            </clipPath>
          </defs>

          <rect
            x={0}
            y={0}
            width={containerWidth}
            height={height}
            fill="#16213e"
          />

          <g transform={`translate(${PLOT_MARGIN.left},${PLOT_MARGIN.top})`}>
            <rect
              x={0}
              y={0}
              width={innerWidth}
              height={innerHeight}
              fill="#16213e"
            />

            <AxisGrid {...axisProps} />

            <AxisLabels {...axisProps} />

            <g clipPath={`url(#${clipId})`}>
              <g transform={contentTransform}></g>
            </g>

            <rect
              x={0}
              y={0}
              width={innerWidth}
              height={innerHeight}
              fill="transparent"
              stroke="#555"
              pointerEvents="none"
            />
          </g>
        </svg>

        {brushRect && brushRect.width > 0 && brushRect.height > 0 && (
          <svg
            width={containerWidth}
            height={height}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              pointerEvents: "none",
              zIndex: 5,
            }}
          >
            <g transform={`translate(${PLOT_MARGIN.left},${PLOT_MARGIN.top})`}>
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
          </svg>
        )}
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

const AxisGrid = memo(function AxisGrid({
  xTicks,
  yTicks,
  xTickScale,
  yTickScale,
  innerWidth,
  innerHeight,
}) {
  return (
    <>
      {xTicks.map((tick, index) => {
        const x = xTickScale(tick);
        return (
          <line
            key={`xgrid-${index}`}
            x1={x}
            y1={0}
            x2={x}
            y2={innerHeight}
            stroke="#2a2a3e"
            strokeDasharray="3 3"
          />
        );
      })}

      {yTicks.map((tick, index) => {
        const y = yTickScale(tick);
        return (
          <line
            key={`ygrid-${index}`}
            x1={0}
            y1={y}
            x2={innerWidth}
            y2={y}
            stroke="#2a2a3e"
            strokeDasharray="3 3"
          />
        );
      })}
    </>
  );
});

const AxisLabels = memo(function AxisLabels({
  xTicks,
  yTicks,
  xTickScale,
  yTickScale,
  innerHeight,
  forceNumericTicks,
}) {
  return (
    <>
      {xTicks.map((tick, index) => {
        const x = xTickScale(tick);
        return (
          <text
            key={`xlabel-${index}`}
            x={x}
            y={innerHeight + 18}
            fill="#888"
            fontSize="11"
            textAnchor="middle"
          >
            {formatTick(tick, forceNumericTicks)}
          </text>
        );
      })}

      {yTicks.map((tick, index) => {
        const y = yTickScale(tick);
        return (
          <text
            key={`ylabel-${index}`}
            x={-8}
            y={y + 4}
            fill="#888"
            fontSize="11"
            textAnchor="end"
          >
            {formatTick(tick, forceNumericTicks)}
          </text>
        );
      })}
    </>
  );
});

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

function clampTransform(
  transform,
  contentWidth,
  contentHeight,
  viewWidth,
  viewHeight,
) {
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
  // Fall back to interpolated ticks when too few data points are visible to fill the axis
  if (sorted.length === 0 || sorted.length > threshold || sorted.length < Math.ceil(maxCount / 2)) {
    return d3.ticks(domainMin, domainMax, maxCount);
  }
  if (sorted.length <= maxCount) return sorted;
  // Evenly sample keeping first and last
  const step = (sorted.length - 1) / (maxCount - 1);
  return Array.from({ length: maxCount }, (_, i) => sorted[Math.round(i * step)]);
}

function formatTick(value, forceNumeric = false) {
  const num = forceNumeric ? Number(value) : value;
  if (!Number.isFinite(num)) return String(value);
  const str = String(num);
  const dotIndex = str.indexOf(".");
  if (dotIndex === -1) return str;
  if (str.length - dotIndex - 1 > 6)
    return num.toFixed(6).replace(/\.?0+$/, "");
  return str;
}

export default RechartsPlotter;
