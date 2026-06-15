/* eslint-disable react-hooks/refs */
import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import {
  Stage,
  Layer,
  Image as KonvaImage,
  Text,
  Line,
  Rect,
  Group,
} from "react-konva";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import {
  CELL_SIZE,
  PLOT_DIMENSIONS,
  PLOT_MARGIN,
  DATA_POINT_LIMITS,
} from "../lib/constants";
import {
  computeAdaptiveCellSize,
  filterVisiblePoints,
  computeEffectiveImageCount,
} from "../lib/densityLayout";
import PlotterControls from "./PlotterControls";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
import { useInteractionMode } from "../lib/interactionMode";
import {
  getChartViewport,
  updateChartViewport,
} from "../lib/chartViewportStore";
import { generateSyntheticPoints } from "../lib/syntheticDataGenerator";

const AXIS_TICK_COUNT = 8;
const EXTENT_PADDING_RATIO = 0.2;
const EXTENT_FALLBACK_PADDING = 5;
const ZOOM_STEP = 1.5;
const PINCH_ZOOM_SENSITIVITY = 0.01;
const ZOOM_MIN = 1;
const MIN_ZOOM_SCALE = 1.001;
const ZOOM_MAX = 100000;
const GRID_COLOR = "#2a2a3e";
const AXIS_LINE_COLOR = "#555555";
const TICK_LABEL_COLOR = "#aaaaaa";
const TICK_LABEL_FONT_SIZE = 11;
const BRUSH_FILL = "rgba(68, 147, 255, 0.15)";
const BRUSH_STROKE = "#4493ff";
const BRUSH_STROKE_WIDTH = 1.5;
const BRUSH_MIN_PIXELS = 5;

function KonvaPlotter({ chartId, imageCount, dataPointCount }) {
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
    <KonvaCanvas
      chartId={chartId}
      plotterPoints={plotterPoints}
      imageCount={imageCount}
    />
  );
}

