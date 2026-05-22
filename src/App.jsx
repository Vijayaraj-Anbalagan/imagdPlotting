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
        return (
          <RechartsPlotter
            imageCount={imageCount}
            xGap={appliedXGap}
            yGap={appliedYGap}
          />
        );

      case "D3":
        return (
          <D3Plotter
            imageCount={imageCount}
            xGap={appliedXGap}
            yGap={appliedYGap}
          />
        );

      case "PixiJS":
        return (
          <PixiPlotter
            imageCount={imageCount}
            xGap={appliedXGap}
            yGap={appliedYGap}
          />
        );

      case "Konva":
        return (
          <KonvaPlotter
            imageCount={imageCount}
            xGap={appliedXGap}
            yGap={appliedYGap}
          />
        );

      case "DeckGL":
        return (
          <DeckGLPlotter
            imageCount={imageCount}
            xGap={appliedXGap}
            yGap={appliedYGap}
          />
        );

      case "ECharts":
        return (
          <EChartsPlotter
            imageCount={imageCount}
            xGap={appliedXGap}
            yGap={appliedYGap}
          />
        );

      default:
        return (
          <RechartsPlotter
            imageCount={imageCount}
            xGap={appliedXGap}
            yGap={appliedYGap}
          />
        );
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

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
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

export default App;
