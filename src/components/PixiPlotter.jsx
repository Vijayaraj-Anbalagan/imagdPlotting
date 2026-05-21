import { useRef, useEffect, useState, useCallback } from "react";
import {
  Application as PixiApp,
  Sprite,
  Container,
  Text as PixiText,
  Graphics,
  Assets,
} from "pixi.js";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import PlotterControls from "./PlotterControls";

const AXIS_TICK_COUNT = 5;
const TICK_LABEL_COLOR = "#888888";
const TICK_LABEL_SIZE = 11;
const GRID_COLOR = 0x333333;
const GRID_ALPHA = 0.6;
const AXIS_BORDER_COLOR = 0x555555;
const EXTENT_PADDING_RATIO = 0.2;
const EXTENT_FALLBACK_PADDING = 5;
const ZOOM_STEP = 1.5;
const ZOOM_MIN = 0.3;
const ZOOM_MAX = 10;

function PixiPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <PixiCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

function PixiCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const canvasContainerRef = useRef(null);
  const pixiAppRef = useRef(null);
  const contentLayerRef = useRef(null);
  const axesLayerRef = useRef(null);
  const tooltipRef = useRef(null);
  const scaleRef = useRef(1);
  const panOffsetRef = useRef({ x: 0, y: 0 });
  const dragStartRef = useRef({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);

  const innerWidth = PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;
  const innerHeight = PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

  useEffect(() => {
    let cancelled = false;

    async function bootstrapPixi() {
      if (!canvasContainerRef.current || pixiAppRef.current) return;

      const pixiApplication = new PixiApp();
      await pixiApplication.init({
        width: PLOT_DIMENSIONS.width,
        height: PLOT_DIMENSIONS.height,
        background: 0x16213e,
        antialias: true,
      });

      if (cancelled) {
        pixiApplication.destroy(true);
        return;
      }

      canvasContainerRef.current.appendChild(pixiApplication.canvas);
      pixiAppRef.current = pixiApplication;

      const axesLayer = new Container();
      axesLayer.x = PLOT_MARGIN.left;
      axesLayer.y = PLOT_MARGIN.top;
      pixiApplication.stage.addChild(axesLayer);
      axesLayerRef.current = axesLayer;

      const contentLayer = new Container();
      contentLayer.x = PLOT_MARGIN.left;
      contentLayer.y = PLOT_MARGIN.top;
      pixiApplication.stage.addChild(contentLayer);
      contentLayerRef.current = contentLayer;

      setIsAppReady(true);
    }

    bootstrapPixi();

    return () => {
      cancelled = true;
      if (pixiAppRef.current) {
        pixiAppRef.current.destroy(true);
        pixiAppRef.current = null;
        contentLayerRef.current = null;
        axesLayerRef.current = null;
        setIsAppReady(false);
      }
    };
  }, []);

  useEffect(() => {
    if (!isAppReady || !contentLayerRef.current || !axesLayerRef.current) return;
    if (plotterPoints.length === 0) return;

    contentLayerRef.current.removeChildren();
    axesLayerRef.current.removeChildren();

    const xExtent = computeExtent(plotterPoints, "x");
    const yExtent = computeExtent(plotterPoints, "y");

    const xScale = buildLinearScale(xExtent[0], xExtent[1], 0, innerWidth);
    const yScale = buildLinearScale(yExtent[0], yExtent[1], innerHeight, 0);

    drawGrid(axesLayerRef.current, xScale, yScale, xExtent, yExtent, innerWidth, innerHeight);
    drawAxesLabels(axesLayerRef.current, xScale, yScale, xExtent, yExtent, innerHeight);

    const uniqueImageUrls = [...new Set(plotterPoints.map((point) => point.image))];

    Assets.load(uniqueImageUrls).then(() => {
      if (!contentLayerRef.current) return;
      drawDataPoints(contentLayerRef.current, plotterPoints, xScale, yScale, imageCount, tooltipRef);
    });
  }, [isAppReady, plotterPoints, imageCount, xGap, yGap, innerWidth, innerHeight]);

  const handleWheel = useCallback((event) => {
    event.preventDefault();
    if (!contentLayerRef.current) return;

    const scaleDelta = event.deltaY > 0 ? 1 / ZOOM_STEP : ZOOM_STEP;
    const newScale = Math.max(ZOOM_MIN, Math.min(scaleRef.current * scaleDelta, ZOOM_MAX));
    scaleRef.current = newScale;
    contentLayerRef.current.scale.set(newScale);
  }, []);

  const handleMouseDown = useCallback((event) => {
    setIsDragging(true);
    dragStartRef.current = {
      x: event.clientX - panOffsetRef.current.x,
      y: event.clientY - panOffsetRef.current.y,
    };
  }, []);

  const handleMouseMove = useCallback(
    (event) => {
      if (!isDragging || !contentLayerRef.current) return;

      const newOffsetX = event.clientX - dragStartRef.current.x;
      const newOffsetY = event.clientY - dragStartRef.current.y;
      panOffsetRef.current = { x: newOffsetX, y: newOffsetY };

      contentLayerRef.current.x = PLOT_MARGIN.left + newOffsetX;
      contentLayerRef.current.y = PLOT_MARGIN.top + newOffsetY;
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  const handleZoomIn = useCallback(() => {
    const newScale = Math.min(scaleRef.current * ZOOM_STEP, ZOOM_MAX);
    scaleRef.current = newScale;
    if (contentLayerRef.current) contentLayerRef.current.scale.set(newScale);
  }, []);

  const handleZoomOut = useCallback(() => {
    const newScale = Math.max(scaleRef.current / ZOOM_STEP, ZOOM_MIN);
    scaleRef.current = newScale;
    if (contentLayerRef.current) contentLayerRef.current.scale.set(newScale);
  }, []);

  const handleReset = useCallback(() => {
    scaleRef.current = 1;
    panOffsetRef.current = { x: 0, y: 0 };
    if (contentLayerRef.current) {
      contentLayerRef.current.scale.set(1);
      contentLayerRef.current.x = PLOT_MARGIN.left;
      contentLayerRef.current.y = PLOT_MARGIN.top;
    }
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
      <div
        ref={canvasContainerRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      />
      <div
        ref={tooltipRef}
        className="plotter-tooltip"
        style={{ display: "none", position: "absolute", pointerEvents: "none" }}
      />
    </div>
  );
}

function drawGrid(axesLayer, xScale, yScale, xExtent, yExtent, innerWidth, innerHeight) {
  const grid = new Graphics();

  for (let i = 0; i <= AXIS_TICK_COUNT; i++) {
    const xValue = xExtent[0] + (xExtent[1] - xExtent[0]) * (i / AXIS_TICK_COUNT);
    const xPos = xScale(xValue);
    grid.moveTo(xPos, 0);
    grid.lineTo(xPos, innerHeight);
  }

  for (let i = 0; i <= AXIS_TICK_COUNT; i++) {
    const yValue = yExtent[0] + (yExtent[1] - yExtent[0]) * (i / AXIS_TICK_COUNT);
    const yPos = yScale(yValue);
    grid.moveTo(0, yPos);
    grid.lineTo(innerWidth, yPos);
  }

  grid.stroke({ width: 1, color: GRID_COLOR, alpha: GRID_ALPHA });

  const border = new Graphics();
  border.rect(0, 0, innerWidth, innerHeight);
  border.stroke({ width: 1, color: AXIS_BORDER_COLOR });

  axesLayer.addChild(grid);
  axesLayer.addChild(border);
}

function drawAxesLabels(axesLayer, xScale, yScale, xExtent, yExtent, innerHeight) {
  for (let i = 0; i <= AXIS_TICK_COUNT; i++) {
    const xValue = xExtent[0] + (xExtent[1] - xExtent[0]) * (i / AXIS_TICK_COUNT);
    const xPos = xScale(xValue);

    const xLabel = new PixiText({
      text: Math.round(xValue).toString(),
      style: { fill: TICK_LABEL_COLOR, fontSize: TICK_LABEL_SIZE },
    });
    xLabel.x = xPos - xLabel.width / 2;
    xLabel.y = innerHeight + 6;
    axesLayer.addChild(xLabel);
  }

  for (let i = 0; i <= AXIS_TICK_COUNT; i++) {
    const yValue = yExtent[0] + (yExtent[1] - yExtent[0]) * (i / AXIS_TICK_COUNT);
    const yPos = yScale(yValue);

    const yLabel = new PixiText({
      text: Math.round(yValue).toString(),
      style: { fill: TICK_LABEL_COLOR, fontSize: TICK_LABEL_SIZE },
    });
    yLabel.x = -yLabel.width - 6;
    yLabel.y = yPos - yLabel.height / 2;
    axesLayer.addChild(yLabel);
  }
}

function drawDataPoints(contentLayer, plotterPoints, xScale, yScale, imageCount, tooltipRef) {
  plotterPoints.forEach((point) => {
    const centerX = xScale(point.x);
    const centerY = yScale(point.y);
    const positions = computeImagePositions(centerX, centerY, CELL_SIZE, CELL_SIZE, imageCount);

    positions.forEach((position) => {
      const sprite = Sprite.from(point.image);
      sprite.x = position.x;
      sprite.y = position.y;
      sprite.width = position.width;
      sprite.height = position.height;
      sprite.eventMode = "static";
      sprite.cursor = "pointer";

      sprite.on("pointerenter", (event) => showPixiTooltip(tooltipRef.current, event, point));
      sprite.on("pointerleave", () => hidePixiTooltip(tooltipRef.current));

      contentLayer.addChild(sprite);
    });
  });
}

function computeExtent(dataPoints, key) {
  const values = dataPoints.map((point) => point[key]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const padding = (max - min) * EXTENT_PADDING_RATIO || EXTENT_FALLBACK_PADDING;
  return [min - padding, max + padding];
}

function buildLinearScale(domainMin, domainMax, rangeMin, rangeMax) {
  return (value) => {
    const ratio = (value - domainMin) / (domainMax - domainMin);
    return rangeMin + ratio * (rangeMax - rangeMin);
  };
}

function showPixiTooltip(tooltipElement, event, point) {
  if (!tooltipElement) return;

  const globalPosition = event.global ?? event.data?.global;
  if (globalPosition) {
    tooltipElement.style.left = `${globalPosition.x + 15}px`;
    tooltipElement.style.top = `${globalPosition.y - 10}px`;
  }

  tooltipElement.style.display = "block";
  tooltipElement.innerHTML =
    `<div class="tooltip-label">${point.label}</div>` +
    `<div class="tooltip-meta">` +
    `<span>Interval: ${point.meta.interval}s</span>` +
    `<span>Angle: ${point.meta.angle}°</span>` +
    `<span>Quality: ${point.meta.quality}</span>` +
    `</div>`;
}

function hidePixiTooltip(tooltipElement) {
  if (!tooltipElement) return;
  tooltipElement.style.display = "none";
}

export default PixiPlotter;
