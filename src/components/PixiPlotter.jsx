import { useRef, useEffect, useState, useCallback } from "react";
import { Application as PixiApp, Sprite, Container, Text as PixiText } from "pixi.js";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import PlotterControls from "./PlotterControls";

function PixiPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <PixiCanvas plotterPoints={plotterPoints} imageCount={imageCount} xGap={xGap} yGap={yGap} />
  );
}

function PixiCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const canvasContainerRef = useRef(null);
  const pixiAppRef = useRef(null);
  const contentContainerRef = useRef(null);
  const axesContainerRef = useRef(null);
  const tooltipRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const panOffsetRef = useRef({ x: 0, y: 0 });
  const scaleRef = useRef(1);

  const margin = PLOT_MARGIN;
  const innerWidth = PLOT_DIMENSIONS.width - margin.left - margin.right;
  const innerHeight = PLOT_DIMENSIONS.height - margin.top - margin.bottom;

  const initializePixiApp = useCallback(async () => {
    if (!canvasContainerRef.current || pixiAppRef.current) return;

    const pixiApplication = new PixiApp();
    await pixiApplication.init({
      width: PLOT_DIMENSIONS.width,
      height: PLOT_DIMENSIONS.height,
      background: 0x16213e,
      antialias: true,
    });

    canvasContainerRef.current.appendChild(pixiApplication.canvas);
    pixiAppRef.current = pixiApplication;

    const axesGroup = new Container();
    axesGroup.x = margin.left;
    axesGroup.y = margin.top;
    pixiApplication.stage.addChild(axesGroup);
    axesContainerRef.current = axesGroup;

    const contentGroup = new Container();
    contentGroup.x = margin.left;
    contentGroup.y = margin.top;
    pixiApplication.stage.addChild(contentGroup);
    contentContainerRef.current = contentGroup;
  }, []);

  useEffect(() => {
    initializePixiApp();

    return () => {
      if (pixiAppRef.current) {
        pixiAppRef.current.destroy(true);
        pixiAppRef.current = null;
        contentContainerRef.current = null;
      }
    };
  }, [initializePixiApp]);

  useEffect(() => {
    if (!pixiAppRef.current || !contentContainerRef.current || !axesContainerRef.current) return;

    const contentGroup = contentContainerRef.current;
    const axesGroup = axesContainerRef.current;
    contentGroup.removeChildren();
    axesGroup.removeChildren();

    renderPoints(pixiAppRef.current, contentGroup, axesGroup, plotterPoints, imageCount, innerWidth, innerHeight, tooltipRef, xGap, yGap);
  }, [plotterPoints, imageCount, innerWidth, innerHeight, xGap, yGap]);

  const handleWheel = useCallback((event) => {
    event.preventDefault();
    if (!contentContainerRef.current) return;

    const scaleDelta = event.deltaY > 0 ? 0.9 : 1.1;
    const newScale = Math.max(0.3, Math.min(scaleRef.current * scaleDelta, 10));
    scaleRef.current = newScale;

    const contentGroup = contentContainerRef.current;
    contentGroup.scale.set(newScale);
  }, []);

  const handleMouseDown = useCallback((event) => {
    setIsDragging(true);
    dragStartRef.current = {
      x: event.clientX - panOffsetRef.current.x,
      y: event.clientY - panOffsetRef.current.y,
    };
  }, []);

  const handleMouseMove = useCallback((event) => {
    if (!isDragging || !contentContainerRef.current) return;

    const newOffsetX = event.clientX - dragStartRef.current.x;
    const newOffsetY = event.clientY - dragStartRef.current.y;
    panOffsetRef.current = { x: newOffsetX, y: newOffsetY };

    contentContainerRef.current.x = margin.left + newOffsetX;
    contentContainerRef.current.y = margin.top + newOffsetY;
  }, [isDragging, margin.left, margin.top]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleZoomIn = () => {
    const newScale = Math.min(scaleRef.current * 1.5, 10);
    scaleRef.current = newScale;
    if (contentContainerRef.current) contentContainerRef.current.scale.set(newScale);
  };

  const handleZoomOut = () => {
    const newScale = Math.max(scaleRef.current / 1.5, 0.3);
    scaleRef.current = newScale;
    if (contentContainerRef.current) contentContainerRef.current.scale.set(newScale);
  };

  const handleReset = () => {
    scaleRef.current = 1;
    panOffsetRef.current = { x: 0, y: 0 };
    if (contentContainerRef.current) {
      contentContainerRef.current.scale.set(1);
      contentContainerRef.current.x = margin.left;
      contentContainerRef.current.y = margin.top;
    }
  };

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
        style={{ display: "none" }}
      />
    </div>
  );
}

