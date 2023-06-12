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
            <div className="builder-width">
              <label htmlFor="">Width</label>
              <input
                type="range"
                name="width"
                step={0.5}
                min="1"
                max="10"
                value={layer.width}
                readOnly
              />
            </div>
            <div className="builder-height">
              <label htmlFor="">Height</label>
              <input
                type="range"
                name="height"
                step={0.5}
                min=".5"
                max="10"
                value={layer.height}
                readOnly
              />
            </div>
            <div className="builder-color">
              <label htmlFor="">Color</label>
              <input type="color" name="color" value={layer.color} readOnly />
              <button onClick={() => removeLayer(layer)}>Delete</button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
