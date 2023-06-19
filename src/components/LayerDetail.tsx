import React from "react";
import { Layer } from "../App";

interface LayerDetailProps {
  layer: Layer;
  removeLayer: (layer: Layer) => void;
  selectLayer: (layer: Layer) => void;
}

export default function LayerDetail({
  layer,
  removeLayer,
  selectLayer,
}: LayerDetailProps) {
  const styles = { backgroundColor: "lightyellow" };

  return (
    <div
      className="p-2 border-b-2 border-slate-500"
      style={layer.selected ? styles : {}}
      onClick={() => selectLayer(layer)}
    >
      <div className="flex">
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
        <div className="builder-height pl-2">
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
      </div>
      <div className="flex justify-between">
        <div>
          <label htmlFor="">Color</label>
          <input type="color" name="color" value={layer.color} readOnly />
        </div>
        <button
          onClick={() => removeLayer(layer)}
          className="border-2 border-red-600 rounded text-red-600 bg-white p-1"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
