# Repository Dump

## Folder Structure

```txt
imagdPlotting
├── generate-repo-md.cjs
├── index.html
├── package.json
├── public
│   ├── data
│   │   └── data.json
│   └── images
└── src
    ├── App.css
    ├── App.jsx
    ├── components
    │   ├── D3Plotter.jsx
    │   ├── DeckGLPlotter.jsx
    │   ├── EChartsPlotter.jsx
    │   ├── ImageCountSelector.jsx
    │   ├── KonvaPlotter.jsx
    │   ├── Navbar.jsx
    │   ├── PixiPlotter.jsx
    │   ├── PlotterControls.jsx
    │   └── RechartsPlotter.jsx
    ├── lib
    │   ├── constants.js
    │   ├── gridLayout.js
    │   └── plotterData.js
    └── main.jsx
```

## Files

---

# index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>poc</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

---

# package.json

```json
{
  "name": "poc",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@deck.gl/core": "^9.3.2",
    "@deck.gl/layers": "^9.3.2",
    "@deck.gl/react": "^9.3.2",
    "@luma.gl/engine": "^9.3.3",
    "@luma.gl/webgl": "^9.3.3",
    "@pixi/react": "^8.0.5",
    "d3": "^7.9.0",
    "echarts": "^6.0.0",
    "echarts-for-react": "^3.0.6",
    "konva": "^10.3.0",
    "pixi.js": "^8.18.1",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "react-konva": "^19.2.4",
    "recharts": "^3.8.1",
    "use-image": "^1.1.4"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.6.0",
    "vite": "^8.0.12"
  }
}

```

---

# public\data\data.json

```json
[
  {
    "id": "1-0",
    "x": 0,
    "y": 0,
    "image": "/images/base.jpeg",
    "label": "Interval 0s, 0°",
    "meta": { "interval": 0, "angle": 0, "quality": 0.95 }
  },
  {
    "id": "1-15",
    "x": 0,
    "y": 15,
    "image": "/images/base.jpeg",
    "label": "Interval 0s, 15°",
    "meta": { "interval": 0, "angle": 15, "quality": 0.93 }
  },
  {
    "id": "1-30",
    "x": 0,
    "y": 30,
    "image": "/images/base.jpeg",
    "label": "Interval 0s, 30°",
    "meta": { "interval": 0, "angle": 30, "quality": 0.91 }
  },
  {
    "id": "1-45",
    "x": 0,
    "y": 45,
    "image": "/images/base.jpeg",
    "label": "Interval 0s, 45°",
    "meta": { "interval": 0, "angle": 45, "quality": 0.88 }
  },
  {
    "id": "2-0",
    "x": 10,
    "y": 0,
    "image": "/images/base.jpeg",
    "label": "Interval 10s, 0°",
    "meta": { "interval": 10, "angle": 0, "quality": 0.92 }
  },
  {
    "id": "2-15",
    "x": 10,
    "y": 15,
    "image": "/images/base.jpeg",
    "label": "Interval 10s, 15°",
    "meta": { "interval": 10, "angle": 15, "quality": 0.90 }
  },
  {
    "id": "2-30",
    "x": 10,
    "y": 30,
    "image": "/images/base.jpeg",
    "label": "Interval 10s, 30°",
    "meta": { "interval": 10, "angle": 30, "quality": 0.87 }
  },
  {
    "id": "2-45",
    "x": 10,
    "y": 45,
    "image": "/images/base.jpeg",
    "label": "Interval 10s, 45°",
    "meta": { "interval": 10, "angle": 45, "quality": 0.84 }
  },
  {
    "id": "3-0",
    "x": 20,
    "y": 0,
    "image": "/images/base.jpeg",
    "label": "Interval 20s, 0°",
    "meta": { "interval": 20, "angle": 0, "quality": 0.89 }
  },
  {
    "id": "3-15",
    "x": 20,
    "y": 15,
    "image": "/images/base.jpeg",
    "label": "Interval 20s, 15°",
    "meta": { "interval": 20, "angle": 15, "quality": 0.86 }
  },
  {
    "id": "3-30",
    "x": 20,
    "y": 30,
    "image": "/images/base.jpeg",
    "label": "Interval 20s, 30°",
    "meta": { "interval": 20, "angle": 30, "quality": 0.83 }
  },
  {
    "id": "3-45",
    "x": 20,
    "y": 45,
    "image": "/images/base.jpeg",
    "label": "Interval 20s, 45°",
    "meta": { "interval": 20, "angle": 45, "quality": 0.80 }
  },
  {
    "id": "4-0",
    "x": 30,
    "y": 0,
    "image": "/images/base.jpeg",
    "label": "Interval 30s, 0°",
    "meta": { "interval": 30, "angle": 0, "quality": 0.85 }
  },
  {
    "id": "4-15",
    "x": 30,
    "y": 15,
    "image": "/images/base.jpeg",
    "label": "Interval 30s, 15°",
    "meta": { "interval": 30, "angle": 15, "quality": 0.82 }
  },
  {
    "id": "4-30",
    "x": 30,
    "y": 30,
    "image": "/images/base.jpeg",
    "label": "Interval 30s, 30°",
    "meta": { "interval": 30, "angle": 30, "quality": 0.79 }
  },
  {
    "id": "4-45",
    "x": 30,
    "y": 45,
    "image": "/images/base.jpeg",
    "label": "Interval 30s, 45°",
    "meta": { "interval": 30, "angle": 45, "quality": 0.76 }
  }
]

```

