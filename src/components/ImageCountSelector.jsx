import { MAX_IMAGES_PER_POINT, MIN_IMAGES_PER_POINT } from "../lib/constants";

function ImageCountSelector({ imageCount, setImageCount }) {
  return (
    <div className="image-count-selector">
      <span className="selector-label">Images per point:</span>

      <input
        type="number"
        min={MIN_IMAGES_PER_POINT}
        max={MAX_IMAGES_PER_POINT}
        value={imageCount}
        onChange={(e) => setImageCount(e.target.value)}
        className="data-point-input"
      />

      <span
        style={{
          color: "#888",
          marginLeft: "10px",
        }}
      >
        Max: {MAX_IMAGES_PER_POINT}
      </span>
    </div>
  );
}

export default ImageCountSelector;