function KonvaCanvas({ chartId, plotterPoints, imageCount }) {
  /* Hot-path viewport state stored in refs — mutations never trigger React
     reconciliation. A RAF-throttled forceUpdate flushes the view at ≤60 fps. */
  const savedViewportRef = useRef(getChartViewport(chartId) ?? {});

  const initialScale = Math.max(savedViewportRef.current.scale ?? 1, ZOOM_MIN);

  const scaleRef = useRef(initialScale);

  const offsetRef = useRef(
    initialScale <= MIN_ZOOM_SCALE
      ? { x: 0, y: 0 }
      : {
          x: savedViewportRef.current.translateX ?? 0,
          y: savedViewportRef.current.translateY ?? 0,
        },
  );

  const rafPendingRef = useRef(false);
  const [, forceUpdate] = useState(0);
  const rafIdRef = useRef(null);
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [brushRect, setBrushRect] = useState(null);

  const stageRef = useRef(null);
  const brushStartRef = useRef(null);
  const dragRef = useRef({
    dragging: false,
    startX: 0,
    startY: 0,
    startOffset: { x: 0, y: 0 },
  });

  const persistViewport = useCallback(() => {
    if (!chartId) return;
    if (scaleRef.current == null || !offsetRef.current) return;

    updateChartViewport(chartId, {
      scale: scaleRef.current,
      translateX: offsetRef.current.x,
      translateY: offsetRef.current.y,
    });
  }, [chartId]);

  /* Schedule a single React flush per animation frame. */
  const scheduleUpdate = useCallback(() => {
    if (rafPendingRef.current) return;

    rafPendingRef.current = true;

    rafIdRef.current = requestAnimationFrame(() => {
      rafPendingRef.current = false;
      rafIdRef.current = null;
      forceUpdate((n) => n + 1);
    });
  }, []);

  const { interactionMode, setInteractionMode, isZoomMode, isPanMode } =
    useInteractionMode();

  const innerWidth =
    PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;
  const innerHeight =
    PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

  const contentScale = scaleRef.current ?? 1;
  const contentOffset = offsetRef.current ?? { x: 0, y: 0 };

  const { xScale, yScale, xExtent, yExtent } = buildScales(
    plotterPoints,
    innerWidth,
    innerHeight,
  );

  /* Domain-based visible region — shrinks as zoom increases, matching D3. */
  const visibleDomain = computeVisibleDomain(
    xExtent,
    yExtent,
    contentOffset,
    contentScale,
    innerWidth,
    innerHeight,
  );

  /* Dynamic scales recomputed from the visible domain — no matrix transform. */
  const dynamicXScale = buildLinearScale(
    visibleDomain.xMin,
    visibleDomain.xMax,
    0,
    innerWidth,
  );
  const dynamicYScale = buildLinearScale(
    visibleDomain.yMin,
    visibleDomain.yMax,
    innerHeight,
    0,
  );

  /* Cancel in-progress brush when switching to pan mode. */
  useEffect(() => {
    if (isPanMode) {
      brushStartRef.current = null;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBrushRect(null);
    }
  }, [isPanMode]);

  useEffect(() => {
    return () => {
      /**
       * Keep only lightweight interaction state.
       * This allows restoring zoom/pan when chart remounts.
       */
      if (chartId && scaleRef.current != null && offsetRef.current) {
        updateChartViewport(chartId, {
          scale: scaleRef.current,
          translateX: offsetRef.current.x,
          translateY: offsetRef.current.y,
        });
      }

      /**
       * Release temporary runtime state.
       */
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }

      rafPendingRef.current = false;

      brushStartRef.current = null;

      dragRef.current = {
        dragging: false,
        startX: 0,
        startY: 0,
        startOffset: { x: 0, y: 0 },
      };

      stageRef.current = null;

      /**
       * Do NOT remove chartViewportStore entry here.
       * App.jsx will prune it only when the chart becomes disabled / removed.
       */
    };
  }, [chartId]);

  /* Base cell size computed once from the full dataset. */
  const adaptiveCellSizeBase = useMemo(
    () => computeAdaptiveCellSize(plotterPoints, xScale, yScale),
    [plotterPoints, xScale, yScale],
  );

  /* Zoom-scaled cell size — grows as domain shrinks. */
  const adaptiveCellSizeForRender = adaptiveCellSizeBase * contentScale;

  /* Viewport culling in screen-space. */
  const visiblePointsForRender = useMemo(() => {
    const xScreenFn = (val) => xScale(val) * contentScale + contentOffset.x;
    const yScreenFn = (val) => yScale(val) * contentScale + contentOffset.y;
    return filterVisiblePoints(
      plotterPoints,
      xScreenFn,
      yScreenFn,
      innerWidth,
      innerHeight,
      adaptiveCellSizeBase * contentScale,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    plotterPoints,
    xScale,
    yScale,
    contentScale,
    contentOffset.x,
    contentOffset.y,
    innerWidth,
    innerHeight,
    adaptiveCellSizeBase,
  ]);

  const effectiveImageCountForRender = computeEffectiveImageCount(
    adaptiveCellSizeForRender,
    imageCount,
  );

  /* ── Wheel zoom — mutates refs, schedules RAF flush ── */
  const handleWheel = useCallback(
    (event) => {
      event.evt.preventDefault();
      const stage = event.target.getStage();
      const pointerPosition = stage.getPointerPosition();

      if (!isPointerInsidePlotArea(pointerPosition, innerWidth, innerHeight))
        return;

      const nativeEvent = event.evt;
      const isPinchGesture = nativeEvent.ctrlKey;
      const scaleDelta = computeWheelScaleDelta(
        nativeEvent.deltaY,
        isPinchGesture,
      );
      const currentScale = scaleRef.current;
      const currentOffset = offsetRef.current;
      const isZoomOut = scaleDelta < 1;

      if (isZoomOut && currentScale <= MIN_ZOOM_SCALE) {
        return;
      }

      const newScale = clampScale(currentScale * scaleDelta);

      if (newScale === currentScale) {
        return;
      }

      logChartInteractionEvent({
        interactionType: scaleDelta > 1 ? "ZOOM_IN" : "ZOOM_OUT",
        visualizationLibrary: "Konva",
        interactionSource: "wheel",
      });

      const mouseRelX = pointerPosition.x - PLOT_MARGIN.left - currentOffset.x;
      const mouseRelY = pointerPosition.y - PLOT_MARGIN.top - currentOffset.y;

      const rawOffsetX =
        currentOffset.x - mouseRelX * (newScale / currentScale - 1);
      const rawOffsetY =
        currentOffset.y - mouseRelY * (newScale / currentScale - 1);
      const clampedOffset = clampContentOffset(
        rawOffsetX,
        rawOffsetY,
        newScale,
        innerWidth,
        innerHeight,
      );

      scaleRef.current = newScale;
      offsetRef.current = clampedOffset;
      persistViewport();
      scheduleUpdate();
    },
    [innerWidth, innerHeight, persistViewport, scheduleUpdate],
  );

  /* ── Pan drag — mutates refs, schedules RAF flush ── */
  const handleStageMouseDown = useCallback(
    (event) => {
      const stage = event.target.getStage();
      const pointer = stage.getPointerPosition();
      if (!isPointerInsidePlotArea(pointer, innerWidth, innerHeight)) return;

      if (isPanMode) {
        if (scaleRef.current <= MIN_ZOOM_SCALE) return;
        logChartInteractionEvent({
          interactionType: "PAN",
          visualizationLibrary: "Konva",
          interactionSource: "drag",
        });
        setIsDragging(true);
        dragRef.current = {
          dragging: true,
          startX: pointer.x,
          startY: pointer.y,
          startOffset: { ...offsetRef.current },
        };
      } else if (isZoomMode) {
        const plotX = clampValue(pointer.x - PLOT_MARGIN.left, 0, innerWidth);
        const plotY = clampValue(pointer.y - PLOT_MARGIN.top, 0, innerHeight);
        brushStartRef.current = { x: plotX, y: plotY };
        setBrushRect({ x: plotX, y: plotY, width: 0, height: 0 });
      }
    },
    [isPanMode, isZoomMode, innerWidth, innerHeight],
  );

  const handleStageMouseMove = useCallback(
    (event) => {
      const stage = event.target.getStage();
      const pointer = stage.getPointerPosition();
      if (!pointer) return;

      if (dragRef.current.dragging) {
        if (scaleRef.current <= MIN_ZOOM_SCALE) return;
        const dx = pointer.x - dragRef.current.startX;
        const dy = pointer.y - dragRef.current.startY;
        const clamped = clampContentOffset(
          dragRef.current.startOffset.x + dx,
          dragRef.current.startOffset.y + dy,
          scaleRef.current,
          innerWidth,
          innerHeight,
        );
        offsetRef.current = clamped;
        persistViewport();
        scheduleUpdate();
        return;
      }

      if (brushStartRef.current) {
        const plotX = clampValue(pointer.x - PLOT_MARGIN.left, 0, innerWidth);
        const plotY = clampValue(pointer.y - PLOT_MARGIN.top, 0, innerHeight);
        const startPoint = brushStartRef.current;
        setBrushRect({
          x: Math.min(startPoint.x, plotX),
          y: Math.min(startPoint.y, plotY),
          width: Math.abs(plotX - startPoint.x),
          height: Math.abs(plotY - startPoint.y),
        });
      }
    },
    [innerWidth, innerHeight, persistViewport, scheduleUpdate],
  );

  const handleStageMouseUp = useCallback(
    (localBrushRect) => {
      if (dragRef.current.dragging) {
        setIsDragging(false);
        dragRef.current.dragging = false;
        return;
      }

      if (brushStartRef.current && localBrushRect) {
        const isTooSmall =
          localBrushRect.width < BRUSH_MIN_PIXELS ||
          localBrushRect.height < BRUSH_MIN_PIXELS;

        if (!isTooSmall) {
          logChartInteractionEvent({
            interactionType: "ZOOM_IN",
            visualizationLibrary: "Konva",
            interactionSource: "brush",
          });
          const zoomResult = convertBrushToZoom(
            localBrushRect,
            offsetRef.current,
            scaleRef.current,
            innerWidth,
            innerHeight,
          );
          scaleRef.current = zoomResult.scale;
          offsetRef.current = zoomResult.offset;
          persistViewport();
          scheduleUpdate();
        }
      }

      brushStartRef.current = null;
      setBrushRect(null);
    },
    [innerWidth, innerHeight, persistViewport, scheduleUpdate],
  );

  /* ── Button controls — mutate refs + scheduleUpdate ── */
  const handleZoomIn = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "ZOOM_IN",
      visualizationLibrary: "Konva",
      interactionSource: "button",
    });
    const currentScale = scaleRef.current;
    const currentOffset = offsetRef.current;
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    const newScale = clampScale(currentScale * ZOOM_STEP);
    const rawOffsetX =
      currentOffset.x - centerX * (newScale / currentScale - 1);
    const rawOffsetY =
      currentOffset.y - centerY * (newScale / currentScale - 1);
    scaleRef.current = newScale;
    offsetRef.current = clampContentOffset(
      rawOffsetX,
      rawOffsetY,
      newScale,
      innerWidth,
      innerHeight,
    );
    persistViewport();
    scheduleUpdate();
  }, [innerWidth, innerHeight, persistViewport, scheduleUpdate]);

  const handleZoomOut = useCallback(() => {
    const currentScale = scaleRef.current;

    if (currentScale <= MIN_ZOOM_SCALE) {
      return;
    }

    logChartInteractionEvent({
      interactionType: "ZOOM_OUT",
      visualizationLibrary: "Konva",
      interactionSource: "button",
    });

    const currentOffset = offsetRef.current;

    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    const newScale = clampScale(currentScale / ZOOM_STEP);
    const rawOffsetX =
      currentOffset.x - centerX * (newScale / currentScale - 1);
    const rawOffsetY =
      currentOffset.y - centerY * (newScale / currentScale - 1);
    scaleRef.current = newScale;
    offsetRef.current = clampContentOffset(
      rawOffsetX,
      rawOffsetY,
      newScale,
      innerWidth,
      innerHeight,
    );
    persistViewport();
    scheduleUpdate();
  }, [innerWidth, innerHeight, persistViewport, scheduleUpdate]);

  const handleReset = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Konva",
      interactionSource: "button",
    });
    scaleRef.current = 1;
    offsetRef.current = { x: 0, y: 0 };
    persistViewport();
    scheduleUpdate();
  }, [persistViewport, scheduleUpdate]);

  const handleDoubleClick = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Konva",
      interactionSource: "double_click",
    });
    scaleRef.current = 1;
    offsetRef.current = { x: 0, y: 0 };
    persistViewport();
    scheduleUpdate();
  }, [persistViewport, scheduleUpdate]);

  const stageCursor = isPanMode
    ? isDragging
      ? "grabbing"
      : "grab"
    : "crosshair";

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        zoomLevel={contentScale}
        interactionMode={interactionMode}
        onModeChange={setInteractionMode}
      />
      <Stage
        ref={stageRef}
        width={PLOT_DIMENSIONS.width}
        height={PLOT_DIMENSIONS.height}
        onWheel={handleWheel}
        onDblClick={handleDoubleClick}
        onDblTap={handleDoubleClick}
        onMouseDown={handleStageMouseDown}
        onMouseMove={handleStageMouseMove}
        onMouseUp={() => handleStageMouseUp(brushRect)}
        onMouseLeave={() => handleStageMouseUp(brushRect)}
        style={{ cursor: stageCursor }}
      >
        {/* Static axis layer — grid and labels derived from current visible domain */}
        <Layer listening={false}>
          <PlotBackground innerWidth={innerWidth} innerHeight={innerHeight} />
          <AxisGrid
            visibleDomain={visibleDomain}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />
          <AxisLabels
            visibleDomain={visibleDomain}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />
          <AxisBorder innerWidth={innerWidth} innerHeight={innerHeight} />
        </Layer>

        {/* Clipped content layer — images positioned from domain-derived scales */}
        <Layer>
          <ClippedContentGroup
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          >
            {visiblePointsForRender.map((point) => (
              <ImagePointGroup
                key={point.id}
                point={point}
                xScale={dynamicXScale}
                yScale={dynamicYScale}
                imageCount={effectiveImageCountForRender}
                cellSize={adaptiveCellSizeForRender}
                onHover={setHoveredPoint}
                onCursorMove={setCursorPosition}
              />
            ))}
          </ClippedContentGroup>
        </Layer>

        {/* Brush overlay layer — only rendered in zoom mode */}
        {isZoomMode && (
          <Layer listening={false}>
            <BrushSelectionOverlay brushRect={brushRect} />
          </Layer>
        )}
      </Stage>

      {hoveredPoint && (
        <PointTooltip
          hoveredPoint={hoveredPoint}
          cursorPosition={cursorPosition}
        />
      )}
    </div>
  );
}

