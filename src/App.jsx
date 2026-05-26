import { useState, useMemo } from "react";

import Navbar from "./components/Navbar";
import ImageCountSelector from "./components/ImageCountSelector";
import DataPointCountControl from "./components/DataPointCountControl";

import RechartsPlotter from "./components/RechartsPlotter";
import D3Plotter from "./components/D3Plotter";
import PixiPlotter from "./components/PixiPlotter";
import KonvaPlotter from "./components/KonvaPlotter";

import { generateSyntheticPoints } from "./lib/syntheticDataGenerator";

import {
  DATA_POINT_LIMITS,
  MAX_IMAGES_PER_POINT,
  MIN_IMAGES_PER_POINT,
} from "./lib/constants";

import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Recharts");

  const [imageCount, setImageCount] = useState(1);

  const [dataPointCount, setDataPointCount] = useState(
    DATA_POINT_LIMITS.defaultCount,
  );

  const [appliedXGap, setAppliedXGap] = useState(10);

  const [appliedYGap, setAppliedYGap] = useState(10);

  const [draftXGap, setDraftXGap] = useState(10);

  const [draftYGap, setDraftYGap] = useState(10);

  const hasChanges = draftXGap !== appliedXGap || draftYGap !== appliedYGap;

  /**
   * Stable deterministic synthetic data.
   */
  const syntheticPoints = useMemo(() => {
    return generateSyntheticPoints(
      Math.max(
        DATA_POINT_LIMITS.min,
        Math.min(dataPointCount, DATA_POINT_LIMITS.max),
      ),
    );
  }, [dataPointCount]);

  const handleGapUpdate = () => {
    setAppliedXGap(draftXGap);
    setAppliedYGap(draftYGap);
  };

  /**
   * Critical normalization.
   */
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
    syntheticPoints,
  };

  const renderActivePlotter = () => {
    switch (activeTab) {
      case "Recharts":
        return <RechartsPlotter {...plotterProps} />;

      case "D3":
        return <D3Plotter {...plotterProps} />;

      case "PixiJS":
        return <PixiPlotter {...plotterProps} />;

      case "Konva":
        return <KonvaPlotter {...plotterProps} />;

      default:
        return <RechartsPlotter {...plotterProps} />;
    }
  };

  return (
    <div className="app-container">
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

      <div className="viewer-container">{renderActivePlotter()}</div>
    </div>
  );
}

export default App;