---

# src\App.css

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: #1a1a2e;
  color: #e0e0e0;
}

.app-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
}

.app-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #f0f0f0;
}

/* Tab Bar */
.tab-container {
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
  border-bottom: 1px solid #333;
  padding-bottom: 8px;
}

.tab-button {
  padding: 8px 16px;
  border: 1px solid #444;
  background: #2a2a3e;
  color: #aaa;
  cursor: pointer;
  font-size: 0.85rem;
  border-radius: 4px 4px 0 0;
  transition: background 0.15s, color 0.15s;
}

.tab-button:hover {
  background: #3a3a5e;
  color: #ddd;
}

.tab-button.active {
  background: #4a4a7e;
  color: #fff;
  border-color: #6a6aae;
}

/* Image Count Selector */
.image-count-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.selector-label {
  font-size: 0.85rem;
  color: #aaa;
}

.count-button {
  padding: 4px 12px;
  border: 1px solid #444;
  background: #2a2a3e;
  color: #aaa;
  cursor: pointer;
  font-size: 0.8rem;
  border-radius: 4px;
}

.count-button:hover {
  background: #3a3a5e;
}

.count-button.active {
  background: #4a4a7e;
  color: #fff;
  border-color: #6a6aae;
}

/* Viewer Container */
.viewer-container {
  background: #16213e;
  border: 1px solid #333;
  border-radius: 6px;
  padding: 16px;
  min-height: 500px;
  position: relative;
}

/* Loading / Error States */
.plotter-loading,
.plotter-error {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: #888;
  font-size: 0.9rem;
}

.plotter-error {
  color: #e74c3c;
}

/* Tooltip */
.plotter-tooltip {
  position: absolute;
  background: #2a2a3e;
  border: 1px solid #555;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 0.75rem;
  color: #ddd;
  pointer-events: none;
  z-index: 100;
  max-width: 220px;
}

.plotter-tooltip .tooltip-label {
  font-weight: 600;
  margin-bottom: 4px;
}

.plotter-tooltip .tooltip-meta {
  color: #aaa;
}

.plotter-tooltip .tooltip-meta span {
  display: block;
}

/* Zoom Controls */
.zoom-controls {
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
}

.zoom-button {
  padding: 4px 10px;
  border: 1px solid #444;
  background: #2a2a3e;
  color: #aaa;
  cursor: pointer;
  font-size: 0.8rem;
  border-radius: 4px;
}

.zoom-button:hover {
  background: #3a3a5e;
  color: #ddd;
}

```

---

# src\App.jsx

```jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import ImageCountSelector from "./components/ImageCountSelector";
import RechartsPlotter from "./components/RechartsPlotter";
import D3Plotter from "./components/D3Plotter";
import PixiPlotter from "./components/PixiPlotter";
import KonvaPlotter from "./components/KonvaPlotter";
import DeckGLPlotter from "./components/DeckGLPlotter";
import EChartsPlotter from "./components/EChartsPlotter";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Recharts");
  const [imageCount, setImageCount] = useState(1);
  const [appliedXGap, setAppliedXGap] = useState(10);
  const [appliedYGap, setAppliedYGap] = useState(10);
  const [draftXGap, setDraftXGap] = useState(10);
  const [draftYGap, setDraftYGap] = useState(10);

  const hasChanges = draftXGap !== appliedXGap || draftYGap !== appliedYGap;

  const handleUpdate = () => {
    setAppliedXGap(draftXGap);
    setAppliedYGap(draftYGap);
  };

  const renderActivePlotter = () => {
    switch (activeTab) {
      case "Recharts":
        return <RechartsPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      case "D3":
        return <D3Plotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      case "PixiJS":
        return <PixiPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      case "Konva":
        return <KonvaPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      case "DeckGL":
        return <DeckGLPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      case "ECharts":
        return <EChartsPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      default:
        return <RechartsPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Image Plotting System PoC</h1>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <ImageCountSelector
        imageCount={imageCount}
        setImageCount={setImageCount}
      />

      <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label style={{ color: "#fff" }}>X Gap:</label>
          <input
            type="range"
            min="1"
            max="50"
            value={draftXGap}
            onChange={(e) => setDraftXGap(Number(e.target.value))}
          />
          <span style={{ color: "#888", width: "20px" }}>{draftXGap}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label style={{ color: "#fff" }}>Y Gap:</label>
          <input
            type="range"
            min="1"
            max="50"
            value={draftYGap}
            onChange={(e) => setDraftYGap(Number(e.target.value))}
          />
          <span style={{ color: "#888", width: "20px" }}>{draftYGap}</span>
        </div>
        <button
          onClick={handleUpdate}
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

      <div className="viewer-container">{renderActivePlotter()}</div>
    </div>
  );
}

