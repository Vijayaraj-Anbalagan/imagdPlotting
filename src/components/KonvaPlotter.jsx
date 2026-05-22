import { useState, useRef, useCallback, useEffect } from "react";
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
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import PlotterControls from "./PlotterControls";

const AXIS_TICK_COUNT = 8;
const EXTENT_PADDING_RATIO = 0.2;
const EXTENT_FALLBACK_PADDING = 5;
const ZOOM_STEP = 1.5;
const PINCH_ZOOM_SENSITIVITY = 0.01;
const ZOOM_MIN = 0.3;
const ZOOM_MAX = 10;
const GRID_COLOR = "#2a2a3e";
const AXIS_LINE_COLOR = "#555555";
const TICK_LABEL_COLOR = "#aaaaaa";
const TICK_LABEL_FONT_SIZE = 11;

function KonvaPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <KonvaCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

function KonvaCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const [contentScale, setContentScale] = useState(1);
  const [contentOffset, setContentOffset] = useState({ x: 0, y: 0 });
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const draggableGroupRef = useRef(null);
  const stageRef = useRef(null);

  const innerWidth =
    PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;
  const innerHeight =
    PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

  const { xScale, yScale, xExtent, yExtent } = buildScales(
    plotterPoints,
    innerWidth,
    innerHeight,
  );

  const visibleDomain = computeVisibleDomain(
    xExtent,
    yExtent,
    contentOffset,
    contentScale,
    innerWidth,
    innerHeight,
  );

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
      const newScale = clampScale(contentScale * scaleDelta);

      const mouseRelX = pointerPosition.x - PLOT_MARGIN.left - contentOffset.x;
      const mouseRelY = pointerPosition.y - PLOT_MARGIN.top - contentOffset.y;

      const nextOffsetX =
        contentOffset.x - mouseRelX * (newScale / contentScale - 1);
      const nextOffsetY =
        contentOffset.y - mouseRelY * (newScale / contentScale - 1);

      const clampedOffset = clampContentOffset(
        nextOffsetX,
        nextOffsetY,
        newScale,
        innerWidth,
        innerHeight,
      );

      setContentScale(newScale);
      setContentOffset(clampedOffset);
    },
    [contentScale, contentOffset, innerWidth, innerHeight],
  );

  const handleContentDragStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleContentDragMove = useCallback(
    (event) => {
      const node = event.target;
      const offsetX = node.x() - PLOT_MARGIN.left;
      const offsetY = node.y() - PLOT_MARGIN.top;

      const clamped = clampContentOffset(
        offsetX,
        offsetY,
        contentScale,
        innerWidth,
        innerHeight,
      );

      node.x(PLOT_MARGIN.left + clamped.x);
      node.y(PLOT_MARGIN.top + clamped.y);
    },
    [contentScale, innerWidth, innerHeight],
  );

  const handleContentDragEnd = useCallback((event) => {
    setIsDragging(false);
    const nodeX = event.target.x();
    const nodeY = event.target.y();
    setContentOffset({
      x: nodeX - PLOT_MARGIN.left,
      y: nodeY - PLOT_MARGIN.top,
    });
  }, []);

  const handleZoomIn = useCallback(() => {
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    const newScale = clampScale(contentScale * ZOOM_STEP);

    const nextOffsetX =
      contentOffset.x - centerX * (newScale / contentScale - 1);
    const nextOffsetY =
      contentOffset.y - centerY * (newScale / contentScale - 1);
    const clampedOffset = clampContentOffset(
      nextOffsetX,
      nextOffsetY,
      newScale,
      innerWidth,
      innerHeight,
    );

    setContentScale(newScale);
    setContentOffset(clampedOffset);
  }, [contentScale, contentOffset, innerWidth, innerHeight]);

  const handleZoomOut = useCallback(() => {
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    const newScale = clampScale(contentScale / ZOOM_STEP);

    const nextOffsetX =
      contentOffset.x - centerX * (newScale / contentScale - 1);
    const nextOffsetY =
      contentOffset.y - centerY * (newScale / contentScale - 1);
    const clampedOffset = clampContentOffset(
      nextOffsetX,
      nextOffsetY,
      newScale,
      innerWidth,
      innerHeight,
    );

    setContentScale(newScale);
    setContentOffset(clampedOffset);
  }, [contentScale, contentOffset, innerWidth, innerHeight]);

  const handleReset = useCallback(() => {
    setContentScale(1);
    setContentOffset({ x: 0, y: 0 });
  }, []);

  const stageCursor = isDragging
    ? "grabbing"
    : contentScale > 1
      ? "grab"
      : "default";

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        zoomLevel={contentScale}
      />
      <Stage
        ref={stageRef}
        width={PLOT_DIMENSIONS.width}
        height={PLOT_DIMENSIONS.height}
        onWheel={handleWheel}
        style={{ cursor: stageCursor }}
      >
        {/* Static axis layer — grid, labels, border (not affected by zoom/pan) */}
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

        {/* Clipped content layer — images are clipped to the plot area */}
        <Layer>
          <ClippedContentGroup
            innerWidth={innerWidth}
            innerHeight={innerHeight}
            contentOffset={contentOffset}
            contentScale={contentScale}
            draggableGroupRef={draggableGroupRef}
            onDragStart={handleContentDragStart}
            onDragMove={handleContentDragMove}
            onDragEnd={handleContentDragEnd}
          >
            {plotterPoints.map((point) => (
              <ImagePointGroup
                key={point.id}
                point={point}
                xScale={xScale}
                yScale={yScale}
                imageCount={imageCount}
                onHover={setHoveredPoint}
                onCursorMove={setCursorPosition}
              />
            ))}
          </ClippedContentGroup>
        </Layer>
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