function BrushSelectionOverlay({ brushRect }) {
  return (
    <Group listening={false}>
      {/* Semi-transparent selection rectangle */}
      {brushRect && brushRect.width > 0 && brushRect.height > 0 && (
        <Rect
          x={PLOT_MARGIN.left + brushRect.x}
          y={PLOT_MARGIN.top + brushRect.y}
          width={brushRect.width}
          height={brushRect.height}
          fill={BRUSH_FILL}
          stroke={BRUSH_STROKE}
          strokeWidth={BRUSH_STROKE_WIDTH}
          listening={false}
        />
      )}
    </Group>
  );
}

function ClippedContentGroup({ innerWidth, innerHeight, children }) {
  const plotLeft = PLOT_MARGIN.left;
  const plotTop = PLOT_MARGIN.top;

  const clipFunction = (ctx) => {
    ctx.rect(plotLeft, plotTop, innerWidth, innerHeight);
  };

  return (
    <Group clipFunc={clipFunction}>
      <Group x={plotLeft} y={plotTop} scaleX={1} scaleY={1}>
        {children}
      </Group>
    </Group>
  );
}

function PointTooltip({ hoveredPoint, cursorPosition }) {
  return (
    <div
      className="plotter-tooltip"
      style={{
        display: "block",
        position: "absolute",
        left: cursorPosition.x + 15,
        top: cursorPosition.y - 10,
        pointerEvents: "none",
      }}
    >
      <div className="tooltip-label">{hoveredPoint.label}</div>
      <div className="tooltip-meta">
        <span>Interval: {hoveredPoint.meta.interval}s</span>
        <span>Angle: {hoveredPoint.meta.angle}°</span>
        <span>Quality: {hoveredPoint.meta.quality}</span>
      </div>
    </div>
  );
}