function PlaceholderPlotter({ libraryName }) {
  return (
    <div className="plotter-loading">
      {libraryName} plotter — coming soon (Phase 2/3)
    </div>
  );
}

export default App;

```

---

# src\components\D3Plotter.jsx

```jsx
import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import PlotterControls from "./PlotterControls";

function D3Plotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <D3PlotCanvas plotterPoints={plotterPoints} imageCount={imageCount} xGap={xGap} yGap={yGap} />
  );
}

function D3PlotCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const zoomBehaviorRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || plotterPoints.length === 0) return;

    zoomBehaviorRef.current = renderPlot(
      svgRef.current,
      tooltipRef.current,
      plotterPoints,
      imageCount,
      containerWidth,
      xGap,
      yGap
    );
  }, [plotterPoints, imageCount, containerWidth, xGap, yGap]);

  const handleZoomIn = () => {
    if (zoomBehaviorRef.current && svgRef.current) {
      d3.select(svgRef.current).transition().call(zoomBehaviorRef.current.scaleBy, 1.5);
    }
  };

  const handleZoomOut = () => {
    if (zoomBehaviorRef.current && svgRef.current) {
      d3.select(svgRef.current).transition().call(zoomBehaviorRef.current.scaleBy, 1 / 1.5);
    }
  };

  const handleReset = () => {
    if (zoomBehaviorRef.current && svgRef.current) {
      d3.select(svgRef.current).transition().call(zoomBehaviorRef.current.transform, d3.zoomIdentity);
    }
  };

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
      <svg ref={svgRef} />
      <div ref={tooltipRef} className="plotter-tooltip" style={{ display: "none" }} />
    </div>
  );
}

function renderPlot(svgElement, tooltipElement, plotterPoints, imageCount, containerWidth, xGap, yGap) {
  const width = containerWidth;
  const height = PLOT_DIMENSIONS.height;
  const margin = PLOT_MARGIN;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const svg = d3.select(svgElement);
  svg.selectAll("*").remove();

  svg
    .attr("width", width)
    .attr("height", height)
    .style("background", "transparent");

  const xScale = buildXScale(plotterPoints, innerWidth, xGap);
  const yScale = buildYScale(plotterPoints, innerHeight, yGap);

  const zoomGroup = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

  const clipId = "plot-clip-" + Math.random().toString(36).slice(2);
  svg.append("defs")
    .append("clipPath")
    .attr("id", clipId)
    .append("rect")
    .attr("width", innerWidth)
    .attr("height", innerHeight);

  const plotGroup = zoomGroup.append("g").attr("clip-path", `url(#${clipId})`);
  const contentGroup = plotGroup.append("g");

  renderAxes(zoomGroup, xScale, yScale, innerWidth, innerHeight);
  renderGrid(contentGroup, xScale, yScale, innerWidth, innerHeight);
  renderImagePoints(contentGroup, plotterPoints, xScale, yScale, imageCount, tooltipElement);

  const zoomBehavior = d3.zoom()
    .scaleExtent([0.3, 10])
    .on("zoom", (event) => {
      const newXScale = event.transform.rescaleX(xScale);
      const newYScale = event.transform.rescaleY(yScale);

      contentGroup.attr("transform", event.transform);
      updateAxes(zoomGroup, newXScale, newYScale, innerWidth, innerHeight);
    });

  svg.call(zoomBehavior);
  return zoomBehavior;
}

function buildXScale(plotterPoints, innerWidth, xGap) {
  const xExtent = d3.extent(plotterPoints, (point) => point.x);
  const padding = (xExtent[1] - xExtent[0]) * 0.15 || 5;
  const xSpacingScale = xGap / 10;

  return d3
    .scaleLinear()
    .domain([xExtent[0] - padding, xExtent[1] + padding])
    .range([0, innerWidth * xSpacingScale]);
}

