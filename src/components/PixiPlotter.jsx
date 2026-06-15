import { useRef, useEffect, useState, useCallback, useMemo } from "react";

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
import {
  getChartViewport,
  updateChartViewport,
} from "../lib/chartViewportStore";
import PlotterControls from "./PlotterControls";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
import { generateSyntheticPoints } from "../lib/syntheticDataGenerator";
import { useInteractionMode } from "../lib/interactionMode";

const GRID_COLOR = 0x333333;
const GRID_ALPHA = 0.45;
const AXIS_BORDER_COLOR = 0x555555;
const TICK_COLOR = "#999999";

const ZOOM_MIN = 1;
const MIN_ZOOM_SCALE = 1.001;
const ZOOM_MAX = 100000;
const ZOOM_STEP = 1.5;

/*
 * CLAMP PAN
 */
function clampPan(xOffset, yOffset, scaleFactor, width, height) {
  if (scaleFactor <= MIN_ZOOM_SCALE) {
    return { x: 0, y: 0 };
  }

  const scaledWidth = width * scaleFactor;
  const scaledHeight = height * scaleFactor;

  let minOffsetLimitX = width - scaledWidth;
  let minOffsetLimitY = height - scaledHeight;

  if (scaledWidth < width) {
    minOffsetLimitX = (width - scaledWidth) / 2;
  }

  if (scaledHeight < height) {
    minOffsetLimitY = (height - scaledHeight) / 2;
  }

  return {
    x: Math.min(0, Math.max(minOffsetLimitX, xOffset)),
    y: Math.min(0, Math.max(minOffsetLimitY, yOffset)),
  };
}

/*
 * COMPUTE VIEWPORT SCALES
 */
function computeViewportScales(
  baseScaleX,
  baseScaleY,
  scaleFactor,
  xOffset,
  yOffset,
  width,
  height,
) {
  const leftPixel = -xOffset / scaleFactor;
  const rightPixel = (width - xOffset) / scaleFactor;

  const topPixel = -yOffset / scaleFactor;
  const bottomPixel = (height - yOffset) / scaleFactor;

  const visibleXMin = baseScaleX.invert(leftPixel);
  const visibleXMax = baseScaleX.invert(rightPixel);

  const visibleYMax = baseScaleY.invert(topPixel);
  const visibleYMin = baseScaleY.invert(bottomPixel);

  const dynamicXScale = d3
    .scaleLinear()
    .domain([visibleXMin, visibleXMax])
    .range([0, width]);

  const dynamicYScale = d3
    .scaleLinear()
    .domain([visibleYMin, visibleYMax])
    .range([height, 0]);

  return {
    dynamicXScale,
    dynamicYScale,
  };
}

/*
 * INITIALIZE PIXI APP
 */
async function initializePixiApp(containerElement, innerWidth, innerHeight) {
  const app = new PixiApp();

  await app.init({
    width: PLOT_DIMENSIONS.width,
    height: PLOT_DIMENSIONS.height,
    background: 0x16213e,
    antialias: true,
  });

  containerElement.appendChild(app.canvas);

  const axesLayer = new Container();
  axesLayer.x = PLOT_MARGIN.left;
  axesLayer.y = PLOT_MARGIN.top;
  app.stage.addChild(axesLayer);

  const contentLayer = new Container();
  contentLayer.x = PLOT_MARGIN.left;
  contentLayer.y = PLOT_MARGIN.top;
  app.stage.addChild(contentLayer);

  const mask = new Graphics();
  mask.rect(PLOT_MARGIN.left, PLOT_MARGIN.top, innerWidth, innerHeight);
  mask.fill(0xffffff);
  app.stage.addChild(mask);
  contentLayer.mask = mask;

  const brushGraphics = new Graphics();
  app.stage.addChild(brushGraphics);

  return {
    app,
    axesLayer,
    contentLayer,
    mask,
    brushGraphics,
  };
}

/*
 * APPLY BRUSH ZOOM TO TRANSFORM
 */
