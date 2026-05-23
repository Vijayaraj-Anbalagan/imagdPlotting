import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { usePlotterData } from "../lib/plotterData";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";

import { computeImagePositions } from "../lib/gridLayout";
import {
  CELL_SIZE,
  PLOT_DIMENSIONS,
  PLOT_MARGIN,
  BRUSH_ZOOM,
  ZOOM_SCALE_FACTOR,
  WHEEL_ZOOM_SENSITIVITY,
} from "../lib/constants";
import PlotterControls from "./PlotterControls";

/* ─── Entry Component ───────────────────────────────────────────── */

function D3Plotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <D3PlotCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

/* ─── Canvas Wrapper ────────────────────────────────────────────── */

function D3PlotCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const containerRef = useRef(null);
  const plotControlsRef = useRef(null);

  const originalXDomainRef = useRef(null);
  const originalYDomainRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setContainerWidth(entry.contentRect.width);
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || plotterPoints.length === 0) return;

    plotControlsRef.current = initializePlot(
      svgRef.current,
      tooltipRef.current,
      plotterPoints,
      imageCount,
      containerWidth,
      xGap,
      yGap,
      originalXDomainRef,
      originalYDomainRef,
    );
  }, [plotterPoints, imageCount, containerWidth, xGap, yGap]);

  const handleZoomIn = () => plotControlsRef.current?.zoomIn();
  const handleZoomOut = () => plotControlsRef.current?.zoomOut();
  const handleReset = () => plotControlsRef.current?.resetZoom();

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
      <svg ref={svgRef} />
      <div
        ref={tooltipRef}
        className="plotter-tooltip"
        style={{ display: "none" }}
      />
    </div>
  );
}

/* ─── Plot Initialization ───────────────────────────────────────── */

function initializePlot(
  svgElement,
  tooltipElement,
  plotterPoints,
  imageCount,
  containerWidth,
  xGap,
  yGap,
  originalXDomainRef,
  originalYDomainRef,
) {
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

  originalXDomainRef.current = xScale.domain().slice();
  originalYDomainRef.current = yScale.domain().slice();

  const clipId = "plot-clip-" + Math.random().toString(36).slice(2);
  svg
    .append("defs")
    .append("clipPath")
    .attr("id", clipId)
    .append("rect")
    .attr("width", innerWidth)
    .attr("height", innerHeight);

  const rootGroup = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const plotGroup = rootGroup.append("g").attr("clip-path", `url(#${clipId})`);
  const contentGroup = plotGroup.append("g");

  renderAxes(rootGroup, xScale, yScale, innerWidth, innerHeight);
  renderGrid(contentGroup, xScale, yScale, innerWidth, innerHeight);
  renderImagePoints(
    contentGroup,
    plotterPoints,
    xScale,
    yScale,
    imageCount,
    tooltipElement,
  );

  const redrawContext = {
    contentGroup,
    rootGroup,
    xScale,
    yScale,
    innerWidth,
    innerHeight,
    plotterPoints,
    imageCount,
    tooltipElement,
    originalXDomain: originalXDomainRef.current,
    originalYDomain: originalYDomainRef.current,
  };

  const triggerRedraw = () => redrawPlotContent(redrawContext);

  attachBrushZoom(plotGroup, xScale, yScale, innerWidth, innerHeight, triggerRedraw);
  attachWheelZoom(svg, margin, xScale, yScale, innerWidth, innerHeight, triggerRedraw);
  attachDoubleClickReset(svg, xScale, yScale, originalXDomainRef, originalYDomainRef, triggerRedraw);

  return buildPlotControls(xScale, yScale, originalXDomainRef, originalYDomainRef, triggerRedraw);
}

/* ─── Scale Builders ────────────────────────────────────────────── */

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

/* ─── Brush Zoom ────────────────────────────────────────────────── */

function attachBrushZoom(plotGroup, xScale, yScale, innerWidth, innerHeight, redrawCallback) {
  const brush = d3
    .brush()
    .extent([[0, 0], [innerWidth, innerHeight]])
    .filter((event) => !event.shiftKey && !event.ctrlKey)
    .on("end", (event) => {
      handleBrushEnd(event, brush, plotGroup, xScale, yScale, redrawCallback);
    });

  plotGroup
    .append("g")
    .attr("class", "d3-brush")
    .call(brush);
}

function handleBrushEnd(event, brush, plotGroup, xScale, yScale, redrawCallback) {
  const selection = event.selection;
  if (!selection) return;

  const [[pixelX0, pixelY0], [pixelX1, pixelY1]] = selection;
  const selectionWidth = pixelX1 - pixelX0;
  const selectionHeight = pixelY1 - pixelY0;

  if (selectionWidth < BRUSH_ZOOM.minimumSelectionPixels ||
      selectionHeight < BRUSH_ZOOM.minimumSelectionPixels) {
    plotGroup.select(".d3-brush").call(brush.move, null);
    return;
  }

  logChartInteractionEvent({
    interactionType: "ZOOM_IN",
    visualizationLibrary: "D3",
    interactionSource: "brush",
  });

  const newXDomain = [xScale.invert(pixelX0), xScale.invert(pixelX1)];
  const newYDomain = [yScale.invert(pixelY1), yScale.invert(pixelY0)];

  xScale.domain(newXDomain);
  yScale.domain(newYDomain);

  plotGroup.select(".d3-brush").call(brush.move, null);
  redrawCallback();
}

