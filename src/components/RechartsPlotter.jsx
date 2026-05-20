import { useState, useCallback } from "react";
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
import { CELL_SIZE } from "../lib/constants";
import PlotterControls from "./PlotterControls";

function RechartsPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();
  const [zoomLevel, setZoomLevel] = useState(1);

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <div>
      <PlotterControls
        zoomLevel={zoomLevel}
        onZoomIn={() => setZoomLevel((prev) => Math.min(prev * 1.5, 5))}
        onZoomOut={() => setZoomLevel((prev) => Math.max(prev / 1.5, 0.3))}
        onReset={() => setZoomLevel(1)}
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

function PlotArea({ plotterPoints, imageCount, zoomLevel, xGap, yGap }) {
  const xValues = plotterPoints.map((point) => point.x);
  const yValues = plotterPoints.map((point) => point.y);
  const xPadding = 10 / zoomLevel;
  const yPadding = 10 / zoomLevel;

  const xMin = Math.min(...xValues) - xPadding;
  const xMax = Math.max(...xValues) + xPadding;
  const yMin = Math.min(...yValues) - yPadding;
  const yMax = Math.max(...yValues) + yPadding;

  const xCenter = (xMax + xMin) / 2;
  const yCenter = (yMax + yMin) / 2;

  const xSpacingScale = xGap / 10;
  const ySpacingScale = yGap / 10;

  const xRange = (xMax - xMin) / zoomLevel / xSpacingScale;
  const yRange = (yMax - yMin) / zoomLevel / ySpacingScale;

  const domainX = [xCenter - xRange / 2, xCenter + xRange / 2];
  const domainY = [yCenter - yRange / 2, yCenter + yRange / 2];

  const renderCustomShape = useCallback(
    (shapeProps) => {
      const { cx, cy, payload } = shapeProps;
      const cellSize = CELL_SIZE * Math.min(zoomLevel, 2);
      const positions = computeImagePositions(cx, cy, cellSize, cellSize, imageCount, xGap, yGap);

      return (
        <g>
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
    [imageCount, zoomLevel, xGap, yGap]
  );

  return (
    <ResponsiveContainer width="100%" height={500}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
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
