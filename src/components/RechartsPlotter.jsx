/* eslint-disable react-hooks/purity */
import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import * as d3 from "d3";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import PlotterControls from "./PlotterControls";

const ZOOM_STEP = 1.5;
const ZOOM_MIN = 0.35;
const ZOOM_MAX = 14;

const BASE_IMAGE_GAP_X = 10;
const BASE_IMAGE_GAP_Y = 10;

function RechartsPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <RechartsCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

function RechartsCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const dragRef = useRef({
    dragging: false,
    pointerId: null,
    startClientX: 0,
    startClientY: 0,
    startTransform: { scale: 1, x: 0, y: 0 },
  });

  const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);
  const [transform, setTransform] = useState({ scale: 1, x: 0, y: 0 });
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setContainerWidth(entry.contentRect.width);
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const height = PLOT_DIMENSIONS.height;
  const innerWidth = Math.max(
    containerWidth - PLOT_MARGIN.left - PLOT_MARGIN.right,
    320,
  );
  const innerHeight = Math.max(
    height - PLOT_MARGIN.top - PLOT_MARGIN.bottom,
    240,
  );

  const normalizedPoints = useMemo(() => {
    const xScale = xGap / BASE_IMAGE_GAP_X;
    const yScale = yGap / BASE_IMAGE_GAP_Y;

    return plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * xScale,
      scaledY: point.y * yScale,
    }));
  }, [plotterPoints, xGap, yGap]);

  const xExtent = useMemo(
    () => extentWithPadding(normalizedPoints.map((p) => p.scaledX)),
    [normalizedPoints],
  );
  const yExtent = useMemo(
    () => extentWithPadding(normalizedPoints.map((p) => p.scaledY)),
    [normalizedPoints],
  );

  const baseXScale = useMemo(
    () => d3.scaleLinear().domain(xExtent).range([0, innerWidth]),
    [xExtent, innerWidth],
  );

  const baseYScale = useMemo(
    () => d3.scaleLinear().domain(yExtent).range([innerHeight, 0]),
    [yExtent, innerHeight],
  );

  const visibleDomain = useMemo(
    () =>
      computeVisibleDomain(
        xExtent,
        yExtent,
        transform,
        innerWidth,
        innerHeight,
      ),
    [xExtent, yExtent, transform, innerWidth, innerHeight],
  );

  const xTicks = useMemo(
    () => d3.ticks(visibleDomain.xMin, visibleDomain.xMax, 8),
    [visibleDomain],
  );
  const yTicks = useMemo(
    () => d3.ticks(visibleDomain.yMin, visibleDomain.yMax, 6),
    [visibleDomain],
  );

  const xTickScale = useMemo(
    () =>
      d3
        .scaleLinear()
        .domain([visibleDomain.xMin, visibleDomain.xMax])
        .range([0, innerWidth]),
    [visibleDomain, innerWidth],
  );

  const yTickScale = useMemo(
    () =>
      d3
        .scaleLinear()
        .domain([visibleDomain.yMin, visibleDomain.yMax])
        .range([innerHeight, 0]),
    [visibleDomain, innerHeight],
  );

  const clipId = useMemo(
    () => `recharts-clip-${Math.random().toString(36).slice(2)}`,
    [],
  );

  const zoomTo = useCallback(
    (nextScale, anchorX, anchorY) => {
      setTransform((prev) => {
        const clampedScale = clamp(nextScale, ZOOM_MIN, ZOOM_MAX);
        const pivotX = Number.isFinite(anchorX) ? anchorX : innerWidth / 2;
        const pivotY = Number.isFinite(anchorY) ? anchorY : innerHeight / 2;

        const nextX =
          prev.x - (pivotX - prev.x) * (clampedScale / prev.scale - 1);
        const nextY =
          prev.y - (pivotY - prev.y) * (clampedScale / prev.scale - 1);

        return clampTransform(
          { scale: clampedScale, x: nextX, y: nextY },
          innerWidth,
          innerHeight,
        );
      });
    },
    [innerWidth, innerHeight],
  );

  const handleZoomIn = useCallback(() => {
    zoomTo(transform.scale * ZOOM_STEP, innerWidth / 2, innerHeight / 2);
  }, [transform.scale, zoomTo, innerWidth, innerHeight]);

  const handleZoomOut = useCallback(() => {
    zoomTo(transform.scale / ZOOM_STEP, innerWidth / 2, innerHeight / 2);
  }, [transform.scale, zoomTo, innerWidth, innerHeight]);

  const handleReset = useCallback(() => {
    setTransform({ scale: 1, x: 0, y: 0 });
    setHoveredPoint(null);
  }, []);

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

      const factor = event.deltaY > 0 ? 1 / 1.15 : 1.15;
      const nextScale = transform.scale * factor;

      setTransform((prev) => {
        const clampedScale = clamp(nextScale, ZOOM_MIN, ZOOM_MAX);
        const nextX =
          prev.x - (localX - prev.x) * (clampedScale / prev.scale - 1);
        const nextY =
          prev.y - (localY - prev.y) * (clampedScale / prev.scale - 1);
        return clampTransform(
          { scale: clampedScale, x: nextX, y: nextY },
          innerWidth,
          innerHeight,
        );
      });
    },
    [innerWidth, innerHeight, transform.scale],
  );

  const handlePointerDown = useCallback(
    (event) => {
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

      dragRef.current = {
        dragging: true,
        pointerId: event.pointerId,
        startClientX: event.clientX,
        startClientY: event.clientY,
        startTransform: transform,
      };

      event.currentTarget.setPointerCapture?.(event.pointerId);
    },
    [innerWidth, innerHeight, transform],
  );

  const handlePointerMove = useCallback(
    (event) => {
      if (dragRef.current.dragging) {
        const dx = event.clientX - dragRef.current.startClientX;
        const dy = event.clientY - dragRef.current.startClientY;

        const next = clampTransform(
          {
            scale: dragRef.current.startTransform.scale,
            x: dragRef.current.startTransform.x + dx,
            y: dragRef.current.startTransform.y + dy,
          },
          innerWidth,
          innerHeight,
        );

        setTransform(next);
        return;
      }

      const target = event.target?.closest?.("[data-point-id]");
      if (!target) {
        setHoveredPoint(null);
        return;
      }

      const id = target.getAttribute("data-point-id");
      const point = plotterPoints.find((p) => p.id === id);
      if (!point) return;

      setHoveredPoint(point);
      setTooltipPos({ x: event.clientX, y: event.clientY });
    },
    [innerWidth, innerHeight, plotterPoints],
  );

  const handlePointerUp = useCallback((event) => {
    dragRef.current.dragging = false;
    dragRef.current.pointerId = null;
    event.currentTarget.releasePointerCapture?.(event.pointerId);
  }, []);

  const contentTransform = `translate(${transform.x}, ${transform.y}) scale(${transform.scale})`;

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%" }}>
      <PlotterControls
        zoomLevel={transform.scale}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />

      <svg
        ref={svgRef}
        width={containerWidth}
        height={height}
        style={{ display: "block", touchAction: "none", userSelect: "none" }}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
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

          <AxisGrid
            xTicks={xTicks}
            yTicks={yTicks}
            xTickScale={xTickScale}
            yTickScale={yTickScale}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />

          <AxisLabels
            xTicks={xTicks}
            yTicks={yTicks}
            xTickScale={xTickScale}
            yTickScale={yTickScale}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />

          <g clipPath={`url(#${clipId})`}>
            <g transform={contentTransform}>
              {normalizedPoints.map((point) => (
                <ImagePoint
                  key={point.id}
                  point={point}
                  baseXScale={baseXScale}
                  baseYScale={baseYScale}
                  imageCount={imageCount}
                />
              ))}
            </g>
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

      {hoveredPoint && (
        <div
          className="plotter-tooltip"
          style={{
            display: "block",
            position: "fixed",
            left: tooltipPos.x + 12,
            top: tooltipPos.y - 10,
            pointerEvents: "none",
            zIndex: 20,
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

function ImagePoint({ point, baseXScale, baseYScale, imageCount }) {
  const centerX = baseXScale(point.scaledX);
  const centerY = baseYScale(point.scaledY);

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
        <image
          key={`${point.id}-${index}`}
          data-point-id={point.id}
          href={point.image}
          x={position.x}
          y={position.y}
          width={position.width}
          height={position.height}
          preserveAspectRatio="xMidYMid slice"
          style={{ cursor: "pointer" }}
        />
      ))}
    </>
  );
}

