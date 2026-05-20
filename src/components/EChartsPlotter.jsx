import { useMemo, useCallback, useRef } from "react";
import ReactECharts from "echarts-for-react";
import { usePlotterData } from "../lib/plotterData";
import { CELL_SIZE } from "../lib/constants";
import PlotterControls from "./PlotterControls";

function EChartsPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <EChartsCanvas plotterPoints={plotterPoints} imageCount={imageCount} xGap={xGap} yGap={yGap} />
  );
}

function EChartsCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const echartsRef = useRef(null);

  const chartOption = useMemo(
    () => buildChartOption(plotterPoints, imageCount, xGap, yGap),
    [plotterPoints, imageCount, xGap, yGap]
  );

  const handleChartEvents = useCallback(() => ({}), []);

  const handleZoom = (scale) => {
    if (!echartsRef.current) return;
    const instance = echartsRef.current.getEchartsInstance();
    const option = instance.getOption();
    const dataZoom = option.dataZoom[0];
    const range = dataZoom.end - dataZoom.start;
    const newRange = range * scale;
    const center = (dataZoom.end + dataZoom.start) / 2;
    instance.dispatchAction({
      type: 'dataZoom',
      start: Math.max(0, center - newRange / 2),
      end: Math.min(100, center + newRange / 2)
    });
  };

  const handleReset = () => {
    if (!echartsRef.current) return;
    const instance = echartsRef.current.getEchartsInstance();
    instance.dispatchAction({ type: 'dataZoom', start: 0, end: 100 });
  };

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={() => handleZoom(1 / 1.5)}
        onZoomOut={() => handleZoom(1.5)}
        onReset={handleReset}
      />
      <ReactECharts
        ref={echartsRef}
        option={chartOption}
        style={{ height: 550, width: "100%" }}
        notMerge
        opts={{ renderer: "canvas" }}
        onEvents={handleChartEvents()}
      />
    </div>
  );
}

function buildChartOption(plotterPoints, imageCount, xGap, yGap) {
  const gridConfig = getGridConfig(imageCount);
  const subCellWidth = CELL_SIZE;
  const subCellHeight = CELL_SIZE;

  const xValues = plotterPoints.map((p) => p.x);
  const yValues = plotterPoints.map((p) => p.y);
  
  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);

  const xPadding = (xMax - xMin) * 0.15 || 5;
  const yPadding = (yMax - yMin) * 0.15 || 5;

  const xCenter = (xMax + xMin) / 2;
  const yCenter = (yMax + yMin) / 2;

  const xSpacingScale = xGap / 10;
  const ySpacingScale = yGap / 10;

  const xRange = (xMax - xMin + 2 * xPadding) / xSpacingScale;
  const yRange = (yMax - yMin + 2 * yPadding) / ySpacingScale;

  return {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "item",
      formatter: formatTooltip,
    },
    xAxis: {
      type: "value",
      min: xCenter - xRange / 2,
      max: xCenter + xRange / 2,
      axisLine: { lineStyle: { color: "#555" } },
      axisLabel: { color: "#888" },
      splitLine: { lineStyle: { color: "#2a2a3e", type: "dashed" } },
    },
    yAxis: {
      type: "value",
      min: yCenter - yRange / 2,
      max: yCenter + yRange / 2,
      axisLine: { lineStyle: { color: "#555" } },
      axisLabel: { color: "#888" },
      splitLine: { lineStyle: { color: "#2a2a3e", type: "dashed" } },
    },
    dataZoom: [
      { type: "inside", xAxisIndex: 0 },
      { type: "inside", yAxisIndex: 0 },
    ],
    series: [
      {
        type: "custom",
        renderItem: function (params, api) {
          const x = api.value(0);
          const y = api.value(1);
          const coord = api.coord([x, y]);

          const children = [];
          let subIndex = 0;
          for (let row = 0; row < gridConfig.rows; row++) {
            for (let col = 0; col < gridConfig.columns; col++) {
              if (subIndex >= imageCount) break;

              const xPos = col * (subCellWidth + xGap) - ((gridConfig.columns - 1) * (subCellWidth + xGap)) / 2;
              const yPos = row * (subCellHeight + yGap) - ((gridConfig.rows - 1) * (subCellHeight + yGap)) / 2;

              children.push({
                type: "image",
                style: {
                  image: api.value(2),
                  x: coord[0] + xPos - subCellWidth / 2,
                  y: coord[1] + yPos - subCellHeight / 2,
                  width: subCellWidth,
                  height: subCellHeight,
                }
              });

              subIndex++;
            }
          }
          return { type: "group", children: children };
        },
        data: plotterPoints.map((point) => ({
          value: [point.x, point.y, point.image],
          name: point.label,
          meta: point.meta,
        })),
      },
    ],
  };
}

// Removed graphic element builders since we are using custom series

function getGridConfig(imageCount) {
  const configs = {
    1: { rows: 1, columns: 1 },
    2: { rows: 1, columns: 2 },
    4: { rows: 2, columns: 2 },
    8: { rows: 2, columns: 4 },
  };

  return configs[imageCount] || configs[1];
}

function formatTooltip(params) {
  if (!params || !params.data) return "";

  const { name, data } = params;
  const meta = data.meta;

  return (
    `<strong>${name}</strong><br/>` +
    `Interval: ${meta.interval}s<br/>` +
    `Angle: ${meta.angle}°<br/>` +
    `Quality: ${meta.quality}`
  );
}

export default EChartsPlotter;
