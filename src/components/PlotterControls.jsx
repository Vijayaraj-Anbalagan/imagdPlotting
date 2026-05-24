import { INTERACTION_MODES } from "../lib/interactionMode";

function ZoomIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function PanIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 11V6a2 2 0 0 0-4 0v5" />
      <path d="M14 10V4a2 2 0 0 0-4 0v6" />
      <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}

export default function PlotterControls({
  onZoomIn,
  onZoomOut,
  onReset,
  zoomLevel,
  interactionMode,
  onModeChange,
}) {
  const isZoomActive = interactionMode === INTERACTION_MODES.ZOOM;
  const isPanActive = interactionMode === INTERACTION_MODES.PAN;

  return (
    <div className="zoom-controls">
      {onModeChange && (
        <>
          <button
            className={`mode-button ${isZoomActive ? "active" : ""}`}
            onClick={() => onModeChange(INTERACTION_MODES.ZOOM)}
            title="Zoom Mode — drag to select zoom area"
          >
            <ZoomIcon />
            <span>Zoom</span>
          </button>
          <button
            className={`mode-button ${isPanActive ? "active" : ""}`}
            onClick={() => onModeChange(INTERACTION_MODES.PAN)}
            title="Pan Mode — drag to move the chart"
          >
            <PanIcon />
            <span>Pan</span>
          </button>
          <span className="mode-separator" />
        </>
      )}

      <button className="zoom-button" onClick={onZoomIn}>
        +
      </button>
      <button className="zoom-button" onClick={onZoomOut}>
        −
      </button>
      <button className="zoom-button" onClick={onReset}>
        Reset
      </button>
      {zoomLevel !== undefined && (
        <span style={{ color: "#888", fontSize: "0.75rem", marginLeft: 8 }}>
          {Math.round(zoomLevel * 100)}%
        </span>
      )}
    </div>
  );
}
