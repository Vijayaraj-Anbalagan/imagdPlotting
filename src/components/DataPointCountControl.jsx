import { useState, useCallback } from "react";

const MIN_DATA_POINTS = 1;
const MAX_DATA_POINTS = 10000;
const SLIDER_STEP = 1;

function DataPointCountControl({ dataPointCount, onDataPointCountChange }) {
  const [inputValue, setInputValue] = useState(String(dataPointCount));

  const handleSliderChange = useCallback(
    (event) => {
      const newCount = Number(event.target.value);
      setInputValue(String(newCount));
      onDataPointCountChange(newCount);
    },
    [onDataPointCountChange],
  );

  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  const handleInputBlur = useCallback(() => {
    const parsedValue = parseInt(inputValue, 10);

    if (Number.isNaN(parsedValue)) {
      setInputValue(String(dataPointCount));
      return;
    }

    const clampedValue = Math.max(
      MIN_DATA_POINTS,
      Math.min(parsedValue, MAX_DATA_POINTS),
    );

    setInputValue(String(clampedValue));
    onDataPointCountChange(clampedValue);
  }, [inputValue, dataPointCount, onDataPointCountChange]);

  const handleInputKeyDown = useCallback(
    (event) => {
      if (event.key === "Enter") {
        handleInputBlur();
      }
    },
    [handleInputBlur],
  );

  return (
    <div className="data-point-control">
      <label className="data-point-label" htmlFor="dataPointSlider">
        Data Points:
      </label>

      <input
        id="dataPointSlider"
        type="range"
        min={MIN_DATA_POINTS}
        max={MAX_DATA_POINTS}
        step={SLIDER_STEP}
        value={dataPointCount}
        onChange={handleSliderChange}
        className="data-point-slider"
      />

      <input
        type="number"
        min={MIN_DATA_POINTS}
        max={MAX_DATA_POINTS}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        onKeyDown={handleInputKeyDown}
        className="data-point-input"
      />

      <span className="data-point-count-badge">{dataPointCount}</span>
    </div>
  );
}

export default DataPointCountControl;