function renderPoints(pixiApplication, contentGroup, axesGroup, plotterPoints, imageCount, innerWidth, innerHeight, tooltipRef, xGap, yGap) {
  const xExtent = getExtent(plotterPoints, "x");
  const yExtent = getExtent(plotterPoints, "y");

  const xSpacingScale = xGap / 10;
  const ySpacingScale = yGap / 10;
  
  const xScale = createLinearScale(xExtent[0], xExtent[1], 0, innerWidth * xSpacingScale);
  const yScale = createLinearScale(yExtent[0], yExtent[1], innerHeight * ySpacingScale, 0);

  renderAxisLabels(axesGroup, xScale, yScale, xExtent, yExtent, innerWidth, innerHeight);

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

      sprite.on("pointerenter", (event) => {
        showPixiTooltip(tooltipRef.current, event, point);
      });
      sprite.on("pointerleave", () => {
        hidePixiTooltip(tooltipRef.current);
      });

      contentGroup.addChild(sprite);
    });
  });
}

function renderAxisLabels(contentGroup, xScale, yScale, xExtent, yExtent, innerWidth, innerHeight) {
  const tickCount = 5;

  for (let i = 0; i <= tickCount; i++) {
    const xValue = xExtent[0] + (xExtent[1] - xExtent[0]) * (i / tickCount);
    const xPosition = xScale(xValue);

    const xLabel = new PixiText({
      text: Math.round(xValue).toString(),
      style: { fill: "#888", fontSize: 11 },
    });
    xLabel.x = xPosition - xLabel.width / 2;
    xLabel.y = innerHeight + 5;
    contentGroup.addChild(xLabel);
  }

  for (let i = 0; i <= tickCount; i++) {
    const yValue = yExtent[0] + (yExtent[1] - yExtent[0]) * (i / tickCount);
    const yPosition = yScale(yValue);

    const yLabel = new PixiText({
      text: Math.round(yValue).toString(),
      style: { fill: "#888", fontSize: 11 },
    });
    yLabel.x = -yLabel.width - 5;
    yLabel.y = yPosition - yLabel.height / 2;
    contentGroup.addChild(yLabel);
  }
}

function getExtent(dataPoints, key) {
  const values = dataPoints.map((point) => point[key]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const padding = (max - min) * 0.15 || 5;

  return [min - padding, max + padding];
}

function createLinearScale(domainMin, domainMax, rangeMin, rangeMax) {
  return (value) => {
    const ratio = (value - domainMin) / (domainMax - domainMin);
    return rangeMin + ratio * (rangeMax - rangeMin);
  };
}

function showPixiTooltip(tooltipElement, event, point) {
  if (!tooltipElement) return;

  tooltipElement.style.display = "block";
  tooltipElement.innerHTML =
    `<div class="tooltip-label">${point.label}</div>` +
    `<div class="tooltip-meta">` +
    `<span>Interval: ${point.meta.interval}s</span>` +
    `<span>Angle: ${point.meta.angle}°</span>` +
    `<span>Quality: ${point.meta.quality}</span>` +
    `</div>`;

  const globalPosition = event.global || event.data?.global;
  if (globalPosition) {
    tooltipElement.style.left = `${globalPosition.x + 15}px`;
    tooltipElement.style.top = `${globalPosition.y - 10}px`;
  }
}

function hidePixiTooltip(tooltipElement) {
  if (!tooltipElement) return;
  tooltipElement.style.display = "none";
}

export default PixiPlotter;
