"use client";

import { useState } from "react";
import { DATA_POINT_LIMITS } from "../lib/constants";

const DATA_POINT_OPTIONS = [100, 500, 1000];

export default function DataPointCountControl({
  dataPointCount,
  onDataPointCountChange,
}) {
  const [customValue, setCustomValue] = useState("");

  const applyCustom = () => {
    const parsed = Number(customValue);
    if (!Number.isFinite(parsed)) return;
    const clamped = Math.max(
      DATA_POINT_LIMITS.min,
      Math.min(DATA_POINT_LIMITS.max, Math.floor(parsed)),
    );
    onDataPointCountChange(clamped);
    setCustomValue(String(clamped));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") applyCustom();
  };

  // A preset is "active" only when the current count matches it exactly; any
  // other value came from the custom input.
  const isCustomActive = !DATA_POINT_OPTIONS.includes(dataPointCount);

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

        {/* Custom count: type any value in range, apply with Set or Enter. */}
        <div className={`dp-custom ${isCustomActive ? "active" : ""}`}>
          <input
            type="number"
            min={DATA_POINT_LIMITS.min}
            max={DATA_POINT_LIMITS.max}
            value={customValue}
            placeholder={`Custom (${DATA_POINT_LIMITS.min}–${DATA_POINT_LIMITS.max})`}
            onChange={(event) => setCustomValue(event.target.value)}
            onKeyDown={handleKeyDown}
            className="dp-input"
          />
          <button
            type="button"
            onClick={applyCustom}
            disabled={customValue === ""}
            className="dp-button dp-apply"
          >
            Set
          </button>
        </div>
      </div>
    </div>
  );
}
