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