function AxisGrid({
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
}

function AxisLabels({
  xTicks,
  yTicks,
  xTickScale,
  yTickScale,
  innerHeight,
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
            {formatTick(tick)}
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
            {formatTick(tick)}
          </text>
        );
      })}
    </>
  );
}

function extentWithPadding(values) {
  if (!values.length) return [0, 1];

  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min;
  const pad = span === 0 ? 5 : Math.max(span * 0.18, 1);

  return [min - pad, max + pad];
}

function computeVisibleDomain(
  xExtent,
  yExtent,
  transform,
  innerWidth,
  innerHeight,
) {
  const domainWidth = xExtent[1] - xExtent[0];
  const domainHeight = yExtent[1] - yExtent[0];

  const xMin =
    xExtent[0] - (transform.x / transform.scale / innerWidth) * domainWidth;
  const xMax = xMin + domainWidth / transform.scale;

  const yMax =
    yExtent[1] + (transform.y / transform.scale / innerHeight) * domainHeight;
  const yMin = yMax - domainHeight / transform.scale;

  return { xMin, xMax, yMin, yMax };
}

function clampTransform(transform, innerWidth, innerHeight) {
  const scale = transform.scale;
  const scaledWidth = innerWidth * scale;
  const scaledHeight = innerHeight * scale;

  let x = transform.x;
  let y = transform.y;

  if (scaledWidth <= innerWidth) {
    x = (innerWidth - scaledWidth) / 2;
  } else {
    x = Math.min(0, Math.max(innerWidth - scaledWidth, x));
  }

  if (scaledHeight <= innerHeight) {
    y = (innerHeight - scaledHeight) / 2;
  } else {
    y = Math.min(0, Math.max(innerHeight - scaledHeight, y));
  }

  return { scale, x, y };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function formatTick(value) {
  if (Number.isInteger(value)) return String(value);
  return parseFloat(Number(value).toPrecision(4)).toString();
}

export default RechartsPlotter;
