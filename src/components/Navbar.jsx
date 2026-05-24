import { LIBRARIES, DISABLED_LIBRARIES } from "../lib/constants";

function Navbar({ activeTab, setActiveTab }) {
  return (
    <div className="tab-container">
      {LIBRARIES.map((libraryName) => {
        const isDisabled = DISABLED_LIBRARIES.includes(libraryName);

        return (
          <button
            key={libraryName}
            className={`tab-button ${activeTab === libraryName ? "active" : ""} ${isDisabled ? "disabled" : ""}`}
            onClick={() => !isDisabled && setActiveTab(libraryName)}
            disabled={isDisabled}
            title={isDisabled ? `${libraryName} is disabled for this test` : ""}
          >
            {libraryName}
          </button>
        );
      })}
    </div>
  );
}

export default Navbar;