/* ─── Wheel Zoom ────────────────────────────────────────────────── */

function attachWheelZoom(svg, margin, xScale, yScale, innerWidth, innerHeight, redrawCallback) {
  svg.on("wheel.zoom", (event) => {
    event.preventDefault();
    handleWheelZoom(event, margin, xScale, yScale, innerWidth, innerHeight, redrawCallback);
  }, { passive: false });
}

function handleWheelZoom(event, margin, xScale, yScale, innerWidth, innerHeight, redrawCallback) {
  const zoomFactor = Math.exp(-event.deltaY * WHEEL_ZOOM_SENSITIVITY);

  const svgRect = event.currentTarget.getBoundingClientRect();
  const cursorX = event.clientX - svgRect.left - margin.left;
  const cursorY = event.clientY - svgRect.top - margin.top;

  const isCursorInsidePlot =
    cursorX >= 0 && cursorX <= innerWidth &&
    cursorY >= 0 && cursorY <= innerHeight;

  if (!isCursorInsidePlot) return;

  const isZoomIn = event.deltaY < 0;
  logChartInteractionEvent({
    interactionType: isZoomIn ? "ZOOM_IN" : "ZOOM_OUT",
    visualizationLibrary: "D3",
    interactionSource: "wheel",
  });

  const anchorDataX = xScale.invert(cursorX);
  const anchorDataY = yScale.invert(cursorY);

  zoomDomainAroundAnchor(xScale, anchorDataX, zoomFactor);
  zoomDomainAroundAnchor(yScale, anchorDataY, zoomFactor);

  redrawCallback();
}

/* ─── Pan (Shift + Drag) ───────────────────────────────────────── */

function attachDoubleClickReset(svg, xScale, yScale, originalXDomainRef, originalYDomainRef, redrawCallback) {
  svg.on("dblclick.zoom", () => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "D3",
      interactionSource: "double_click",
    });
    resetDomains(xScale, yScale, originalXDomainRef, originalYDomainRef);
    redrawCallback();
  });
}

/* ─── Domain Manipulation Helpers ───────────────────────────────── */

function zoomDomainAroundAnchor(scale, anchorValue, zoomFactor) {
  const [domainMin, domainMax] = scale.domain();
  const newMin = anchorValue - (anchorValue - domainMin) / zoomFactor;
  const newMax = anchorValue + (domainMax - anchorValue) / zoomFactor;
  scale.domain([newMin, newMax]);
}

function zoomDomainAroundCenter(scale, zoomFactor) {
  const [domainMin, domainMax] = scale.domain();
  const center = (domainMin + domainMax) / 2;
  zoomDomainAroundAnchor(scale, center, zoomFactor);
}

function resetDomains(xScale, yScale, originalXDomainRef, originalYDomainRef) {
  xScale.domain(originalXDomainRef.current.slice());
  yScale.domain(originalYDomainRef.current.slice());
}

/* ─── Plot Controls (Button Handlers) ──────────────────────────── */

function buildPlotControls(xScale, yScale, originalXDomainRef, originalYDomainRef, redrawCallback) {
  return {
    zoomIn: () => {
      logChartInteractionEvent({
        interactionType: "ZOOM_IN",
        visualizationLibrary: "D3",
        interactionSource: "button",
      });
      zoomDomainAroundCenter(xScale, ZOOM_SCALE_FACTOR);
      zoomDomainAroundCenter(yScale, ZOOM_SCALE_FACTOR);
      redrawCallback();
    },
    zoomOut: () => {
      logChartInteractionEvent({
        interactionType: "ZOOM_OUT",
        visualizationLibrary: "D3",
        interactionSource: "button",
      });
      zoomDomainAroundCenter(xScale, 1 / ZOOM_SCALE_FACTOR);
      zoomDomainAroundCenter(yScale, 1 / ZOOM_SCALE_FACTOR);
      redrawCallback();
    },
    resetZoom: () => {
      logChartInteractionEvent({
        interactionType: "RESET",
        visualizationLibrary: "D3",
        interactionSource: "button",
      });
      resetDomains(xScale, yScale, originalXDomainRef, originalYDomainRef);
      redrawCallback();
    },
  };
}

/* ─── Content Redraw Pipeline ───────────────────────────────────── */

function redrawPlotContent(context) {
  const {
    contentGroup,
    rootGroup,
    xScale,
    yScale,
    innerWidth,
    innerHeight,
    plotterPoints,
    imageCount,
    tooltipElement,
    originalXDomain,
    originalYDomain,
  } = context;

  const zoomedCellSize = computeZoomScaledCellSize(
    xScale,
    yScale,
    originalXDomain,
    originalYDomain,
  );

  contentGroup.selectAll(".grid-lines, .image-point").remove();

  renderGrid(contentGroup, xScale, yScale, innerWidth, innerHeight);
  renderImagePoints(
    contentGroup,
    plotterPoints,
    xScale,
    yScale,
    imageCount,
    tooltipElement,
    zoomedCellSize,
  );

  updateAxes(rootGroup, xScale, yScale);
}

