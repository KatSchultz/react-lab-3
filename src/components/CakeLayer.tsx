import React from "react";
import "./CakeLayer.css";
import { Layer } from "../App";

interface CakeLayerProps {
  layer: Layer;
  selectLayer: (layer: Layer) => void;
}

export default function CakeLayer({ layer, selectLayer }: CakeLayerProps) {
  const widthCalc = layer.width * 5;
  const heightCalc = layer.height * 5;

  const styles = {
    width: widthCalc + "rem",
    height: heightCalc + "rem",
    backgroundColor: layer.color,
  };

  const stylesSelected = {
    width: widthCalc + "rem",
    height: heightCalc + "rem",
    backgroundColor: layer.color,
    border: "3px solid yellow",
  };

  return (
    <div className="layer-holder" onClick={() => selectLayer(layer)}>
      <div
        className="cake-layer"
        style={layer.selected ? stylesSelected : styles}
      >
        I'm a layer
      </div>
    </div>
  );
}
