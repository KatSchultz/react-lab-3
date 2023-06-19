import { useState } from "react";
import LayerAdd from "./LayerAdd";
import LayerBuilder from "./LayerBuilder";
import LayerForm from "./LayerForm";
import { Layer } from "../App";

interface Props {
  layers: Layer[];
  addLayer: (layer: Layer) => void;
  removeLayer: (layer: Layer) => void;
}

export default function CakeBuilder({ layers, addLayer, removeLayer }: Props) {
  const [formDisplay, setFormDisplay] = useState(true);
  console.log("Form display state: ", formDisplay);

  function displayForm() {
    console.log("display form clicked");
    setFormDisplay(true);
  }

  function hideForm() {
    setFormDisplay(false);
  }

  return (
    <div className="bg-slate-100">
      <LayerAdd displayForm={displayForm} />
      <LayerBuilder layers={layers} removeLayer={removeLayer} />
      {formDisplay && <LayerForm hideForm={hideForm} addLayer={addLayer} />}
    </div>
  );
}