function PlotBackground({ innerWidth, innerHeight }) {
  return (
    <Rect
      x={PLOT_MARGIN.left}
      y={PLOT_MARGIN.top}
      width={innerWidth}
      height={innerHeight}
      fill="#16213e"
    />
  );
}

function AxisBorder({ innerWidth, innerHeight }) {
  return (
    <Rect
      x={PLOT_MARGIN.left}
      y={PLOT_MARGIN.top}
      width={innerWidth}
      height={innerHeight}
      stroke={AXIS_LINE_COLOR}
      strokeWidth={1}
      listening={false}
    />
  );
}

function AxisGrid({ visibleDomain, innerWidth, innerHeight }) {
  const xTicks = buildTicks(
    visibleDomain.xMin,
    visibleDomain.xMax,
    AXIS_TICK_COUNT,
  );
  const yTicks = buildTicks(
    visibleDomain.yMin,
    visibleDomain.yMax,
    AXIS_TICK_COUNT,
  );

  const xScreenScale = buildLinearScale(
    visibleDomain.xMin,
    visibleDomain.xMax,
    0,
    innerWidth,
  );
  const yScreenScale = buildLinearScale(
    visibleDomain.yMin,
    visibleDomain.yMax,
    innerHeight,
    0,
  );

  const gridLines = [];

  xTicks.forEach((value, index) => {
    const xPos = PLOT_MARGIN.left + xScreenScale(value);
    if (xPos < PLOT_MARGIN.left || xPos > PLOT_MARGIN.left + innerWidth) return;
    gridLines.push(
      <Line
        key={`xgrid-${index}`}
        points={[xPos, PLOT_MARGIN.top, xPos, PLOT_MARGIN.top + innerHeight]}
        stroke={GRID_COLOR}
        strokeWidth={1}
        dash={[4, 4]}
        listening={false}
      />,
    );
  });

  yTicks.forEach((value, index) => {
    const yPos = PLOT_MARGIN.top + yScreenScale(value);
    if (yPos < PLOT_MARGIN.top || yPos > PLOT_MARGIN.top + innerHeight) return;
    gridLines.push(
      <Line
        key={`ygrid-${index}`}
        points={[PLOT_MARGIN.left, yPos, PLOT_MARGIN.left + innerWidth, yPos]}
        stroke={GRID_COLOR}
        strokeWidth={1}
        dash={[4, 4]}
        listening={false}
      />,
    );
  });

  return <>{gridLines}</>;
}

