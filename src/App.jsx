import { useState, useMemo, useEffect } from "react";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import Navbar from "./components/Navbar";
import ImageCountSelector from "./components/ImageCountSelector";
import DataPointCountControl from "./components/DataPointCountControl";

import RechartsPlotter from "./components/RechartsPlotter";
import RechartsNativePlotter from "./components/RechartsNativePlotter";
import AgChartsPlotter from "./components/AgChartsPlotter";
import D3Plotter from "./components/D3Plotter";
import PixiPlotter from "./components/PixiPlotter";
import KonvaPlotter from "./components/KonvaPlotter";

import {
  DATA_POINT_LIMITS,
  MAX_IMAGES_PER_POINT,
  MIN_IMAGES_PER_POINT,
} from "./lib/constants";

import { retainOnlyChartViewports } from "./lib/chartViewportStore";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState(null);

  const [imageCount, setImageCount] = useState(1);

  const [multiChartMode, setMultiChartMode] = useState(false);

  const [multiChartCount, setMultiChartCount] = useState(5);

  const [virtualiseCharts, setVirtualiseCharts] = useState(false);

  const [enableQuadtree, setEnableQuadtree] = useState(false);

  const [enableLOD, setEnableLOD] = useState(false);

  const [enableCanvas, setEnableCanvas] = useState(false);

  const [dataPointCount, setDataPointCount] = useState(
    DATA_POINT_LIMITS.defaultCount,
  );

  const [appliedXGap, setAppliedXGap] = useState(10);

  const [appliedYGap, setAppliedYGap] = useState(10);

  const [draftXGap, setDraftXGap] = useState(10);

  const [draftYGap, setDraftYGap] = useState(10);

  const hasChanges = draftXGap !== appliedXGap || draftYGap !== appliedYGap;

  const rowVirtualizer = useWindowVirtualizer({
    count: multiChartCount,
    estimateSize: () => 720,
    overscan: 1,
  });

  const virtualItems = rowVirtualizer.getVirtualItems();

  const handleGapUpdate = () => {
    setAppliedXGap(draftXGap);
    setAppliedYGap(draftYGap);
  };

  const handleMultiChartCountChange = (value) => {
    const parsed = Number(value);
    if (Number.isNaN(parsed)) {
      setMultiChartCount(2);
      return;
    }
    const clamped = Math.max(2, Math.min(10, Math.floor(parsed)));
    setMultiChartCount(clamped);
  };

  const handleImageCountChange = (value) => {
    const parsed = Number(value);

    if (Number.isNaN(parsed)) {
      setImageCount(1);
      return;
    }

    const clamped = Math.max(
      MIN_IMAGES_PER_POINT,
      Math.min(MAX_IMAGES_PER_POINT, Math.floor(parsed)),
    );

    setImageCount(clamped);
  };

  const plotterProps = {
    imageCount,
    xGap: appliedXGap,
    yGap: appliedYGap,
    dataPointCount,
    enableQuadtree,
    enableLOD,
    enableCanvas,
  };

  const activeChartIds = useMemo(() => {
    if (!multiChartMode) {
      return ["single-chart"];
    }

    return Array.from(
      {
        length: multiChartCount,
      },
      (_, index) => `chart-${index}`,
    );
  }, [multiChartMode, multiChartCount]);

  useEffect(() => {
    retainOnlyChartViewports(activeChartIds);
  }, [activeChartIds]);

  const renderSinglePlotter = ({ key, chartId }) => {
    switch (activeTab) {
      case "Recharts":
        return (
          <RechartsPlotter key={key} chartId={chartId} {...plotterProps} />
        );
      case "Recharts (Native)":
        return (
          <RechartsNativePlotter key={key} chartId={chartId} {...plotterProps} />
        );
      case "AG Charts":
        return (
          <AgChartsPlotter key={key} chartId={chartId} {...plotterProps} />
        );
      case "D3":
        return <D3Plotter key={key} chartId={chartId} {...plotterProps} />;
      case "PixiJS":
        return <PixiPlotter key={key} chartId={chartId} {...plotterProps} />;
      case "Konva":
        return <KonvaPlotter key={key} chartId={chartId} {...plotterProps} />;

      default:
        return (
          <div
            key={key}
            style={{
              height: "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#888",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Click a tab to render the chart
          </div>
        );
    }
  };

  const renderCharts = () => {
    if (!multiChartMode) {
      return (
        <div className="single-chart-wrapper">
          {renderSinglePlotter({
            key: "single-chart",
            chartId: "single-chart",
          })}
        </div>
      );
    }

    if (!virtualiseCharts) {
      return (
        <div className="multi-chart-wrapper">
          {Array.from({
            length: multiChartCount,
          }).map((_, index) => (
            <div key={`chart-wrapper-${index}`} className="multi-chart-item">
              <div className="multi-chart-header">Chart {index + 1}</div>
              {renderSinglePlotter({
                key: `chart-${index}`,
                chartId: `chart-${index}`,
              })}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div
        style={{
          width: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {virtualItems.slice(0, 2).map((virtualRow) => {
            const chartId = `chart-${virtualRow.index}`;

            return (
              <div
                key={chartId}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  transform: `translateY(${virtualRow.start}px)`,
                  paddingBottom: "20px",
                }}
              >
                <div className="multi-chart-item">
                  <div className="multi-chart-header">
                    Chart {virtualRow.index + 1}
                  </div>

                  {renderSinglePlotter({
                    key: chartId,
                    chartId,
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`app-container ${multiChartMode ? "multi-mode-active" : ""}`}
    >
      <h1 className="app-title">Image Plotting System PoC</h1>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <DataPointCountControl
        dataPointCount={dataPointCount}
        onDataPointCountChange={setDataPointCount}
      />

      <ImageCountSelector
        imageCount={imageCount}
        setImageCount={handleImageCountChange}
      />

      <div className="multi-chart-controls">
        {" "}
        <div className="multi-chart-toggle-row">
          <label className="multi-chart-label"> Multi Chart Mode </label>
          <button
            className={`multi-chart-toggle ${multiChartMode ? "active" : ""}`}
            onClick={() => setMultiChartMode((prev) => !prev)}
          >
            {multiChartMode ? "Enabled" : "Disabled"}
          </button>

          <label className="multi-chart-label">Virtualise Charts</label>
          <button
            className={`multi-chart-toggle ${virtualiseCharts ? "active" : ""}`}
            onClick={() => setVirtualiseCharts((prev) => !prev)}
          >
            {virtualiseCharts ? "Enabled" : "Disabled"}
          </button>

          <label className="multi-chart-label">Quadtree</label>
          <button
            className={`multi-chart-toggle ${enableQuadtree ? "active" : ""}`}
            onClick={() => setEnableQuadtree((prev) => !prev)}
          >
            {enableQuadtree ? "Enabled" : "Disabled"}
          </button>

          <label className="multi-chart-label">LOD Images</label>
          <button
            className={`multi-chart-toggle ${enableLOD ? "active" : ""}`}
            onClick={() => setEnableLOD((prev) => !prev)}
          >
            {enableLOD ? "Enabled" : "Disabled"}
          </button>

          <label className="multi-chart-label">Canvas Rendering</label>
          <button
            className={`multi-chart-toggle ${enableCanvas ? "active" : ""}`}
            onClick={() => setEnableCanvas((prev) => !prev)}
          >
            {enableCanvas ? "Enabled" : "Disabled"}
          </button>
        </div>{" "}
        {multiChartMode && (
          <div className="multi-chart-count-row">
            {" "}
            <label className="multi-chart-label"> Charts Count </label>{" "}
            <input
              type="number"
              min="2"
              max="10"
              value={multiChartCount}
              onChange={(e) => handleMultiChartCountChange(e.target.value)}
              className="multi-chart-input"
            />{" "}
          </div>
        )}{" "}
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <label style={{ color: "#fff" }}>X Gap:</label>

          <input
            type="range"
            min="1"
            max="50"
            value={draftXGap}
            onChange={(e) => setDraftXGap(Number(e.target.value))}
          />

          <span
            style={{
              color: "#888",
              width: "20px",
            }}
          >
            {draftXGap}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <label style={{ color: "#fff" }}>Y Gap:</label>

          <input
            type="range"
            min="1"
            max="50"
            value={draftYGap}
            onChange={(e) => setDraftYGap(Number(e.target.value))}
          />

          <span
            style={{
              color: "#888",
              width: "20px",
            }}
          >
            {draftYGap}
          </span>
        </div>

        <button
          onClick={handleGapUpdate}
          disabled={!hasChanges}
          style={{
            padding: "5px 15px",
            backgroundColor: hasChanges ? "#2e8b57" : "#444",
            color: hasChanges ? "#fff" : "#888",
            border: "none",
            borderRadius: "4px",
            cursor: hasChanges ? "pointer" : "not-allowed",
            fontWeight: "bold",
          }}
        >
          Update
        </button>
      </div>

      <div className="viewer-container">{renderCharts()}</div>
    </div>
  );
}

export default App;