function buildYScale(plotterPoints, innerHeight, yGap) {
  const yExtent = d3.extent(plotterPoints, (point) => point.y);
  const padding = (yExtent[1] - yExtent[0]) * 0.15 || 5;
  const ySpacingScale = yGap / 10;

  return d3
    .scaleLinear()
    .domain([yExtent[0] - padding, yExtent[1] + padding])
    .range([innerHeight * ySpacingScale, 0]);
}

function renderAxes(container, xScale, yScale, innerWidth, innerHeight) {
  container.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${innerHeight})`)
    .call(d3.axisBottom(xScale).ticks(8))
    .selectAll("text")
    .attr("fill", "#888");

  container.append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(yScale).ticks(6))
    .selectAll("text")
    .attr("fill", "#888");

  container.selectAll(".x-axis line, .y-axis line").attr("stroke", "#555");
  container.selectAll(".x-axis path, .y-axis path").attr("stroke", "#555");
}

function updateAxes(container, newXScale, newYScale, innerWidth, innerHeight) {
  container.select(".x-axis").call(d3.axisBottom(newXScale).ticks(8));
  container.select(".y-axis").call(d3.axisLeft(newYScale).ticks(6));

  container.selectAll(".x-axis text, .y-axis text").attr("fill", "#888");
  container.selectAll(".x-axis line, .y-axis line").attr("stroke", "#555");
  container.selectAll(".x-axis path, .y-axis path").attr("stroke", "#555");
}

function renderGrid(container, xScale, yScale, innerWidth, innerHeight) {
  container.append("g")
    .attr("class", "grid-lines")
    .selectAll("line.horizontal")
    .data(yScale.ticks(6))
    .enter()
    .append("line")
    .attr("x1", 0)
    .attr("x2", innerWidth)
    .attr("y1", (tick) => yScale(tick))
    .attr("y2", (tick) => yScale(tick))
    .attr("stroke", "#2a2a3e")
    .attr("stroke-dasharray", "3 3");

  container.select(".grid-lines")
    .selectAll("line.vertical")
    .data(xScale.ticks(8))
    .enter()
    .append("line")
    .attr("x1", (tick) => xScale(tick))
    .attr("x2", (tick) => xScale(tick))
    .attr("y1", 0)
    .attr("y2", innerHeight)
    .attr("stroke", "#2a2a3e")
    .attr("stroke-dasharray", "3 3");
}

function renderImagePoints(container, plotterPoints, xScale, yScale, imageCount, tooltipElement) {
  const tooltip = d3.select(tooltipElement);

  plotterPoints.forEach((point) => {
    const centerX = xScale(point.x);
    const centerY = yScale(point.y);
    const positions = computeImagePositions(centerX, centerY, CELL_SIZE, CELL_SIZE, imageCount);

    const pointGroup = container.append("g").attr("class", "image-point");

    positions.forEach((position) => {
      pointGroup.append("image")
        .attr("href", point.image)
        .attr("x", position.x)
        .attr("y", position.y)
        .attr("width", position.width)
        .attr("height", position.height)
        .attr("preserveAspectRatio", "xMidYMid slice")
        .style("cursor", "pointer");
    });

    pointGroup
      .on("mouseenter", (event) => showTooltip(tooltip, event, point))
      .on("mousemove", (event) => moveTooltip(tooltip, event))
      .on("mouseleave", () => hideTooltip(tooltip));
  });
}

function showTooltip(tooltip, event, point) {
  tooltip
    .style("display", "block")
    .html(
      `<div class="tooltip-label">${point.label}</div>` +
      `<div class="tooltip-meta">` +
      `<span>Interval: ${point.meta.interval}s</span>` +
      `<span>Angle: ${point.meta.angle}°</span>` +
      `<span>Quality: ${point.meta.quality}</span>` +
      `</div>`
    );

  moveTooltip(tooltip, event);
}

function moveTooltip(tooltip, event) {
  const containerRect = event.currentTarget.closest(".viewer-container")?.getBoundingClientRect();
  if (!containerRect) return;

  tooltip
    .style("left", `${event.clientX - containerRect.left + 12}px`)
    .style("top", `${event.clientY - containerRect.top - 10}px`);
}

function hideTooltip(tooltip) {
  tooltip.style("display", "none");
}

export default D3Plotter;

```

---

# src\components\DeckGLPlotter.jsx

