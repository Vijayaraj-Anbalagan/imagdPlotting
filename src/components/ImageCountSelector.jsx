import { IMAGE_COUNTS } from "../lib/constants";

function ImageCountSelector({ imageCount, setImageCount }) {
  return (
    <div className="image-count-selector">
      <span className="selector-label">Images per point:</span>
      {IMAGE_COUNTS.map((count) => (
        <button
          key={count}
          className={`count-button ${imageCount === count ? "active" : ""}`}
          onClick={() => setImageCount(count)}
        >
          {count}
        </button>
      ))}
    </div>
  );
}

export default ImageCountSelector;