function applyBrushZoom(
  { startX, startY, width, height },
  transformRef,
  innerWidth,
  innerHeight,
) {
  const currentScale = transformRef.current.scale;
  const currentX = transformRef.current.x;
  const currentY = transformRef.current.y;

  const contentX0 = (startX - currentX) / currentScale;
  const contentY0 = (startY - currentY) / currentScale;
  const contentWidth = width / currentScale;
  const contentHeight = height / currentScale;

  const scaleFactorX = innerWidth / contentWidth;
  const scaleFactorY = innerHeight / contentHeight;
  const nextScale = Math.max(
    ZOOM_MIN,
    Math.min(Math.min(scaleFactorX, scaleFactorY), ZOOM_MAX),
  );

  const offsetCoordinateX = -contentX0 * nextScale;
  const offsetCoordinateY = -contentY0 * nextScale;

  const clamped = clampPan(
    offsetCoordinateX,
    offsetCoordinateY,
    nextScale,
    innerWidth,
    innerHeight,
  );
  return {
    scale: nextScale,
    x: clamped.x,
    y: clamped.y,
  };
}

/*
 * DRAW BRUSH OVERLAY
 */
function drawBrushOverlay(graphics, startX, startY, width, height) {
  if (!graphics) return;
  graphics.clear();
  if (width > 0 && height > 0) {
    graphics.rect(
      PLOT_MARGIN.left + startX,
      PLOT_MARGIN.top + startY,
      width,
      height,
    );
    graphics.fill({ color: 0x4493ff, alpha: 0.15 });
    graphics.stroke({ width: 1.5, color: 0x4493ff });
  }
}

function PixiPlotter({ chartId, imageCount, xGap, yGap, dataPointCount }) {
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
      chartId={chartId}
    />
  );
}

