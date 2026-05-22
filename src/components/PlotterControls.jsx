export default function PlotterControls({
  onZoomIn,
  onZoomOut,
  onReset,
  zoomLevel,
}) {
  return (
    <div className="zoom-controls">
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
