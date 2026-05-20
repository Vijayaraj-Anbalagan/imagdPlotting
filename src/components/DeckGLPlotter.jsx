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