function AxisLabels({ visibleDomain, innerWidth, innerHeight }) {
  const xTicks = buildTicks(
    visibleDomain.xMin,
    visibleDomain.xMax,
    AXIS_TICK_COUNT,
  );
  const yTicks = buildTicks(
    visibleDomain.yMin,
    visibleDomain.yMax,
    AXIS_TICK_COUNT,
  );

  const xScreenScale = buildLinearScale(
    visibleDomain.xMin,
    visibleDomain.xMax,
    0,
    innerWidth,
  );
  const yScreenScale = buildLinearScale(
    visibleDomain.yMin,
    visibleDomain.yMax,
    innerHeight,
    0,
  );

  const tickLabels = [];

  xTicks.forEach((value, index) => {
    const xPos = PLOT_MARGIN.left + xScreenScale(value);
    if (xPos < PLOT_MARGIN.left - 5 || xPos > PLOT_MARGIN.left + innerWidth + 5)
      return;
    tickLabels.push(
      <Text
        key={`xlabel-${index}`}
        text={formatTickLabel(value)}
        x={xPos - 14}
        y={PLOT_MARGIN.top + innerHeight + 6}
        fill={TICK_LABEL_COLOR}
        fontSize={TICK_LABEL_FONT_SIZE}
        listening={false}
      />,
    );
  });

  yTicks.forEach((value, index) => {
    const yPos = PLOT_MARGIN.top + yScreenScale(value);
    if (yPos < PLOT_MARGIN.top - 5 || yPos > PLOT_MARGIN.top + innerHeight + 5)
      return;
    tickLabels.push(
      <Text
        key={`ylabel-${index}`}
        text={formatTickLabel(value)}
        x={PLOT_MARGIN.left - 36}
        y={yPos - 6}
        fill={TICK_LABEL_COLOR}
        fontSize={TICK_LABEL_FONT_SIZE}
        width={32}
        align="right"
        listening={false}
      />,
    );
  });

  return <>{tickLabels}</>;
}

