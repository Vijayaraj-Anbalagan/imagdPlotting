import { useState, useMemo, useRef, useEffect, useCallback } from "react";

import DeckGL from "@deck.gl/react";
import { OrthographicView } from "@deck.gl/core";
import { IconLayer } from "@deck.gl/layers";

import * as d3 from "d3";

import { usePlotterData } from "../lib/plotterData";
import { PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";

import PlotterControls from "./PlotterControls";

const VIEW = new OrthographicView({
  id: "orthographic-view",
  flipY: true,
});

const IMAGE_SIZE = 56;

const ZOOM_MIN = 0;
const ZOOM_MAX = 4;

function DeckGLPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (loadError) {
    return <div>Error: {loadError}</div>;
  }

  return (
    <DeckGLCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

function DeckGLCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const containerRef = useRef(null);

  const dragRef = useRef({
    dragging: false,
    startX: 0,
    startY: 0,
  });

  const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);

  const [viewState, setViewState] = useState({
    zoom: 0,
    target: [0, 0, 0],
  });

  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const rect = entries[0];

      if (rect) {
        setContainerWidth(rect.contentRect.width);
      }
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const height = PLOT_DIMENSIONS.height;

  const innerWidth = containerWidth - PLOT_MARGIN.left - PLOT_MARGIN.right;

  const innerHeight = height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

  const xExtent = useMemo(() => {
    return d3.extent(plotterPoints, (d) => d.x);
  }, [plotterPoints]);

  const yExtent = useMemo(() => {
    return d3.extent(plotterPoints, (d) => d.y);
  }, [plotterPoints]);

  const transformedXScale = useMemo(() => {
    const scale = Math.pow(2, viewState.zoom);

    return d3
      .scaleLinear()
      .domain(xExtent)
      .range([viewState.target[0], innerWidth * scale + viewState.target[0]]);
  }, [xExtent, viewState, innerWidth]);

  const transformedYScale = useMemo(() => {
    const scale = Math.pow(2, viewState.zoom);

    return d3
      .scaleLinear()
      .domain(yExtent)
      .range([innerHeight * scale + viewState.target[1], viewState.target[1]]);
  }, [yExtent, viewState, innerHeight]);

  const xTicks = useMemo(() => {
    return transformedXScale.ticks(8);
  }, [transformedXScale]);

  const yTicks = useMemo(() => {
    return transformedYScale.ticks(6);
  }, [transformedYScale]);

  const deckData = useMemo(() => {
    const items = [];

    const scale = Math.pow(2, viewState.zoom);

    plotterPoints.forEach((point) => {
      const cx = transformedXScale(point.x);

      const cy = transformedYScale(point.y);

      const positions = computeGrid(
        cx,
        cy,
        imageCount,
        (IMAGE_SIZE + xGap) * scale,
        (IMAGE_SIZE + yGap) * scale,
      );

      positions.forEach((pos, index) => {
        if (
          pos.x < -IMAGE_SIZE ||
          pos.y < -IMAGE_SIZE ||
          pos.x > innerWidth + IMAGE_SIZE ||
          pos.y > innerHeight + IMAGE_SIZE
        ) {
          return;
        }

        items.push({
          id: `${point.id}-${index}`,
          x: pos.x,
          y: pos.y,
          image: point.image,
          point,
          size: IMAGE_SIZE * scale,
        });
      });
    });

    return items;
  }, [
    plotterPoints,
    transformedXScale,
    transformedYScale,
    imageCount,
    xGap,
    yGap,
    innerWidth,
    innerHeight,
    viewState,
  ]);

  const iconLayer = useMemo(() => {
    return new IconLayer({
      id: "icon-layer",

      data: deckData,

      pickable: true,

      billboard: false,

      sizeUnits: "pixels",

      getPosition: (d) => [d.x, d.y],

      getSize: (d) => d.size,

      getIcon: (d) => ({
        url: d.image,
        width: 128,
        height: 128,
        anchorY: 64,
      }),

      onHover: ({ object, x, y }) => {
        if (object) {
          setHovered({
            x,
            y,
            point: object.point,
          });
        } else {
          setHovered(null);
        }
      },
    });
  }, [deckData]);

  const zoom = useCallback((delta) => {
    setViewState((prev) => ({
      ...prev,
      zoom: clamp(prev.zoom + delta, ZOOM_MIN, ZOOM_MAX),
    }));
  }, []);

  const handleWheel = useCallback(
    (event) => {
      event.preventDefault();

      zoom(event.deltaY > 0 ? -0.15 : 0.15);
    },
    [zoom],
  );

  const handlePointerDown = useCallback((event) => {
    dragRef.current = {
      dragging: true,
      startX: event.clientX,
      startY: event.clientY,
    };
  }, []);

  const handlePointerMove = useCallback((event) => {
    if (!dragRef.current.dragging) {
      return;
    }

    const dx = event.clientX - dragRef.current.startX;

    const dy = event.clientY - dragRef.current.startY;

    dragRef.current.startX = event.clientX;
    dragRef.current.startY = event.clientY;

    setViewState((prev) => ({
      ...prev,
      target: [prev.target[0] + dx, prev.target[1] + dy, 0],
    }));
  }, []);

  const handlePointerUp = useCallback(() => {
    dragRef.current.dragging = false;
  }, []);

  const handleReset = useCallback(() => {
    setViewState({
      zoom: 0,
      target: [0, 0, 0],
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      <PlotterControls
        zoomLevel={viewState.zoom}
        onZoomIn={() => zoom(0.25)}
        onZoomOut={() => zoom(-0.25)}
        onReset={handleReset}
      />

      <div
        style={{
          width: "100%",
          height,
          position: "relative",
          background: "#16213e",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: PLOT_MARGIN.left,
            top: PLOT_MARGIN.top,
            width: innerWidth,
            height: innerHeight,
            overflow: "hidden",
            border: "1px solid #555",
          }}
        >
          <DeckGL
            views={VIEW}
            controller={false}
            layers={[iconLayer]}
            viewState={{
              target: [0, 0, 0],
              zoom: 0,
            }}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        <svg
          width={containerWidth}
          height={height}
          style={{
            position: "absolute",
            inset: 0,
            touchAction: "none",
            userSelect: "none",
          }}
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <defs>
            <clipPath id="plot-clip">
              <rect
                x={PLOT_MARGIN.left}
                y={PLOT_MARGIN.top}
                width={innerWidth}
                height={innerHeight}
              />
            </clipPath>
          </defs>

          <rect width={containerWidth} height={height} fill="#16213e" />

          <g
            transform={`
              translate(
                ${PLOT_MARGIN.left},
                ${PLOT_MARGIN.top}
              )
            `}
          >
            <AxisGrid
              xTicks={xTicks}
              yTicks={yTicks}
              xScale={transformedXScale}
              yScale={transformedYScale}
              innerWidth={innerWidth}
              innerHeight={innerHeight}
            />

            <AxisLabels
              xTicks={xTicks}
              yTicks={yTicks}
              xScale={transformedXScale}
              yScale={transformedYScale}
              innerHeight={innerHeight}
            />

            <rect
              x={0}
              y={0}
              width={innerWidth}
              height={innerHeight}
              fill="none"
              stroke="#555"
            />
          </g>
        </svg>

        {hovered && (
          <div
            className="plotter-tooltip"
            style={{
              position: "fixed",
              left: hovered.x + 10,
              top: hovered.y - 10,
              pointerEvents: "none",
              zIndex: 1000,
            }}
          >
            <div className="tooltip-label">{hovered.point.label}</div>

            <div className="tooltip-meta">
              <span>
                Interval:
                {hovered.point.meta.interval}s
              </span>

              <span>
                Angle:
                {hovered.point.meta.angle}°
              </span>

              <span>
                Quality:
                {hovered.point.meta.quality}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AxisGrid({ xTicks, yTicks, xScale, yScale, innerWidth, innerHeight }) {
  return (
    <g>
      {xTicks.map((tick) => (
        <line
          key={`x-${tick}`}
          x1={xScale(tick)}
          y1={0}
          x2={xScale(tick)}
          y2={innerHeight}
          stroke="#2a3355"
        />
      ))}

      {yTicks.map((tick) => (
        <line
          key={`y-${tick}`}
          x1={0}
          y1={yScale(tick)}
          x2={innerWidth}
          y2={yScale(tick)}
          stroke="#2a3355"
        />
      ))}
    </g>
  );
}

function AxisLabels({ xTicks, yTicks, xScale, yScale, innerHeight }) {
  return (
    <g>
      {xTicks.map((tick) => (
        <text
          key={`xt-${tick}`}
          x={xScale(tick)}
          y={innerHeight + 18}
          fill="#999"
          fontSize={11}
          textAnchor="middle"
        >
          {tick.toFixed(1)}
        </text>
      ))}

      {yTicks.map((tick) => (
        <text
          key={`yt-${tick}`}
          x={-10}
          y={yScale(tick)}
          fill="#999"
          fontSize={11}
          textAnchor="end"
          dominantBaseline="middle"
        >
          {tick.toFixed(1)}
        </text>
      ))}
    </g>
  );
}

function computeGrid(centerX, centerY, imageCount, spacingX, spacingY) {
  const configs = {
    1: { rows: 1, cols: 1 },
    2: { rows: 1, cols: 2 },
    4: { rows: 2, cols: 2 },
    8: { rows: 2, cols: 4 },
  };

  const config = configs[imageCount] || configs[1];

  const positions = [];

  for (let row = 0; row < config.rows; row++) {
    for (let col = 0; col < config.cols; col++) {
      positions.push({
        x: centerX + (col - (config.cols - 1) / 2) * spacingX,

        y: centerY + (row - (config.rows - 1) / 2) * spacingY,
      });
    }
  }

  return positions;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export default DeckGLPlotter;