function PixiCanvas({ plotterPoints, imageCount, xGap, yGap, chartId }) {
  const containerRef = useRef(null);
  const pixiAppRef = useRef(null);
  const axesLayerRef = useRef(null);
  const contentLayerRef = useRef(null);
  const maskRef = useRef(null);
  const tooltipRef = useRef(null);
  const brushGraphicsRef = useRef(null);
  const brushStartRef = useRef(null);
  const renderFrameRef = useRef(null);
  const loadedImageUrlsRef = useRef([]);
  const baseScalesRef = useRef({
    xScale: null,
    yScale: null,
  });

  const savedViewport = getChartViewport(chartId);

  const initialScale = Math.max(savedViewport.scale || 1, ZOOM_MIN);

  const transformRef = useRef(
    initialScale <= MIN_ZOOM_SCALE
      ? {
          scale: 1,
          x: 0,
          y: 0,
        }
      : {
          scale: initialScale,
          x: savedViewport.translateX || 0,
          y: savedViewport.translateY || 0,
        },
  );

  const dragRef = useRef({
    dragging: false,
    startX: 0,
    startY: 0,
  });

  const [zoomLevel, setZoomLevel] = useState(savedViewport.scale);
  const [isDragging, setIsDragging] = useState(false);

  const { interactionMode, setInteractionMode, isPanMode, isZoomMode } =
    useInteractionMode();

  const innerWidth =
    PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;
  const innerHeight =
    PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

  /*
   * GET VIEWPORT SCALES
   */
  const getViewportScales = useCallback(() => {
    const baseScaleX = baseScalesRef.current.xScale;
    const baseScaleY = baseScalesRef.current.yScale;

    if (!baseScaleX || !baseScaleY) {
      return null;
    }

    const { scale, x, y } = transformRef.current;

    return computeViewportScales(
      baseScaleX,
      baseScaleY,
      scale,
      x,
      y,
      innerWidth,
      innerHeight,
    );
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
   * APPLY TRANSFORM — redraws points from current viewport scales (deep zoom).
   * Content layer is always identity; no matrix upscaling of sprites.
   */
  const applyTransform = useCallback(() => {
    if (!contentLayerRef.current) return;

    const viewportScales = getViewportScales();
    if (!viewportScales) return;

    const { dynamicXScale, dynamicYScale } = viewportScales;
    const { scale } = transformRef.current;

    const contentLayer = contentLayerRef.current;
    contentLayer.removeChildren();
    contentLayer.scale.set(1);
    contentLayer.x = PLOT_MARGIN.left;
    contentLayer.y = PLOT_MARGIN.top;

    const baseScaleX = baseScalesRef.current.xScale;
    const baseScaleY = baseScalesRef.current.yScale;
    if (!baseScaleX || !baseScaleY) return;

    const scaledPoints = plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * (xGap / 10),
      scaledY: point.y * (yGap / 10),
    }));

    /* Same pattern as Recharts: base cell size × current zoom scale. */
    const adaptiveCellSizeBase = computeAdaptiveCellSize(
      scaledPoints,
      (val) => baseScaleX(val),
      (val) => baseScaleY(val),
    );
    const currentCellSize = adaptiveCellSizeBase * scale;

    /* Screen-space culling. */
    const xScreenFn = (val) => baseScaleX(val) * scale + transformRef.current.x;
    const yScreenFn = (val) => baseScaleY(val) * scale + transformRef.current.y;
    const visiblePoints = filterVisiblePoints(
      scaledPoints,
      xScreenFn,
      yScreenFn,
      innerWidth,
      innerHeight,
      currentCellSize,
    );

    const effectiveImageCount = computeEffectiveImageCount(
      currentCellSize,
      imageCount,
    );

    drawPoints(
      contentLayer,
      visiblePoints,
      dynamicXScale,
      dynamicYScale,
      effectiveImageCount,
      tooltipRef,
      currentCellSize,
    );

    renderAxes();
  }, [
    getViewportScales,
    renderAxes,
    plotterPoints,
    xGap,
    yGap,
    innerWidth,
    innerHeight,
    imageCount,
  ]);

  /*
   * MAIN RENDER — loads assets then delegates to applyTransform for drawing.
   */
  const renderScene = useCallback(async () => {
    if (!axesLayerRef.current || !contentLayerRef.current) return;

    const scaledPoints = plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * (xGap / 10),
      scaledY: point.y * (yGap / 10),
    }));

    const xDomainExtent = d3.extent(scaledPoints, (point) => point.scaledX);
    const yDomainExtent = d3.extent(scaledPoints, (point) => point.scaledY);

    const baseScaleX = d3
      .scaleLinear()
      .domain([xDomainExtent[0] - 5, xDomainExtent[1] + 5])
      .range([0, innerWidth]);

    const baseScaleY = d3
      .scaleLinear()
      .domain([yDomainExtent[0] - 5, yDomainExtent[1] + 5])
      .range([innerHeight, 0]);

    baseScalesRef.current = { xScale: baseScaleX, yScale: baseScaleY };
    renderAxes();

    const uniqueImageUrls = [
      ...new Set(plotterPoints.map((point) => point.image).filter(Boolean)),
    ];

    loadedImageUrlsRef.current = uniqueImageUrls;

    await Assets.load(uniqueImageUrls);

    applyTransform();
  }, [
    plotterPoints,
    xGap,
    yGap,
    innerWidth,
    innerHeight,
    renderAxes,
    applyTransform,
  ]);

  /*
   * ZOOM
   */
  const zoom = useCallback(
    (direction, interactionSource = "button") => {
      const currentScale = transformRef.current.scale;

      if (direction === "out" && currentScale <= MIN_ZOOM_SCALE) {
        return;
      }

      const nextScale =
        direction === "in"
          ? Math.min(currentScale * ZOOM_STEP, ZOOM_MAX)
          : Math.max(currentScale / ZOOM_STEP, ZOOM_MIN);

      if (nextScale === currentScale) {
        return;
      }

      logChartInteractionEvent({
        interactionType: direction === "in" ? "ZOOM_IN" : "ZOOM_OUT",
        visualizationLibrary: "Pixi",
        interactionSource: interactionSource,
      });

      const plotCenterX = innerWidth / 2;
      const plotCenterY = innerHeight / 2;

      const nextTransformOffsetX =
        transformRef.current.x - plotCenterX * (nextScale / currentScale - 1);

      const nextTransformOffsetY =
        transformRef.current.y - plotCenterY * (nextScale / currentScale - 1);

      const clampedTransformOffset = clampPan(
        nextTransformOffsetX,
        nextTransformOffsetY,
        nextScale,
        innerWidth,
        innerHeight,
      );

      transformRef.current = {
        scale: nextScale,
        x: clampedTransformOffset.x,
        y: clampedTransformOffset.y,
      };

      updateChartViewport(chartId, {
        scale: nextScale,
        translateX: clampedTransformOffset.x,
        translateY: clampedTransformOffset.y,
      });

      setZoomLevel(nextScale);
      applyTransform();
    },
    [innerWidth, innerHeight, chartId, applyTransform],
  );

  /*
   * RESET
   */
  const reset = useCallback(
    (interactionSource) => {
      const computedSource =
        interactionSource && typeof interactionSource === "string"
          ? interactionSource
          : "button";

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
      updateChartViewport(chartId, {
        scale: 1,
        translateX: 0,
        translateY: 0,
      });

      setZoomLevel(1);
      applyTransform();
    },
    [applyTransform, chartId],
  );

  /*
   * CANVAS INTERACTIONS
   */
  const onCanvasMouseDown = useCallback(
    (event) => {
      if (isPanMode) {
        if (transformRef.current.scale <= MIN_ZOOM_SCALE) {
          return;
        }
        logChartInteractionEvent({
          interactionType: "PAN",
          visualizationLibrary: "Pixi",
          interactionSource: "drag",
        });
        setIsDragging(true);
        // eslint-disable-next-line react-hooks/immutability
        const dragState = ensureDragRef();
        dragState.dragging = true;
        dragState.startX = event.clientX - transformRef.current.x;
        dragState.startY = event.clientY - transformRef.current.y;
      } else if (isZoomMode) {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const localX = event.clientX - rect.left - PLOT_MARGIN.left;
        const localY = event.clientY - rect.top - PLOT_MARGIN.top;

        if (
          localX >= 0 &&
          localX <= innerWidth &&
          localY >= 0 &&
          localY <= innerHeight
        ) {
          brushStartRef.current = { x: localX, y: localY };
        }
      }
    },
    [isPanMode, isZoomMode, innerWidth, innerHeight],
  );

  const onCanvasMouseMove = useCallback(
    (event) => {
      const dragState = ensureDragRef();
      if (dragState.dragging) {
        if (transformRef.current.scale <= MIN_ZOOM_SCALE) {
          dragState.dragging = false;
          setIsDragging(false);
          transformRef.current.x = 0;
          transformRef.current.y = 0;

          updateChartViewport(chartId, {
            scale: 1,
            translateX: 0,
            translateY: 0,
          });

          applyTransform();
          return;
        }

        const nextX = event.clientX - dragState.startX;
        const nextY = event.clientY - dragState.startY;
        const clamped = clampPan(
          nextX,
          nextY,
          transformRef.current.scale,
          innerWidth,
          innerHeight,
        );

        transformRef.current.x = clamped.x;
        transformRef.current.y = clamped.y;

        updateChartViewport(chartId, {
          scale: transformRef.current.scale,
          translateX: clamped.x,
          translateY: clamped.y,
        });

        applyTransform();
        return;
      }

      if (brushStartRef.current) {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const localX = Math.max(
          0,
          Math.min(innerWidth, event.clientX - rect.left - PLOT_MARGIN.left),
        );
        const localY = Math.max(
          0,
          Math.min(innerHeight, event.clientY - rect.top - PLOT_MARGIN.top),
        );

        const brushStartX = Math.min(brushStartRef.current.x, localX);
        const brushStartY = Math.min(brushStartRef.current.y, localY);
        const brushWidth = Math.abs(localX - brushStartRef.current.x);
        const brushHeight = Math.abs(localY - brushStartRef.current.y);

        drawBrushOverlay(
          brushGraphicsRef.current,
          brushStartX,
          brushStartY,
          brushWidth,
          brushHeight,
        );
      }
    },
    [innerWidth, innerHeight, chartId, applyTransform],
  );

  const onCanvasMouseUp = useCallback(
    (event) => {
      setIsDragging(false);
      const dragState = ensureDragRef();
      if (dragState.dragging) {
        dragState.dragging = false;

        if (transformRef.current.scale <= MIN_ZOOM_SCALE) {
          transformRef.current.scale = 1;
          transformRef.current.x = 0;
          transformRef.current.y = 0;
          setZoomLevel(1);

          updateChartViewport(chartId, {
            scale: 1,
            translateX: 0,
            translateY: 0,
          });

          applyTransform();
          return;
        }
        updateChartViewport(chartId, {
          scale: transformRef.current.scale,
          translateX: transformRef.current.x,
          translateY: transformRef.current.y,
        });
        return;
      }

      if (brushStartRef.current) {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const localX = Math.max(
          0,
          Math.min(innerWidth, event.clientX - rect.left - PLOT_MARGIN.left),
        );
        const localY = Math.max(
          0,
          Math.min(innerHeight, event.clientY - rect.top - PLOT_MARGIN.top),
        );

        const brushStartX = Math.min(brushStartRef.current.x, localX);
        const brushStartY = Math.min(brushStartRef.current.y, localY);
        const brushWidth = Math.abs(localX - brushStartRef.current.x);
        const brushHeight = Math.abs(localY - brushStartRef.current.y);

        if (brushWidth >= 5 && brushHeight >= 5) {
          logChartInteractionEvent({
            interactionType: "ZOOM_IN",
            visualizationLibrary: "Pixi",
            interactionSource: "brush",
          });

          const nextTransform = applyBrushZoom(
            {
              startX: brushStartX,
              startY: brushStartY,
              width: brushWidth,
              height: brushHeight,
            },
            transformRef,
            innerWidth,
            innerHeight,
          );

          transformRef.current = {
            scale: nextTransform.scale,
            x: nextTransform.x,
            y: nextTransform.y,
          };

          updateChartViewport(chartId, {
            scale: nextTransform.scale,
            translateX: nextTransform.x,
            translateY: nextTransform.y,
          });

          setZoomLevel(nextTransform.scale);
          applyTransform();
        }

        if (brushGraphicsRef.current) {
          brushGraphicsRef.current.clear();
        }
        brushStartRef.current = null;
      }
    },
    [innerWidth, innerHeight, chartId, applyTransform],
  );

  /* Cancel in-progress brush when switching to pan mode */
  useEffect(() => {
    if (isPanMode) {
      brushStartRef.current = null;
      if (brushGraphicsRef.current) {
        brushGraphicsRef.current.clear();
      }
    }
  }, [isPanMode]);

  const ensureDragRef = () => {
    if (!dragRef.current) {
      dragRef.current = {
        dragging: false,
        startX: 0,
        startY: 0,
      };
    }

    return dragRef.current;
  };
  /*
   * INITIALIZE PIXI
   */
  useEffect(() => {
    let isComponentUnmounted = false;

    if (!containerRef.current) return;

    initializePixiApp(containerRef.current, innerWidth, innerHeight)
      .then(({ app, axesLayer, contentLayer, mask, brushGraphics }) => {
        if (isComponentUnmounted) {
          try {
            app.destroy(true, {
              children: true,
              texture: false,
              textureSource: false,
            });
          } catch (err) {
            console.error(
              "Error destroying Pixi App during init cancellation:",
              err,
            );
          }
          return;
        }

        pixiAppRef.current = app;
        axesLayerRef.current = axesLayer;
        contentLayerRef.current = contentLayer;
        maskRef.current = mask;
        brushGraphicsRef.current = brushGraphics;

        renderScene().then(() => {
          if (isComponentUnmounted) return;

          renderFrameRef.current = requestAnimationFrame(() => {
            if (!isComponentUnmounted) {
              applyTransform();
            }
          });
        });
      })
      .catch((err) => {
        if (!isComponentUnmounted) {
          console.error("Failed to initialize Pixi:", err);
        }
      });

    return () => {
      isComponentUnmounted = true;

      /**
       * Persist lightweight interaction state.
       * Do this before destroying Pixi objects.
       */
      if (chartId && transformRef.current) {
        updateChartViewport(chartId, {
          scale: transformRef.current.scale,
          translateX: transformRef.current.x,
          translateY: transformRef.current.y,
        });
      }

      try {
        if (renderFrameRef.current) {
          cancelAnimationFrame(renderFrameRef.current);
          renderFrameRef.current = null;
        }

        brushStartRef.current = null;
        dragRef.current = {
          dragging: false,
          startX: 0,
          startY: 0,
        };

        baseScalesRef.current = {
          xScale: null,
          yScale: null,
        };

        brushGraphicsRef.current?.clear?.();
        brushGraphicsRef.current?.destroy?.({
          children: true,
          texture: false,
          textureSource: false,
        });

        axesLayerRef.current?.removeChildren?.();
        axesLayerRef.current?.destroy?.({
          children: true,
          texture: false,
          textureSource: false,
        });

        contentLayerRef.current?.removeChildren?.();
        contentLayerRef.current?.destroy?.({
          children: true,
          texture: false,
          textureSource: false,
        });

        maskRef.current?.clear?.();
        maskRef.current?.destroy?.({
          children: true,
          texture: false,
          textureSource: false,
        });

        pixiAppRef.current?.destroy?.(true, {
          children: true,
          texture: false,
          textureSource: false,
        });

        if (containerRef.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          containerRef.current.replaceChildren();
        }

        pixiAppRef.current = null;
        axesLayerRef.current = null;
        contentLayerRef.current = null;
        maskRef.current = null;
        brushGraphicsRef.current = null;
        tooltipRef.current = null;
        loadedImageUrlsRef.current = [];
      } catch (error) {
        console.warn("Pixi cleanup failed", error);
      }
    };
  }, [innerWidth, innerHeight, renderScene, applyTransform, chartId]);

  /*
   * RERENDER DATA CHANGES
   */
  useEffect(() => {
    if (!plotterPoints.length) return;
    renderScene();
  }, [plotterPoints, imageCount, xGap, yGap, renderScene]);

  /*
   * ATTACH NON-PASSIVE WHEEL LISTENER
   */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onCanvasWheelScroll = (event) => {
      event.preventDefault();

      const isZoomOut = event.deltaY > 0;

      if (isZoomOut && transformRef.current.scale <= MIN_ZOOM_SCALE) {
        return;
      }

      if (isZoomOut) {
        zoom("out", "wheel");
      } else {
        zoom("in", "wheel");
      }
    };

    container.addEventListener("wheel", onCanvasWheelScroll, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", onCanvasWheelScroll);
    };
  }, [zoom]);

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        zoomLevel={zoomLevel}
        onZoomIn={() => zoom("in")}
        onZoomOut={() => zoom("out")}
        onReset={() => reset("button")}
        interactionMode={interactionMode}
        onModeChange={setInteractionMode}
      />

      <div
        ref={containerRef}
        onMouseDown={onCanvasMouseDown}
        onMouseMove={onCanvasMouseMove}
        onMouseUp={onCanvasMouseUp}
        onMouseLeave={onCanvasMouseUp}
        onDoubleClick={() => reset("double_click")}
        style={{
          cursor: isPanMode ? (isDragging ? "grabbing" : "grab") : "crosshair",
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
function drawGrid(layer, scaleX, scaleY, width, height) {
  const grid = new Graphics();

  const xTicks = buildIntegerTicks(scaleX.domain());
  const yTicks = buildIntegerTicks(scaleY.domain());

  xTicks.forEach((tick) => {
    const x = scaleX(tick);
    grid.moveTo(x, 0);
    grid.lineTo(x, height);
  });

  yTicks.forEach((tick) => {
    const y = scaleY(tick);
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
function drawAxesLabels(layer, scaleX, scaleY, innerWidth, innerHeight) {
  const xTicks = buildIntegerTicks(scaleX.domain());
  const yTicks = buildIntegerTicks(scaleY.domain());

  xTicks.forEach((tick) => {
    const label = new PixiText({
      text: tick.toString(),
      style: {
        fill: TICK_COLOR,
        fontSize: 11,
      },
    });

    label.x = scaleX(tick) - label.width / 2;
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
    label.y = scaleY(tick) - label.height / 2;
    layer.addChild(label);
  });
}

/*
 * POINTS
 */
function drawPoints(
  layer,
  points,
  scaleX,
  scaleY,
  imageCount,
  tooltipRef,
  cellSize = CELL_SIZE,
) {
  points.forEach((point) => {
    const x = scaleX(point.scaledX);
    const y = scaleY(point.scaledY);

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