function ImagePointGroup({
  point,
  xScale,
  yScale,
  imageCount,
  cellSize,
  onHover,
  onCursorMove,
}) {
  const [imgObj, setImgObj] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const img = new Image();

    img.onload = () => {
      if (isMounted) {
        setImgObj(img);
      }
    };

    img.onerror = () => {
      if (isMounted) {
        setImgObj(null);
      }
    };

    img.src = point.image;

    return () => {
      isMounted = false;

      img.onload = null;
      img.onerror = null;
      img.src = "";

      setImgObj(null);
    };
  }, [point.image]);

  const centerX = xScale(point.x);
  const centerY = yScale(point.y);
  const resolvedCellSize = cellSize ?? CELL_SIZE;
  const positions = computeImagePositions(
    centerX,
    centerY,
    resolvedCellSize,
    resolvedCellSize,
    imageCount,
  );

  if (!imgObj) return null;

  return (
    <>
      {positions.map((position, index) => (
        <KonvaImage
          key={`${point.id}-${index}`}
          image={imgObj}
          x={position.x}
          y={position.y}
          width={position.width}
          height={position.height}
          point={point}
          onMouseEnter={(event) => {
            const stage = event.target.getStage();
            const pointerPosition = stage.getPointerPosition();
            onHover(point);
            onCursorMove({ x: pointerPosition.x, y: pointerPosition.y });
          }}
          onMouseLeave={() => onHover(null)}
        />
      ))}
    </>
  );
}

function convertBrushToZoom(
  brushPixelRect,
  currentOffset,
  currentScale,
  plotInnerWidth,
  plotInnerHeight,
) {
  const contentX0 = (brushPixelRect.x - currentOffset.x) / currentScale;
  const contentY0 = (brushPixelRect.y - currentOffset.y) / currentScale;
  const contentBrushWidth = brushPixelRect.width / currentScale;
  const contentBrushHeight = brushPixelRect.height / currentScale;

  const fitScaleX = plotInnerWidth / contentBrushWidth;
  const fitScaleY = plotInnerHeight / contentBrushHeight;
  const newScale = clampScale(Math.min(fitScaleX, fitScaleY));

  const rawOffsetX = -contentX0 * newScale;
  const rawOffsetY = -contentY0 * newScale;

  const clampedOffset = clampContentOffset(
    rawOffsetX,
    rawOffsetY,
    newScale,
    plotInnerWidth,
    plotInnerHeight,
  );

  return { scale: newScale, offset: clampedOffset };
}