function computeZoomScaledCellSize(xScale, yScale, originalXDomain, originalYDomain) {
  const originalXSpan = originalXDomain[1] - originalXDomain[0];
  const originalYSpan = originalYDomain[1] - originalYDomain[0];

  const currentXDomain = xScale.domain();
  const currentYDomain = yScale.domain();
  const currentXSpan = currentXDomain[1] - currentXDomain[0];
  const currentYSpan = currentYDomain[1] - currentYDomain[0];

  const xZoomFactor = originalXSpan / currentXSpan;
  const yZoomFactor = originalYSpan / currentYSpan;
  const uniformZoomFactor = Math.sqrt(xZoomFactor * yZoomFactor);

  const MAX_ZOOM_SCALE = 5;
  const clampedFactor = Math.min(Math.max(uniformZoomFactor, 0.3), MAX_ZOOM_SCALE);

  return CELL_SIZE * clampedFactor;
}

/* ─── Axes ──────────────────────────────────────────────────────── */

function renderAxes(container, xScale, yScale, innerWidth, innerHeight) {
  container
    .append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${innerHeight})`)
    .call(d3.axisBottom(xScale).ticks(8))
    .selectAll("text")
    .attr("fill", "#888");

  container
    .append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(yScale).ticks(6))
    .selectAll("text")
    .attr("fill", "#888");

  styleAxisElements(container);
}

function updateAxes(container, xScale, yScale) {
  container.select(".x-axis").call(d3.axisBottom(xScale).ticks(8));
  container.select(".y-axis").call(d3.axisLeft(yScale).ticks(6));

  container.selectAll(".x-axis text, .y-axis text").attr("fill", "#888");
  styleAxisElements(container);
}

function styleAxisElements(container) {
  container.selectAll(".x-axis line, .y-axis line").attr("stroke", "#555");
  container.selectAll(".x-axis path, .y-axis path").attr("stroke", "#555");
}

/* ─── Grid ──────────────────────────────────────────────────────── */

function renderGrid(container, xScale, yScale, innerWidth, innerHeight) {
  const gridGroup = container
    .append("g")
    .attr("class", "grid-lines");

  gridGroup
    .selectAll("line.horizontal")
    .data(yScale.ticks(6))
    .enter()
    .append("line")
    .attr("class", "horizontal")
    .attr("x1", 0)
    .attr("x2", innerWidth)
    .attr("y1", (tick) => yScale(tick))
    .attr("y2", (tick) => yScale(tick))
    .attr("stroke", "#2a2a3e")
    .attr("stroke-dasharray", "3 3");

  gridGroup
    .selectAll("line.vertical")
    .data(xScale.ticks(8))
    .enter()
    .append("line")
    .attr("class", "vertical")
    .attr("x1", (tick) => xScale(tick))
    .attr("x2", (tick) => xScale(tick))
    .attr("y1", 0)
    .attr("y2", innerHeight)
    .attr("stroke", "#2a2a3e")
    .attr("stroke-dasharray", "3 3");
}

/* ─── Image Points ──────────────────────────────────────────────── */

function renderImagePoints(
  container,
  plotterPoints,
  xScale,
  yScale,
  imageCount,
  tooltipElement,
  cellSize = CELL_SIZE,
) {
  const tooltip = d3.select(tooltipElement);

  plotterPoints.forEach((point) => {
    const centerX = xScale(point.x);
    const centerY = yScale(point.y);
    const positions = computeImagePositions(
      centerX,
      centerY,
      cellSize,
      cellSize,
      imageCount,
    );

    const pointGroup = container.append("g").attr("class", "image-point");

    positions.forEach((position) => {
      pointGroup
        .append("image")
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

/* ─── Tooltip ───────────────────────────────────────────────────── */

function showTooltip(tooltip, event, point) {
  tooltip
    .style("display", "block")
    .html(
      `<div class="tooltip-label">${point.label}</div>` +
        `<div class="tooltip-meta">` +
        `<span>Interval: ${point.meta.interval}s</span>` +
        `<span>Angle: ${point.meta.angle}°</span>` +
        `<span>Quality: ${point.meta.quality}</span>` +
        `</div>`,
    );

  moveTooltip(tooltip, event);
}

function moveTooltip(tooltip, event) {
  const containerRect = event.currentTarget
    .closest(".viewer-container")
    ?.getBoundingClientRect();
  if (!containerRect) return;

  tooltip
    .style("left", `${event.clientX - containerRect.left + 12}px`)
    .style("top", `${event.clientY - containerRect.top - 10}px`);
}

function hideTooltip(tooltip) {
  tooltip.style("display", "none");
}

export default D3Plotter;
