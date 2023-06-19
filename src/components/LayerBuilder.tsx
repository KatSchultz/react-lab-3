import React from "react";
import { Layer } from "../App";
import LayerDetail from "./LayerDetail";
interface Props {
  layers: Layer[];
  removeLayer: (layer: Layer) => void;
  selectLayer: (layer: Layer) => void;
}

export default function LayerBuilder({
  layers,
  removeLayer,
  selectLayer,
}: Props) {
  return (
    <div>
      <div className="layer-info-display">
        {layers.map((layer) => (
          <LayerDetail
            key={layer.id}
            layer={layer}
            removeLayer={removeLayer}
            selectLayer={selectLayer}
          />
        ))}
      </div>
    </div>
  );
}
