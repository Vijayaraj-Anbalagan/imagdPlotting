/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect, useState, useCallback } from "react";

import {
  Application as PixiApp,
  Container,
  Sprite,
  Graphics,
  Assets,
  Text as PixiText,
} from "pixi.js";

import * as d3 from "d3";

import { usePlotterData } from "../lib/plotterData";

import { computeImagePositions } from "../lib/gridLayout";

import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import {
  computeAdaptiveCellSize,
  filterVisiblePoints,
  computeEffectiveImageCount,
} from "../lib/densityLayout";

import PlotterControls from "./PlotterControls";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
import { useInteractionMode } from "../lib/interactionMode";


const GRID_COLOR = 0x333333;
const GRID_ALPHA = 0.45;

const AXIS_BORDER_COLOR = 0x555555;

const TICK_COLOR = "#999999";

const ZOOM_MIN = 0.5;
const ZOOM_MAX = 8;

const ZOOM_STEP = 1.4;

function PixiPlotter({ imageCount, xGap, yGap, syntheticPoints }) {
  const { plotterPoints: fetchedPoints, isLoading, loadError } = usePlotterData();

  const plotterPoints = syntheticPoints || fetchedPoints;

  if (!syntheticPoints && isLoading) {
    return <div>Loading...</div>;
  }

  if (!syntheticPoints && loadError) {
    return <div>Error: {loadError}</div>;
  }

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
  const containerRef = useRef(null);

  const pixiAppRef = useRef(null);

  const axesLayerRef = useRef(null);

  const contentLayerRef = useRef(null);

  const maskRef = useRef(null);

  const tooltipRef = useRef(null);

  const baseScalesRef = useRef({
    xScale: null,
    yScale: null,
  });

  const transformRef = useRef({
    scale: 1,
    x: 0,
    y: 0,
  });

  const dragRef = useRef({
    dragging: false,
    startX: 0,
    startY: 0,
  });

  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const {
    interactionMode,
    setInteractionMode,
    isPanMode,
  } = useInteractionMode();

  const brushGraphicsRef = useRef(null);
  const brushStartRef = useRef(null);

  const innerWidth =
    PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;

  const innerHeight =
    PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;



  /*
   * GET VIEWPORT SCALES
   */
  const getViewportScales = useCallback(() => {
    const baseXScale = baseScalesRef.current.xScale;
    const baseYScale = baseScalesRef.current.yScale;

    if (!baseXScale || !baseYScale) {
      return null;
    }

    const { scale, x, y } = transformRef.current;

    /*
     * visible viewport pixels
     */
    const leftPx = -x / scale;
    const rightPx = (innerWidth - x) / scale;

    const topPx = -y / scale;
    const bottomPx = (innerHeight - y) / scale;

    /*
     * convert visible pixels -> domain
     */
    const visibleXMin = baseXScale.invert(leftPx);
    const visibleXMax = baseXScale.invert(rightPx);

    const visibleYMax = baseYScale.invert(topPx);
    const visibleYMin = baseYScale.invert(bottomPx);

    const dynamicXScale = d3
      .scaleLinear()
      .domain([visibleXMin, visibleXMax])
      .range([0, innerWidth]);

    const dynamicYScale = d3
      .scaleLinear()
      .domain([visibleYMin, visibleYMax])
      .range([innerHeight, 0]);

    return {
      dynamicXScale,
      dynamicYScale,
    };
  }, [innerWidth, innerHeight]);

  /*
   * RENDER AXES
   */
  const renderAxes = useCallback(() => {
    if (!axesLayerRef.current) return;

    const viewportScales = getViewportScales();

    if (!viewportScales) return;

    const axesLayer = axesLayerRef.current;

    axesLayer.removeChildren();

    drawGrid(
      axesLayer,
      viewportScales.dynamicXScale,
      viewportScales.dynamicYScale,
      innerWidth,
      innerHeight,
    );

    drawAxesLabels(
      axesLayer,
      viewportScales.dynamicXScale,
      viewportScales.dynamicYScale,
      innerWidth,
      innerHeight,
    );
  }, [getViewportScales, innerWidth, innerHeight]);

  /*
   * MAIN RENDER
   */
  const renderScene = async () => {
    if (!axesLayerRef.current) return;

    if (!contentLayerRef.current) return;

    const contentLayer = contentLayerRef.current;

    contentLayer.removeChildren();

    const scaledPoints = plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * (xGap / 10),
      scaledY: point.y * (yGap / 10),
    }));

    const xExtent = d3.extent(scaledPoints, (d) => d.scaledX);

    const yExtent = d3.extent(scaledPoints, (d) => d.scaledY);

    /*
     * BASE SCALES
     */
    const baseXScale = d3
      .scaleLinear()
      .domain([xExtent[0] - 5, xExtent[1] + 5])
      .range([0, innerWidth]);

    const baseYScale = d3
      .scaleLinear()
      .domain([yExtent[0] - 5, yExtent[1] + 5])
      .range([innerHeight, 0]);

    baseScalesRef.current = {
      xScale: baseXScale,
      yScale: baseYScale,
    };

    /*
     * RENDER DYNAMIC AXES
     */
    renderAxes();

    /*
     * LOAD IMAGES
     */
    const uniqueImages = [...new Set(plotterPoints.map((p) => p.image))];

    await Assets.load(uniqueImages);

    /*
     * DRAW POINTS WITH ADAPTIVE SIZING
     */
    const adaptiveCellSize = computeAdaptiveCellSize(
      scaledPoints,
      (val) => baseXScale(val),
      (val) => baseYScale(val),
    );

    const visibleScaledPoints = filterVisiblePoints(
      scaledPoints,
      (val) => baseXScale(val),
      (val) => baseYScale(val),
      innerWidth,
      innerHeight,
      adaptiveCellSize,
    );

    const effectiveImageCount = computeEffectiveImageCount(
      adaptiveCellSize,
      imageCount,
    );

    drawPoints(
      contentLayer,
      visibleScaledPoints,
      baseXScale,
      baseYScale,
      effectiveImageCount,
      tooltipRef,
      adaptiveCellSize,
    );

    applyTransform();
  };

  /*
   * APPLY TRANSFORM
   */
  const applyTransform = useCallback(() => {
    if (!contentLayerRef.current) return;

    const contentLayer = contentLayerRef.current;

    contentLayer.scale.set(transformRef.current.scale);

    contentLayer.x = PLOT_MARGIN.left + transformRef.current.x;

    contentLayer.y = PLOT_MARGIN.top + transformRef.current.y;

    /*
     * rerender viewport axes
     */
    renderAxes();
  }, [renderAxes]);

  /*
   * CLAMP PAN
   */
  const clampPan = (x, y, scale) => {
    const scaledWidth = innerWidth * scale;
    const scaledHeight = innerHeight * scale;

    let minX = innerWidth - scaledWidth;
    let minY = innerHeight - scaledHeight;

    if (scaledWidth < innerWidth) {
      minX = (innerWidth - scaledWidth) / 2;
    }

    if (scaledHeight < innerHeight) {
      minY = (innerHeight - scaledHeight) / 2;
    }

    return {
      x: Math.min(0, Math.max(minX, x)),
      y: Math.min(0, Math.max(minY, y)),
    };
  };

  /*
   * ZOOM
   */
  const zoom = (direction, interactionSource = "button") => {
    logChartInteractionEvent({
      interactionType: direction === "in" ? "ZOOM_IN" : "ZOOM_OUT",
      visualizationLibrary: "Pixi",
      interactionSource: interactionSource,
    });
    const currentScale = transformRef.current.scale;

    const nextScale =
      direction === "in"
        ? Math.min(currentScale * ZOOM_STEP, ZOOM_MAX)
        : Math.max(currentScale / ZOOM_STEP, ZOOM_MIN);

    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;

    let nextX =
      transformRef.current.x - centerX * (nextScale / currentScale - 1);

    let nextY =
      transformRef.current.y - centerY * (nextScale / currentScale - 1);

    const clamped = clampPan(nextX, nextY, nextScale);

    transformRef.current = {
      scale: nextScale,
      x: clamped.x,
      y: clamped.y,
    };

    setZoomLevel(nextScale);

    applyTransform();
  };

  /*
   * RESET
   */
  const reset = useCallback((interactionSource) => {
    const computedSource = (interactionSource && typeof interactionSource === "string") ? interactionSource : "button";
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Pixi",
      interactionSource: computedSource,
    });
    transformRef.current = {
      scale: 1,
      x: 0,
      y: 0,
    };

    setZoomLevel(1);

    applyTransform();
  }, [applyTransform]);

  /*
   * WHEEL ZOOM
   */
  const handleWheel = useCallback((event) => {
    event.preventDefault();

    if (event.deltaY > 0) {
      zoom("out", "wheel");
    } else {
      zoom("in", "wheel");
    }
  }, [zoom]);

  /*
   * DRAG & BRUSH EVENTS
   */
  const handleMouseDown = useCallback((event) => {
    if (isPanMode) {
      logChartInteractionEvent({
        interactionType: "PAN",
        visualizationLibrary: "Pixi",
        interactionSource: "drag",
      });
      setIsDragging(true);
      dragRef.current.dragging = true;
      dragRef.current.startX = event.clientX - transformRef.current.x;
      dragRef.current.startY = event.clientY - transformRef.current.y;
    } else {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const localX = event.clientX - rect.left - PLOT_MARGIN.left;
      const localY = event.clientY - rect.top - PLOT_MARGIN.top;

      if (localX >= 0 && localX <= innerWidth && localY >= 0 && localY <= innerHeight) {
        brushStartRef.current = { x: localX, y: localY };
      }
    }
  }, [isPanMode, innerWidth, innerHeight]);

  const handleMouseMove = useCallback((event) => {
    if (dragRef.current.dragging) {
      const nextX = event.clientX - dragRef.current.startX;
      const nextY = event.clientY - dragRef.current.startY;
      const clamped = clampPan(nextX, nextY, transformRef.current.scale);

      transformRef.current.x = clamped.x;
      transformRef.current.y = clamped.y;

      applyTransform();
      return;
    }

    if (brushStartRef.current) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const localX = Math.max(0, Math.min(innerWidth, event.clientX - rect.left - PLOT_MARGIN.left));
      const localY = Math.max(0, Math.min(innerHeight, event.clientY - rect.top - PLOT_MARGIN.top));

      const x0 = Math.min(brushStartRef.current.x, localX);
      const y0 = Math.min(brushStartRef.current.y, localY);
      const w = Math.abs(localX - brushStartRef.current.x);
      const h = Math.abs(localY - brushStartRef.current.y);

      const brushGraphics = brushGraphicsRef.current;
      if (brushGraphics) {
        brushGraphics.clear();
        if (w > 0 && h > 0) {
          brushGraphics.rect(
            PLOT_MARGIN.left + x0,
            PLOT_MARGIN.top + y0,
            w,
            h
          );
          brushGraphics.fill({ color: 0x4493ff, alpha: 0.15 });
          brushGraphics.stroke({ width: 1.5, color: 0x4493ff });
        }
      }
    }
  }, [innerWidth, innerHeight]);

  const handleMouseUp = useCallback((event) => {
    setIsDragging(false);
    if (dragRef.current.dragging) {
      dragRef.current.dragging = false;
      return;
    }

    if (brushStartRef.current) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const localX = Math.max(0, Math.min(innerWidth, event.clientX - rect.left - PLOT_MARGIN.left));
      const localY = Math.max(0, Math.min(innerHeight, event.clientY - rect.top - PLOT_MARGIN.top));

      const x0 = Math.min(brushStartRef.current.x, localX);
      const y0 = Math.min(brushStartRef.current.y, localY);
      const w = Math.abs(localX - brushStartRef.current.x);
      const h = Math.abs(localY - brushStartRef.current.y);

      if (w >= 5 && h >= 5) {
        logChartInteractionEvent({
          interactionType: "ZOOM_IN",
          visualizationLibrary: "Pixi",
          interactionSource: "brush",
        });
        const currentScale = transformRef.current.scale;
        const currentX = transformRef.current.x;
        const currentY = transformRef.current.y;

        const contentX0 = (x0 - currentX) / currentScale;
        const contentY0 = (y0 - currentY) / currentScale;
        const contentW = w / currentScale;
        const contentH = h / currentScale;

        const scaleX = innerWidth / contentW;
        const scaleY = innerHeight / contentH;
        const nextScale = Math.max(ZOOM_MIN, Math.min(Math.min(scaleX, scaleY), ZOOM_MAX));

        const rawX = -contentX0 * nextScale;
        const rawY = -contentY0 * nextScale;

        const clamped = clampPan(rawX, rawY, nextScale);
        transformRef.current = {
          scale: nextScale,
          x: clamped.x,
          y: clamped.y,
        };
        setZoomLevel(nextScale);
        applyTransform();
      }

      if (brushGraphicsRef.current) {
        brushGraphicsRef.current.clear();
      }
      brushStartRef.current = null;
    }
  }, [innerWidth, innerHeight]);

  /*
   * SHIFT KEY HANDLER
   */
  /* Cancel in-progress brush when switching to pan mode */
  useEffect(() => {
    if (isPanMode) {
      brushStartRef.current = null;
      if (brushGraphicsRef.current) {
        brushGraphicsRef.current.clear();
      }
    }
  }, [isPanMode]);

  /*
   * DOUBLE CLICK RESET
   */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleDblClick = () => {
      reset("double_click");
    };

    container.addEventListener("dblclick", handleDblClick);
    return () => {
      container.removeEventListener("dblclick", handleDblClick);
    };
  }, [reset]);

  /*
   * INITIALIZE PIXI
   */
  useEffect(() => {
    let cancelled = false;

    async function init() {
      if (!containerRef.current) return;

      const app = new PixiApp();

      await app.init({
        width: PLOT_DIMENSIONS.width,
        height: PLOT_DIMENSIONS.height,
        background: 0x16213e,
        antialias: true,
      });

      if (cancelled) {
        app.destroy(true);
        return;
      }

      containerRef.current.appendChild(app.canvas);

      pixiAppRef.current = app;

      /*
       * AXES LAYER
       */
      const axesLayer = new Container();

      axesLayer.x = PLOT_MARGIN.left;
      axesLayer.y = PLOT_MARGIN.top;

      app.stage.addChild(axesLayer);

      axesLayerRef.current = axesLayer;

      /*
       * CONTENT LAYER
       */
      const contentLayer = new Container();

      contentLayer.x = PLOT_MARGIN.left;
      contentLayer.y = PLOT_MARGIN.top;

      app.stage.addChild(contentLayer);

      contentLayerRef.current = contentLayer;

      /*
       * MASK / CLIPPING
       */
      const mask = new Graphics();

      mask.rect(PLOT_MARGIN.left, PLOT_MARGIN.top, innerWidth, innerHeight);

      mask.fill(0xffffff);

      app.stage.addChild(mask);

      contentLayer.mask = mask;

      maskRef.current = mask;

      /*
       * BRUSH LAYER / GRAPHICS
       */
      const brushGraphics = new Graphics();
      app.stage.addChild(brushGraphics);
      brushGraphicsRef.current = brushGraphics;

      requestAnimationFrame(() => {
        renderScene();
      });
    }

    init();

    return () => {
      cancelled = true;

      if (pixiAppRef.current) {
        pixiAppRef.current.destroy(true);
      }
    };
  }, [renderScene, innerWidth, innerHeight]);

  /*
   * RERENDER DATA CHANGES
   */
  useEffect(() => {
    if (!plotterPoints.length) return;

    renderScene();
  }, [plotterPoints, imageCount, xGap, yGap, renderScene]);

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        zoomLevel={zoomLevel}
        onZoomIn={() => zoom("in")}
        onZoomOut={() => zoom("out")}
        onReset={reset}
        interactionMode={interactionMode}
        onModeChange={setInteractionMode}
      />

      <div
        ref={containerRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onDoubleClick={reset}
        style={{
          cursor: isPanMode
            ? (isDragging ? "grabbing" : "grab")
            : "crosshair",
        }}
      />

      <div
        ref={tooltipRef}
        className="plotter-tooltip"
        style={{
          display: "none",
          position: "absolute",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

/*
 * GRID
 */
function drawGrid(layer, xScale, yScale, width, height) {
  const grid = new Graphics();

  const xTicks = buildIntegerTicks(xScale.domain());

  const yTicks = buildIntegerTicks(yScale.domain());

  xTicks.forEach((tick) => {
    const x = xScale(tick);

    grid.moveTo(x, 0);
    grid.lineTo(x, height);
  });

  yTicks.forEach((tick) => {
    const y = yScale(tick);

    grid.moveTo(0, y);
    grid.lineTo(width, y);
  });

  grid.stroke({
    width: 1,
    color: GRID_COLOR,
    alpha: GRID_ALPHA,
  });

  const border = new Graphics();

  border.rect(0, 0, width, height);

  border.stroke({
    width: 1,
    color: AXIS_BORDER_COLOR,
  });

  layer.addChild(grid);

  layer.addChild(border);
}

/*
 * LABELS
 */
function drawAxesLabels(layer, xScale, yScale, innerWidth, innerHeight) {
  const xTicks = buildIntegerTicks(xScale.domain());

  const yTicks = buildIntegerTicks(yScale.domain());

  xTicks.forEach((tick) => {
    const label = new PixiText({
      text: tick.toString(),
      style: {
        fill: TICK_COLOR,
        fontSize: 11,
      },
    });

    label.x = xScale(tick) - label.width / 2;

    label.y = innerHeight + 6;

    layer.addChild(label);
  });

  yTicks.forEach((tick) => {
    const label = new PixiText({
      text: tick.toString(),
      style: {
        fill: TICK_COLOR,
        fontSize: 11,
      },
    });

    label.x = -label.width - 6;

    label.y = yScale(tick) - label.height / 2;

    layer.addChild(label);
  });
}

/*
 * POINTS
 */
function drawPoints(layer, points, xScale, yScale, imageCount, tooltipRef, cellSize = CELL_SIZE) {
  points.forEach((point) => {
    const x = xScale(point.scaledX);

    const y = yScale(point.scaledY);

    const positions = computeImagePositions(
      x,
      y,
      cellSize,
      cellSize,
      imageCount,
    );

    positions.forEach((position) => {
      const sprite = Sprite.from(point.image);

      sprite.x = position.x;

      sprite.y = position.y;

      sprite.width = position.width;

      sprite.height = position.height;

      sprite.eventMode = "static";

      sprite.cursor = "pointer";

      sprite.on("pointerenter", (event) => {
        showTooltip(tooltipRef.current, event, point);
      });

      sprite.on("pointerleave", () => {
        hideTooltip(tooltipRef.current);
      });

      layer.addChild(sprite);
    });
  });
}

/*
 * SMART TICKS
 */
function buildIntegerTicks([min, max]) {
  const range = max - min;

  let step;

  if (range <= 10) step = 1;
  else if (range <= 20) step = 2;
  else if (range <= 50) step = 5;
  else if (range <= 100) step = 10;
  else if (range <= 200) step = 20;
  else step = 50;

  const ticks = [];

  const start = Math.floor(min / step) * step;

  for (let value = start; value <= max; value += step) {
    ticks.push(Number(value.toFixed(2)));
  }

  return ticks;
}

/*
 * TOOLTIP
 */
function showTooltip(element, event, point) {
  if (!element) return;

  const global = event.global;

  element.style.display = "block";

  element.style.left = `${global.x + 15}px`;

  element.style.top = `${global.y - 10}px`;

  element.innerHTML = `
    <div class="tooltip-label">
      ${point.label}
    </div>

    <div class="tooltip-meta">
      <span>Interval: ${point.meta.interval}s</span>
      <span>Angle: ${point.meta.angle}°</span>
      <span>Quality: ${point.meta.quality}</span>
    </div>
  `;
}

function hideTooltip(element) {
  if (!element) return;

  element.style.display = "none";
}

export default PixiPlotter;
