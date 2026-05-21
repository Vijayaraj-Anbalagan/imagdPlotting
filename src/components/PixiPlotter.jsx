/* eslint-disable react-hooks/immutability */
import { useRef, useEffect, useState } from "react";

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

import PlotterControls from "./PlotterControls";

const GRID_COLOR = 0x333333;
const GRID_ALPHA = 0.5;

const AXIS_BORDER_COLOR = 0x555555;

const TICK_COLOR = "#999999";

const ZOOM_MIN = 0.5;
const ZOOM_MAX = 20;

function PixiPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (loadError) {
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

  const tooltipRef = useRef(null);

  const zoomBehaviorRef = useRef(null);

  const transformRef = useRef(d3.zoomIdentity);

  const [zoomLevel, setZoomLevel] = useState(1);

  const innerWidth =
    PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;

  const innerHeight =
    PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

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

      const axesLayer = new Container();

      axesLayer.x = PLOT_MARGIN.left;
      axesLayer.y = PLOT_MARGIN.top;

      app.stage.addChild(axesLayer);

      axesLayerRef.current = axesLayer;

      const contentLayer = new Container();

      contentLayer.x = PLOT_MARGIN.left;
      contentLayer.y = PLOT_MARGIN.top;

      app.stage.addChild(contentLayer);

      contentLayerRef.current = contentLayer;

      setupZoom();
    }

    init();

    return () => {
      cancelled = true;

      if (pixiAppRef.current) {
        pixiAppRef.current.destroy(true);
      }
    };
  }, []);

  /*
   * D3 ZOOM
   */
  const setupZoom = () => {
    const zoom = d3
      .zoom()
      .scaleExtent([ZOOM_MIN, ZOOM_MAX])
      .on("zoom", (event) => {
        transformRef.current = event.transform;

        setZoomLevel(event.transform.k);

        renderScene(event.transform);
      });

    zoomBehaviorRef.current = zoom;

    d3.select(containerRef.current).call(zoom);
  };

  /*
   * MAIN RENDER
   */
  const renderScene = async (transform = d3.zoomIdentity) => {
    if (!axesLayerRef.current) return;

    if (!contentLayerRef.current) return;

    const axesLayer = axesLayerRef.current;

    const contentLayer = contentLayerRef.current;

    axesLayer.removeChildren();

    contentLayer.removeChildren();

    const scaledPoints = plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * (xGap / 10),
      scaledY: point.y * (yGap / 10),
    }));

    const xExtent = d3.extent(scaledPoints, (d) => d.scaledX);

    const yExtent = d3.extent(scaledPoints, (d) => d.scaledY);

    const xScale = d3.scaleLinear().domain(xExtent).range([0, innerWidth]);

    const yScale = d3.scaleLinear().domain(yExtent).range([innerHeight, 0]);

    /*
     * RESCALED ZOOM SCALES
     */
    const zoomedXScale = transform.rescaleX(xScale);

    const zoomedYScale = transform.rescaleY(yScale);

    /*
     * DYNAMIC TICKS
     */
    const xTicks = zoomedXScale.ticks(Math.max(5, transform.k * 8));

    const yTicks = zoomedYScale.ticks(Math.max(5, transform.k * 8));

    drawGrid(
      axesLayer,
      zoomedXScale,
      zoomedYScale,
      xTicks,
      yTicks,
      innerWidth,
      innerHeight,
    );

    drawAxesLabels(
      axesLayer,
      zoomedXScale,
      zoomedYScale,
      xTicks,
      yTicks,
      innerHeight,
    );

    const uniqueImages = [...new Set(plotterPoints.map((p) => p.image))];

    await Assets.load(uniqueImages);

    drawPoints(
      contentLayer,
      scaledPoints,
      zoomedXScale,
      zoomedYScale,
      imageCount,
      tooltipRef,
    );
  };

  /*
   * INITIAL DRAW
   */
  useEffect(() => {
    if (!plotterPoints.length) return;

    renderScene(transformRef.current);
  }, [plotterPoints, imageCount, xGap, yGap]);

  /*
   * CONTROLS
   */
  const zoomIn = () => {
    d3.select(containerRef.current)
      .transition()
      .call(zoomBehaviorRef.current.scaleBy, 1.5);
  };

  const zoomOut = () => {
    d3.select(containerRef.current)
      .transition()
      .call(zoomBehaviorRef.current.scaleBy, 0.7);
  };

  const reset = () => {
    d3.select(containerRef.current)
      .transition()
      .call(zoomBehaviorRef.current.transform, d3.zoomIdentity);
  };

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        zoomLevel={zoomLevel}
        onZoomIn={zoomIn}
        onZoomOut={zoomOut}
        onReset={reset}
      />

      <div
        ref={containerRef}
        style={{
          cursor: "grab",
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
function drawGrid(layer, xScale, yScale, xTicks, yTicks, width, height) {
  const grid = new Graphics();

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
function drawAxesLabels(layer, xScale, yScale, xTicks, yTicks, innerHeight) {
  xTicks.forEach((tick) => {
    const label = new PixiText({
      text: tick.toFixed(1),
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
      text: tick.toFixed(1),
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
function drawPoints(layer, points, xScale, yScale, imageCount, tooltipRef) {
  points.forEach((point) => {
    const x = xScale(point.scaledX);

    const y = yScale(point.scaledY);

    const positions = computeImagePositions(
      x,
      y,
      CELL_SIZE,
      CELL_SIZE,
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
 * TOOLTIP
 */
function showTooltip(element, event, point) {
  if (!element) return;

  const global = event.global;

  element.style.display = "block";

  element.style.left = `${global.x + 15}px`;

  element.style.top = `${global.y - 10}px`;

  element.innerHTML = `
    <div>${point.label}</div>
  `;
}

function hideTooltip(element) {
  if (!element) return;

  element.style.display = "none";
}

export default PixiPlotter;