```jsx
import { useState, useMemo, useCallback } from "react";
import DeckGL from "@deck.gl/react";
import { OrthographicView } from "@deck.gl/core";
import { IconLayer, LineLayer, TextLayer } from "@deck.gl/layers";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE } from "../lib/constants";
import PlotterControls from "./PlotterControls";

const INITIAL_VIEW_STATE = {
  target: [15, 22, 0],
  zoom: 3,
  minZoom: -2,
  maxZoom: 10,
};

const ORTHOGRAPHIC_VIEW = new OrthographicView({
  id: "ortho-view",
  flipY: false,
});

function DeckGLPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <DeckGLCanvas plotterPoints={plotterPoints} imageCount={imageCount} xGap={xGap} yGap={yGap} />
  );
}

function DeckGLCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const [tooltipInfo, setTooltipInfo] = useState(null);
  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);

  const expandedIconData = useMemo(
    () => expandDataForMultiImage(plotterPoints, imageCount, xGap, yGap),
    [plotterPoints, imageCount, xGap, yGap]
  );

  const iconLayer = useMemo(
    () => createIconLayer(expandedIconData),
    [expandedIconData]
  );

  const axesLayers = useMemo(
    () => createAxesLayers(plotterPoints, xGap, yGap),
    [plotterPoints, xGap, yGap]
  );

  const handleHover = useCallback((info) => {
    if (info.object) {
      setTooltipInfo({
        x: info.x,
        y: info.y,
        object: info.object,
      });
    } else {
      setTooltipInfo(null);
    }
  }, []);

  const handleZoomIn = () => setViewState((v) => ({ ...v, zoom: Math.min(v.zoom + 1, v.maxZoom) }));
  const handleZoomOut = () => setViewState((v) => ({ ...v, zoom: Math.max(v.zoom - 1, v.minZoom) }));
  const handleReset = () => setViewState(INITIAL_VIEW_STATE);

  return (
    <div style={{ position: "relative", height: 550, background: "#16213e" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
      <DeckGL
        views={ORTHOGRAPHIC_VIEW}
        viewState={viewState}
        onViewStateChange={({ viewState }) => setViewState(viewState)}
        controller
        layers={[...axesLayers, iconLayer]}
        onHover={handleHover}
        style={{ position: "relative", height: "100%" }}
      />
      {tooltipInfo && (
        <DeckGLTooltip tooltipInfo={tooltipInfo} />
      )}
    </div>
  );
}

function expandDataForMultiImage(plotterPoints, imageCount, xGap, yGap) {
  const expandedEntries = [];
  const scaleFactor = 2;
  const xSpacingScale = xGap / 10;
  const ySpacingScale = yGap / 10;

  plotterPoints.forEach((point) => {
    const cellSize = CELL_SIZE / scaleFactor;
    const positions = computeImagePositions(
      point.x * xSpacingScale,
      point.y * ySpacingScale,
      cellSize,
      cellSize,
      imageCount
    );

    positions.forEach((position, index) => {
      expandedEntries.push({
        id: `${point.id}-sub-${index}`,
        position: [
          position.x + position.width / 2,
          position.y + position.height / 2,
        ],
        width: position.width,
        height: position.height,
        image: point.image,
        label: point.label,
        meta: point.meta,
      });
    });
  });

  return expandedEntries;
}

function createIconLayer(expandedIconData) {
  return new IconLayer({
    id: "image-icon-layer",
    data: expandedIconData,
    getPosition: (entry) => entry.position,
    getIcon: (entry) => ({
      url: entry.image,
      width: 128,
      height: 128,
    }),
    getSize: 20,
    sizeUnits: "common",
    pickable: true,
    sizeScale: 1,
  });
}

function createAxesLayers(plotterPoints, xGap, yGap) {
  if (plotterPoints.length === 0) return [];
  const xValues = plotterPoints.map((p) => p.x);
  const yValues = plotterPoints.map((p) => p.y);
  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);
  const padX = (xMax - xMin) * 0.1 || 5;
  const padY = (yMax - yMin) * 0.1 || 5;

  const xSpacingScale = xGap / 10;
  const ySpacingScale = yGap / 10;

  const lines = [];
  const texts = [];

  const tickCount = 5;
  for (let i = 0; i <= tickCount; i++) {
    const x = xMin - padX + ((xMax - xMin + padX * 2) * i) / tickCount;
    const scaledX = x * xSpacingScale;
    lines.push({
      sourcePosition: [scaledX, (yMin - padY) * ySpacingScale],
      targetPosition: [scaledX, (yMax + padY) * ySpacingScale]
    });
    texts.push({ position: [scaledX, (yMax + padY + 2) * ySpacingScale], text: Math.round(x).toString() });
  }

  for (let i = 0; i <= tickCount; i++) {
    const y = yMin - padY + ((yMax - yMin + padY * 2) * i) / tickCount;
    const scaledY = y * ySpacingScale;
    lines.push({
      sourcePosition: [(xMin - padX) * xSpacingScale, scaledY],
      targetPosition: [(xMax + padX) * xSpacingScale, scaledY]
    });
    texts.push({ position: [(xMin - padX - 2) * xSpacingScale, scaledY], text: Math.round(y).toString() });
  }

  return [
    new LineLayer({
      id: "grid-lines",
      data: lines,
      getSourcePosition: (d) => d.sourcePosition,
      getTargetPosition: (d) => d.targetPosition,
      getColor: [42, 42, 62],
      getWidth: 1,
      widthUnits: "pixels",
    }),
    new TextLayer({
      id: "axis-labels",
      data: texts,
      getPosition: (d) => d.position,
      getText: (d) => d.text,
      getSize: 12,
      getColor: [136, 136, 136],
      sizeUnits: "pixels",
    }),
  ];
}

function DeckGLTooltip({ tooltipInfo }) {
  const { x, y, object } = tooltipInfo;

  return (
    <div
      className="plotter-tooltip"
      style={{
        display: "block",
        left: x + 12,
        top: y - 10,
      }}
    >
      <div className="tooltip-label">{object.label}</div>
      <div className="tooltip-meta">
        <span>Interval: {object.meta.interval}s</span>
        <span>Angle: {object.meta.angle}°</span>
        <span>Quality: {object.meta.quality}</span>
      </div>
    </div>
  );
}

export default DeckGLPlotter;

```

