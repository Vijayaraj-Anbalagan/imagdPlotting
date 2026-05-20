import { useState, useRef, useCallback, useEffect } from "react";
import { Stage, Layer, Image as KonvaImage, Text, Line } from "react-konva";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import PlotterControls from "./PlotterControls";

function KonvaPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <KonvaCanvas plotterPoints={plotterPoints} imageCount={imageCount} xGap={xGap} yGap={yGap} />
  );
}

function KonvaCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const [stageScale, setStageScale] = useState(1);
  const [stagePosition, setStagePosition] = useState({ x: 0, y: 0 });
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const margin = PLOT_MARGIN;
  const innerWidth = PLOT_DIMENSIONS.width - margin.left - margin.right;
  const innerHeight = PLOT_DIMENSIONS.height - margin.top - margin.bottom;

  const { xScale, yScale, xExtent, yExtent } = computeScales(plotterPoints, innerWidth, innerHeight, xGap, yGap);

  const handleStageWheel = useCallback((event) => {
    event.evt.preventDefault();
    const stage = event.target.getStage();
    const oldScale = stageScale;
    const pointerPosition = stage.getPointerPosition();

    const scaleDelta = event.evt.deltaY > 0 ? 0.9 : 1.1;
    const newScale = Math.max(0.3, Math.min(oldScale * scaleDelta, 10));

    const mousePointTo = {
      x: (pointerPosition.x - stagePosition.x) / oldScale,
      y: (pointerPosition.y - stagePosition.y) / oldScale,
    };

    setStageScale(newScale);
    setStagePosition({
      x: pointerPosition.x - mousePointTo.x * newScale,
      y: pointerPosition.y - mousePointTo.y * newScale,
    });
  }, [stageScale, stagePosition]);

  const handleStageDragEnd = useCallback((event) => {
    setStagePosition({
      x: event.target.x(),
      y: event.target.y(),
    });
  }, []);

  const handleZoomIn = () => setStageScale(Math.min(stageScale * 1.5, 10));
  const handleZoomOut = () => setStageScale(Math.max(stageScale / 1.5, 0.3));
  const handleReset = () => {
    setStageScale(1);
    setStagePosition({ x: 0, y: 0 });
  };

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
      <Stage
        width={PLOT_DIMENSIONS.width}
        height={PLOT_DIMENSIONS.height}
        scaleX={stageScale}
        scaleY={stageScale}
        x={stagePosition.x}
        y={stagePosition.y}
        draggable
        onWheel={handleStageWheel}
        onDragEnd={handleStageDragEnd}
      >
        <Layer>
          <AxisLines
            xScale={xScale}
            yScale={yScale}
            xExtent={xExtent}
            yExtent={yExtent}
            margin={margin}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />
          {plotterPoints.map((point) => (
            <ImagePointGroup
              key={point.id}
              point={point}
              xScale={xScale}
              yScale={yScale}
              margin={margin}
              imageCount={imageCount}
              onHover={setHoveredPoint}
              onCursorMove={setCursorPosition}
            />
          ))}
        </Layer>
      </Stage>

      {hoveredPoint && (
        <div
          className="plotter-tooltip"
          style={{
            display: "block",
            left: cursorPosition.x + 15,
            top: cursorPosition.y - 10,
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
  );
}

function AxisLines({ xScale, yScale, xExtent, yExtent, margin, innerWidth, innerHeight }) {
  const tickCount = 5;
  const axisElements = [];

  for (let i = 0; i <= tickCount; i++) {
    const xValue = xExtent[0] + (xExtent[1] - xExtent[0]) * (i / tickCount);
    const xPosition = xScale(xValue) + margin.left;

    axisElements.push(
      <Line
        key={`xgrid-${i}`}
        points={[xPosition, margin.top, xPosition, margin.top + innerHeight]}
        stroke="#2a2a3e"
        strokeWidth={1}
        dash={[3, 3]}
      />
    );

    axisElements.push(
      <Text
        key={`xlabel-${i}`}
        text={Math.round(xValue).toString()}
        x={xPosition - 10}
        y={margin.top + innerHeight + 5}
        fill="#888"
        fontSize={11}
      />
    );
  }

  for (let i = 0; i <= tickCount; i++) {
    const yValue = yExtent[0] + (yExtent[1] - yExtent[0]) * (i / tickCount);
    const yPosition = yScale(yValue) + margin.top;

    axisElements.push(
      <Line
        key={`ygrid-${i}`}
        points={[margin.left, yPosition, margin.left + innerWidth, yPosition]}
        stroke="#2a2a3e"
        strokeWidth={1}
        dash={[3, 3]}
      />
    );

    axisElements.push(
      <Text
        key={`ylabel-${i}`}
        text={Math.round(yValue).toString()}
        x={margin.left - 30}
        y={yPosition - 6}
        fill="#888"
        fontSize={11}
      />
    );
  }

  return <>{axisElements}</>;
}

function ImagePointGroup({ point, xScale, yScale, margin, imageCount, onHover, onCursorMove }) {
  const centerX = xScale(point.x) + margin.left;
  const centerY = yScale(point.y) + margin.top;
  const positions = computeImagePositions(centerX, centerY, CELL_SIZE, CELL_SIZE, imageCount);

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

function KonvaImageFromUrl({ imageUrl, x, y, width, height, point, onHover, onCursorMove }) {
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

  const handleMouseEnter = useCallback((event) => {
    const stage = event.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    onCursorMove({ x: pointerPosition.x, y: pointerPosition.y });
    onHover(point);
  }, [point, onHover, onCursorMove]);

  const handleMouseLeave = useCallback(() => {
    onHover(null);
  }, [onHover]);

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

function computeScales(plotterPoints, innerWidth, innerHeight, xGap, yGap) {
  const xValues = plotterPoints.map((point) => point.x);
  const yValues = plotterPoints.map((point) => point.y);

  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);

  const xPadding = (xMax - xMin) * 0.15 || 5;
  const yPadding = (yMax - yMin) * 0.15 || 5;

  const xExtent = [xMin - xPadding, xMax + xPadding];
  const yExtent = [yMin - yPadding, yMax + yPadding];

  const xSpacingScale = xGap / 10;
  const ySpacingScale = yGap / 10;

  const xScale = (value) => {
    const ratio = (value - xExtent[0]) / (xExtent[1] - xExtent[0]);
    return ratio * innerWidth * xSpacingScale;
  };

  const yScale = (value) => {
    const ratio = (value - yExtent[0]) / (yExtent[1] - yExtent[0]);
    return innerHeight * ySpacingScale - ratio * innerHeight * ySpacingScale;
  };

  return { xScale, yScale, xExtent, yExtent };
}

export default KonvaPlotter;