function ClippedContentGroup({
  innerWidth,
  innerHeight,
  contentOffset,
  contentScale,
  draggableGroupRef,
  onDragStart,
  onDragMove,
  onDragEnd,
  children,
}) {
  const plotLeft = PLOT_MARGIN.left;
  const plotTop = PLOT_MARGIN.top;

  const clipFunction = (ctx) => {
    ctx.rect(plotLeft, plotTop, innerWidth, innerHeight);
  };

  return (
    <Group clipFunc={clipFunction}>
      <Group
        ref={draggableGroupRef}
        x={plotLeft + contentOffset.x}
        y={plotTop + contentOffset.y}
        scaleX={contentScale}
        scaleY={contentScale}
        draggable
        onDragStart={onDragStart}
        onDragMove={onDragMove}
        onDragEnd={onDragEnd}
      >
        {/* Invisible hit area so drag works from any empty space in the plot */}
        <Rect
          x={0}
          y={0}
          width={innerWidth}
          height={innerHeight}
          fill="transparent"
          listening={true}
        />
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
  onHover,
  onCursorMove,
}) {
  const centerX = xScale(point.x);
  const centerY = yScale(point.y);
  const positions = computeImagePositions(
    centerX,
    centerY,
    CELL_SIZE,
    CELL_SIZE,
    imageCount,
  );

  return (
    <>
      {positions.map((position, index) => (
        <KonvaImageFromUrl
          key={`${point.id}-${index}`}
          imageUrl={point.image}
          x={position.x}
          y={position.y}
          width={position.width}
          height={position.height}
          point={point}
          onHover={onHover}
          onCursorMove={onCursorMove}
        />
      ))}
    </>
  );
}

function KonvaImageFromUrl({
  imageUrl,
  x,
  y,
  width,
  height,
  point,
  onHover,
  onCursorMove,
}) {
  const [loadedImage, setLoadedImage] = useState(null);

  useEffect(() => {
    const htmlImage = new window.Image();
    htmlImage.crossOrigin = "anonymous";
    htmlImage.src = imageUrl;
    htmlImage.onload = () => setLoadedImage(htmlImage);
    return () => {
      htmlImage.onload = null;
    };
  }, [imageUrl]);

  const handleMouseEnter = useCallback(
    (event) => {
      const stage = event.target.getStage();
      const pointer = stage.getPointerPosition();
      onCursorMove({ x: pointer.x, y: pointer.y });
      onHover(point);
    },
    [point, onHover, onCursorMove],
  );

  const handleMouseLeave = useCallback(() => onHover(null), [onHover]);

  if (!loadedImage) return null;

  return (
    <KonvaImage
      image={loadedImage}
      x={x}
      y={y}
      width={width}
      height={height}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
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

  let clampedX = rawX;
  let clampedY = rawY;

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