---

# src\components\EChartsPlotter.jsx

```jsx
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

```

---

# src\components\ImageCountSelector.jsx

```jsx
import { IMAGE_COUNTS } from "../lib/constants";

function ImageCountSelector({ imageCount, setImageCount }) {
  return (
    <div className="image-count-selector">
      <span className="selector-label">Images per point:</span>
      {IMAGE_COUNTS.map((count) => (
        <button
          key={count}
          className={`count-button ${imageCount === count ? "active" : ""}`}
          onClick={() => setImageCount(count)}
        >
          {count}
        </button>
      ))}
    </div>
  );
}

export default ImageCountSelector;

```

---

# src\components\KonvaPlotter.jsx

```jsx
import { useState, useRef, useCallback, useEffect } from "react";
import { Stage, Layer, Image as KonvaImage, Text, Line } from "react-konva";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import PlotterControls from "./PlotterControls";

function KonvaPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <KonvaCanvas plotterPoints={plotterPoints} imageCount={imageCount} xGap={xGap} yGap={yGap} />
  );
}

function KonvaCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const [stageScale, setStageScale] = useState(1);
  const [stagePosition, setStagePosition] = useState({ x: 0, y: 0 });
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const margin = PLOT_MARGIN;
  const innerWidth = PLOT_DIMENSIONS.width - margin.left - margin.right;
  const innerHeight = PLOT_DIMENSIONS.height - margin.top - margin.bottom;

  const { xScale, yScale, xExtent, yExtent } = computeScales(plotterPoints, innerWidth, innerHeight, xGap, yGap);

  const handleStageWheel = useCallback((event) => {
    event.evt.preventDefault();
    const stage = event.target.getStage();
    const oldScale = stageScale;
    const pointerPosition = stage.getPointerPosition();

    const scaleDelta = event.evt.deltaY > 0 ? 0.9 : 1.1;
    const newScale = Math.max(0.3, Math.min(oldScale * scaleDelta, 10));

    const mousePointTo = {
      x: (pointerPosition.x - stagePosition.x) / oldScale,
      y: (pointerPosition.y - stagePosition.y) / oldScale,
    };

    setStageScale(newScale);
    setStagePosition({
      x: pointerPosition.x - mousePointTo.x * newScale,
      y: pointerPosition.y - mousePointTo.y * newScale,
    });
  }, [stageScale, stagePosition]);

  const handleStageDragEnd = useCallback((event) => {
    setStagePosition({
      x: event.target.x(),
      y: event.target.y(),
    });
  }, []);

  const handleZoomIn = () => setStageScale(Math.min(stageScale * 1.5, 10));
  const handleZoomOut = () => setStageScale(Math.max(stageScale / 1.5, 0.3));
  const handleReset = () => {
    setStageScale(1);
    setStagePosition({ x: 0, y: 0 });
  };

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
      <Stage
        width={PLOT_DIMENSIONS.width}
        height={PLOT_DIMENSIONS.height}
        scaleX={stageScale}
        scaleY={stageScale}
        x={stagePosition.x}
        y={stagePosition.y}
        draggable
        onWheel={handleStageWheel}
        onDragEnd={handleStageDragEnd}
      >
        <Layer>
          <AxisLines
            xScale={xScale}
            yScale={yScale}
            xExtent={xExtent}
            yExtent={yExtent}
            margin={margin}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />
          {plotterPoints.map((point) => (
            <ImagePointGroup
              key={point.id}
              point={point}
              xScale={xScale}
              yScale={yScale}
              margin={margin}
              imageCount={imageCount}
              onHover={setHoveredPoint}
              onCursorMove={setCursorPosition}
            />
          ))}
        </Layer>
      </Stage>

      {hoveredPoint && (
        <div
          className="plotter-tooltip"
          style={{
            display: "block",
            left: cursorPosition.x + 15,
            top: cursorPosition.y - 10,
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

function AxisLines({ xScale, yScale, xExtent, yExtent, margin, innerWidth, innerHeight }) {
  const tickCount = 5;
  const axisElements = [];

  for (let i = 0; i <= tickCount; i++) {
    const xValue = xExtent[0] + (xExtent[1] - xExtent[0]) * (i / tickCount);
    const xPosition = xScale(xValue) + margin.left;

    axisElements.push(
      <Line
        key={`xgrid-${i}`}
        points={[xPosition, margin.top, xPosition, margin.top + innerHeight]}
        stroke="#2a2a3e"
        strokeWidth={1}
        dash={[3, 3]}
      />
    );

    axisElements.push(
      <Text
        key={`xlabel-${i}`}
        text={Math.round(xValue).toString()}
        x={xPosition - 10}
        y={margin.top + innerHeight + 5}
        fill="#888"
        fontSize={11}
      />
    );
  }

  for (let i = 0; i <= tickCount; i++) {
    const yValue = yExtent[0] + (yExtent[1] - yExtent[0]) * (i / tickCount);
    const yPosition = yScale(yValue) + margin.top;

    axisElements.push(
      <Line
        key={`ygrid-${i}`}
        points={[margin.left, yPosition, margin.left + innerWidth, yPosition]}
        stroke="#2a2a3e"
        strokeWidth={1}
        dash={[3, 3]}
      />
    );

    axisElements.push(
      <Text
        key={`ylabel-${i}`}
        text={Math.round(yValue).toString()}
        x={margin.left - 30}
        y={yPosition - 6}
        fill="#888"
        fontSize={11}
      />
    );
  }

  return <>{axisElements}</>;
}

function ImagePointGroup({ point, xScale, yScale, margin, imageCount, onHover, onCursorMove }) {
  const centerX = xScale(point.x) + margin.left;
  const centerY = yScale(point.y) + margin.top;
  const positions = computeImagePositions(centerX, centerY, CELL_SIZE, CELL_SIZE, imageCount);

  return (
    <>
      {positions.map((position, index) => (
        <KonvaImageFromUrl
          key={`${point.id}-${index}`}
          imageUrl={point.image}
          x={position.x}
          y={position.y}
          width={position.width}
          height={position.height}
          point={point}
          onHover={onHover}
          onCursorMove={onCursorMove}
        />
      ))}
    </>
  );
}

function KonvaImageFromUrl({ imageUrl, x, y, width, height, point, onHover, onCursorMove }) {
  const [loadedImage, setLoadedImage] = useState(null);

  useEffect(() => {
    const htmlImage = new window.Image();
    htmlImage.crossOrigin = "anonymous";
    htmlImage.src = imageUrl;

    htmlImage.onload = () => setLoadedImage(htmlImage);

    return () => {
      htmlImage.onload = null;
    };
  }, [imageUrl]);

  const handleMouseEnter = useCallback((event) => {
    const stage = event.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    onCursorMove({ x: pointerPosition.x, y: pointerPosition.y });
    onHover(point);
  }, [point, onHover, onCursorMove]);

  const handleMouseLeave = useCallback(() => {
    onHover(null);
  }, [onHover]);

  if (!loadedImage) return null;

  return (
    <KonvaImage
      image={loadedImage}
      x={x}
      y={y}
      width={width}
      height={height}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

function computeScales(plotterPoints, innerWidth, innerHeight, xGap, yGap) {
  const xValues = plotterPoints.map((point) => point.x);
  const yValues = plotterPoints.map((point) => point.y);

  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);

  const xPadding = (xMax - xMin) * 0.15 || 5;
  const yPadding = (yMax - yMin) * 0.15 || 5;

  const xExtent = [xMin - xPadding, xMax + xPadding];
  const yExtent = [yMin - yPadding, yMax + yPadding];

  const xSpacingScale = xGap / 10;
  const ySpacingScale = yGap / 10;

  const xScale = (value) => {
    const ratio = (value - xExtent[0]) / (xExtent[1] - xExtent[0]);
    return ratio * innerWidth * xSpacingScale;
  };

  const yScale = (value) => {
    const ratio = (value - yExtent[0]) / (yExtent[1] - yExtent[0]);
    return innerHeight * ySpacingScale - ratio * innerHeight * ySpacingScale;
  };

  return { xScale, yScale, xExtent, yExtent };
}

export default KonvaPlotter;

```

