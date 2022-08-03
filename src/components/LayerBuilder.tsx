import React from "react";

export default function LayerBuilder() {
  return (
    <div>
      <div className="layer-info-display">
        <div className="builder-width">Width</div>
        <div className="builder-height">Height</div>
        <div className="builder-color">Color</div>
        <button>Delete</button>
      </div>
    </div>
  );
}
