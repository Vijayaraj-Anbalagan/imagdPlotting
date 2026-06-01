"use client";

const DATA_POINT_OPTIONS = [100, 500, 1000];

export default function DataPointCountControl({
  dataPointCount,
  onDataPointCountChange,
}) {
  return (
    <div className="dp-control">
      {/* Header */}
      <div className="dp-header">
        <h3 className="dp-title">Data Points</h3>

        <span className="dp-selected">{dataPointCount} selected</span>
      </div>

      {/* Buttons */}
      <div className="dp-buttons">
        {DATA_POINT_OPTIONS.map((count) => {
          const isActive = dataPointCount === count;

          return (
            <button
              key={count}
              onClick={() => onDataPointCountChange(count)}
              className={`dp-button ${isActive ? "active" : ""}`}
            >
              {count}
            </button>
          );
        })}
      </div>
    </div>
  );
}