---

# src\components\Navbar.jsx

```jsx
import { LIBRARIES } from "../lib/constants";

function Navbar({ activeTab, setActiveTab }) {
  return (
    <div className="tab-container">
      {LIBRARIES.map((libraryName) => (
        <button
          key={libraryName}
          className={`tab-button ${activeTab === libraryName ? "active" : ""}`}
          onClick={() => setActiveTab(libraryName)}
        >
          {libraryName}
        </button>
      ))}
    </div>
  );
}

export default Navbar;

```

---

# src\components\PixiPlotter.jsx

```jsx
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

```

---

# src\components\PlotterControls.jsx

```jsx
export default function PlotterControls({ onZoomIn, onZoomOut, onReset, zoomLevel }) {
  return (
    <div className="zoom-controls">
      <button className="zoom-button" onClick={onZoomIn}>+</button>
      <button className="zoom-button" onClick={onZoomOut}>−</button>
      <button className="zoom-button" onClick={onReset}>Reset</button>
      {zoomLevel !== undefined && (
        <span style={{ color: "#888", fontSize: "0.75rem", marginLeft: 8 }}>
          {Math.round(zoomLevel * 100)}%
        </span>
      )}
    </div>
  );
}

```

---

# src\components\RechartsPlotter.jsx

```jsx
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

```

