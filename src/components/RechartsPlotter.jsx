import { useState, useCallback, useRef } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_MARGIN } from "../lib/constants";
import PlotterControls from "./PlotterControls";

const ZOOM_STEP = 1.5;
const ZOOM_MIN = 0.3;
const ZOOM_MAX = 8;
const DOMAIN_PADDING_UNITS = 1;
const CLIP_PATH_ID = "recharts-plot-clip";

function RechartsPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = useCallback(
    () => setZoomLevel((prev) => Math.min(prev * ZOOM_STEP, ZOOM_MAX)),
    []
  );

  const handleZoomOut = useCallback(
    () => setZoomLevel((prev) => Math.max(prev / ZOOM_STEP, ZOOM_MIN)),
    []
  );

  const handleReset = useCallback(() => setZoomLevel(1), []);

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <div>
      <PlotterControls
        zoomLevel={zoomLevel}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
      <PlotArea
        plotterPoints={plotterPoints}
        imageCount={imageCount}
        zoomLevel={zoomLevel}
        xGap={xGap}
        yGap={yGap}
      />
    </div>
  );
}

function buildAxisDomain(values, zoomLevel, padding) {
  const dataMin = Math.min(...values);
  const dataMax = Math.max(...values);
  const center = (dataMin + dataMax) / 2;
  const halfSpan = ((dataMax - dataMin) / 2 + padding) / zoomLevel;
  return [center - halfSpan, center + halfSpan];
}

function PlotArea({ plotterPoints, imageCount, zoomLevel, xGap, yGap }) {
  const containerRef = useRef(null);
  const xValues = plotterPoints.map((point) => point.x);
  const yValues = plotterPoints.map((point) => point.y);

  const domainX = buildAxisDomain(xValues, zoomLevel, DOMAIN_PADDING_UNITS);
  const domainY = buildAxisDomain(yValues, zoomLevel, DOMAIN_PADDING_UNITS);

  const renderCustomShape = useCallback(
    (shapeProps) => {
      const { cx, cy, payload } = shapeProps;
      const positions = computeImagePositions(
        cx,
        cy,
        CELL_SIZE,
        CELL_SIZE,
        imageCount
      );

      return (
        <g clipPath={`url(#${CLIP_PATH_ID})`}>
          {positions.map((position, index) => (
            <image
              key={`${payload.id}-${index}`}
              href={payload.image}
              x={position.x}
              y={position.y}
              width={position.width}
              height={position.height}
              preserveAspectRatio="xMidYMid slice"
            />
          ))}
        </g>
      );
    },
    [imageCount]
  );

  const chartHeight = 500;
  const plotWidth =
    (containerRef.current?.offsetWidth ?? 900) -
    PLOT_MARGIN.left -
    PLOT_MARGIN.right;
  const plotHeight = chartHeight - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

  return (
    <div ref={containerRef}>
      <ResponsiveContainer width="100%" height={chartHeight}>
        <ScatterChart margin={PLOT_MARGIN}>
          <defs>
            <clipPath id={CLIP_PATH_ID}>
              <rect x={0} y={0} width={plotWidth} height={plotHeight} />
            </clipPath>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis
            type="number"
            dataKey="x"
            domain={domainX}
            tick={{ fill: "#888", fontSize: 12 }}
            stroke="#555"
            name="X"
          />
          <YAxis
            type="number"
            dataKey="y"
            domain={domainY}
            tick={{ fill: "#888", fontSize: 12 }}
            stroke="#555"
            name="Y"
          />
          <Tooltip content={<MetadataTooltip />} />
          <Scatter
            key={`scatter-${imageCount}-${zoomLevel}-${xGap}-${yGap}`}
            data={plotterPoints}
            shape={renderCustomShape}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

function MetadataTooltip({ active, payload }) {
  if (!active || !payload || payload.length === 0) return null;

  const dataPoint = payload[0].payload;

  return (
    <div className="plotter-tooltip">
      <div className="tooltip-label">{dataPoint.label}</div>
      <div className="tooltip-meta">
        <span>Interval: {dataPoint.meta.interval}s</span>
        <span>Angle: {dataPoint.meta.angle}°</span>
        <span>Quality: {dataPoint.meta.quality}</span>
      </div>
    </div>
  );
}

export default RechartsPlotter;