function clampValue(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

/* ─── Pure utility functions ──────────────────────────────────────────── */

function isPointerInsidePlotArea(
  pointerPosition,
  plotInnerWidth,
  plotInnerHeight,
) {
  return (
    pointerPosition.x > PLOT_MARGIN.left &&
    pointerPosition.x < PLOT_MARGIN.left + plotInnerWidth &&
    pointerPosition.y > PLOT_MARGIN.top &&
    pointerPosition.y < PLOT_MARGIN.top + plotInnerHeight
  );
}

function clampScale(rawScale) {
  return Math.max(ZOOM_MIN, Math.min(rawScale, ZOOM_MAX));
}

function computeWheelScaleDelta(deltaY, isPinchGesture) {
  if (isPinchGesture) {
    return Math.exp(-deltaY * PINCH_ZOOM_SENSITIVITY);
  }
  return deltaY > 0 ? 1 / ZOOM_STEP : ZOOM_STEP;
}

function clampContentOffset(
  rawX,
  rawY,
  scale,
  plotInnerWidth,
  plotInnerHeight,
) {
  const scaledWidth = plotInnerWidth * scale;
  const scaledHeight = plotInnerHeight * scale;

  let clampedX;
  let clampedY;

  if (scaledWidth <= plotInnerWidth) {
    clampedX = (plotInnerWidth - scaledWidth) / 2;
  } else {
    const minX = plotInnerWidth - scaledWidth;
    const maxX = 0;
    clampedX = Math.max(minX, Math.min(rawX, maxX));
  }

  if (scaledHeight <= plotInnerHeight) {
    clampedY = (plotInnerHeight - scaledHeight) / 2;
  } else {
    const minY = plotInnerHeight - scaledHeight;
    const maxY = 0;
    clampedY = Math.max(minY, Math.min(rawY, maxY));
  }

  return { x: clampedX, y: clampedY };
}

function buildScales(plotterPoints, plotInnerWidth, plotInnerHeight) {
  const xValues = plotterPoints.map((p) => p.x);
  const yValues = plotterPoints.map((p) => p.y);

  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);

  const xPadding =
    (xMax - xMin) * EXTENT_PADDING_RATIO || EXTENT_FALLBACK_PADDING;
  const yPadding =
    (yMax - yMin) * EXTENT_PADDING_RATIO || EXTENT_FALLBACK_PADDING;

  const xExtent = [xMin - xPadding, xMax + xPadding];
  const yExtent = [yMin - yPadding, yMax + yPadding];

  const xScale = buildLinearScale(xExtent[0], xExtent[1], 0, plotInnerWidth);
  const yScale = buildLinearScale(yExtent[0], yExtent[1], plotInnerHeight, 0);

  return { xScale, yScale, xExtent, yExtent };
}

function computeVisibleDomain(
  xExtent,
  yExtent,
  contentOffset,
  scale,
  plotInnerWidth,
  plotInnerHeight,
) {
  const domainWidth = xExtent[1] - xExtent[0];
  const domainHeight = yExtent[1] - yExtent[0];

  const xMin =
    xExtent[0] - (contentOffset.x / scale / plotInnerWidth) * domainWidth;
  const xMax = xMin + domainWidth / scale;

  const yMax =
    yExtent[1] + (contentOffset.y / scale / plotInnerHeight) * domainHeight;
  const yMin = yMax - domainHeight / scale;

  return { xMin, xMax, yMin, yMax };
}

function buildLinearScale(domainMin, domainMax, rangeMin, rangeMax) {
  return (value) => {
    const ratio = (value - domainMin) / (domainMax - domainMin);
    return rangeMin + ratio * (rangeMax - rangeMin);
  };
}

function buildTicks(min, max, count) {
  const rawStep = (max - min) / count;
  const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const niceSteps = [1, 2, 2.5, 5, 10];
  const step =
    niceSteps.map((s) => s * magnitude).find((s) => s >= rawStep) ?? rawStep;

  const start = Math.ceil(min / step) * step;
  const ticks = [];

  for (let tick = start; tick <= max + step * 0.001; tick += step) {
    ticks.push(parseFloat(tick.toPrecision(10)));
  }

  return ticks;
}

function formatTickLabel(value) {
  if (Math.abs(value) >= 1000) return value.toExponential(1);
  const formattedString = value.toPrecision(4);
  return parseFloat(formattedString).toString();
}

export default KonvaPlotter;
