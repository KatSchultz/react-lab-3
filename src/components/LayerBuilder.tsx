import React from "react";
import { Layer } from "../App";
interface Props {
  layers: Layer[];
  removeLayer: (layer: Layer) => void;
}

export default function LayerBuilder({ layers, removeLayer }: Props) {
  return (
    <div>
      <div className="layer-info-display">
        {layers.map((layer) => (
          <>
            <div className="builder-width">Width</div>
            <input
              type="range"
              name="width"
              step={0.5}
              min="1"
              max="10"
              value={layer.width}
              readOnly
            />
            <div className="builder-height">Height</div>
            <input
              type="range"
              name="height"
              step={0.5}
              min=".5"
              max="10"
              value={layer.height}
              readOnly
            />
            <div className="builder-color">Color</div>
            <input type="color" name="color" value={layer.color} readOnly />
            <button onClick={() => removeLayer(layer)}>Delete</button>
          </>
        ))}
      </div>
    </div>
  );
}