---

# src\lib\constants.js

```javascript
export const LIBRARIES = [
  "Recharts",
  "D3",
  "PixiJS",
  "Konva",
  "DeckGL",
  "ECharts",
];

export const IMAGE_COUNTS = [1, 2, 4, 8];

export const CELL_SIZE = 50;

export const PLOT_DIMENSIONS = {
  width: 900,
  height: 600,
};

export const PLOT_MARGIN = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 50,
};

export const DATA_URL = "/data/data.json";

```

---

# src\lib\gridLayout.js

```javascript
/**
 * Computes sub-image positions within a cell for multi-image rendering.
 *
 * Given an imageCount (1, 2, 4, or 8), returns an array of
 * { offsetX, offsetY, width, height } objects describing
 * each sub-image's position relative to the cell center.
 */
export function computeGridOffsets(cellWidth, cellHeight, imageCount) {
  const gridConfig = getGridConfig(imageCount);
  const subWidth = cellWidth;
  const subHeight = cellHeight;
  const offsets = [];

  for (let row = 0; row < gridConfig.rows; row++) {
    for (let col = 0; col < gridConfig.columns; col++) {
      if (offsets.length >= imageCount) break;

      const xPos = col * subWidth - ((gridConfig.columns - 1) * subWidth) / 2;
      const yPos = row * subHeight - ((gridConfig.rows - 1) * subHeight) / 2;

      offsets.push({
        offsetX: xPos,
        offsetY: yPos,
        width: subWidth,
        height: subHeight,
      });
    }
  }

  return offsets;
}

/**
 * Returns grid rows/columns for a given image count.
 */
function getGridConfig(imageCount) {
  const configs = {
    1: { rows: 1, columns: 1 },
    2: { rows: 1, columns: 2 },
    4: { rows: 2, columns: 2 },
    8: { rows: 2, columns: 4 },
  };

  return configs[imageCount] || configs[1];
}

/**
 * Computes absolute positions for sub-images at a given coordinate.
 * Returns array of { x, y, width, height } for each sub-image.
 */
export function computeImagePositions(centerX, centerY, cellWidth, cellHeight, imageCount) {
  const offsets = computeGridOffsets(cellWidth, cellHeight, imageCount);

  return offsets.map((offset) => ({
    x: centerX + offset.offsetX - offset.width / 2,
    y: centerY + offset.offsetY - offset.height / 2,
    width: offset.width,
    height: offset.height,
  }));
}

```

---

# src\lib\plotterData.js

```javascript
import { useState, useEffect } from "react";
import { DATA_URL } from "./constants";

export function usePlotterData() {
  const [plotterPoints, setPlotterPoints] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    fetchPlotterData();
  }, []);

  const fetchPlotterData = async () => {
    try {
      setIsLoading(true);
      setLoadError(null);

      const response = await fetch(DATA_URL);

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

      const jsonData = await response.json();
      setPlotterPoints(jsonData);
    } catch (fetchError) {
      setLoadError(fetchError.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { plotterPoints, isLoading, loadError };
}

```

---

# src\main.jsx

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

