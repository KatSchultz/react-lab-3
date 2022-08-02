import React from "react";
import "./CakeLayer.css";
import { Layer } from "../App";

interface CakeLayerProps {
  layer: Layer;
}

export default function CakeLayer({ layer }: CakeLayerProps) {
  const widthCalc = layer.width * 10;
  const heightCalc = layer.height * 10;

  const styles = {
    width: widthCalc + "rem",
    height: heightCalc + "rem",
    backgroundColor: layer.color,
  };

  return (
    <div className="layer-holder">
      <div className="cake-layer" style={styles}>
        I'm a layer
      </div>
    </div>
  );
}
