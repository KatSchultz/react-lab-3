import React from "react";
import { Layer } from "../App";
import LayerDetail from "./LayerDetail";
interface Props {
  layers: Layer[];
  removeLayer: (layer: Layer) => void;
}

export default function LayerBuilder({ layers, removeLayer }: Props) {
  return (
    <div>
      <div className="layer-info-display">
        {layers.map((layer) => (
          <LayerDetail layer={layer} removeLayer={removeLayer} />
        ))}
      </div>
    </div>
  );
}
