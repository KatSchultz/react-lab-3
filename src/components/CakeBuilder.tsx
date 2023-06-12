import { useState } from "react";
import LayerAdd from "./LayerAdd";
import LayerBuilder from "./LayerBuilder";
import LayerForm from "./LayerForm";
import { Layer } from "../App";

interface Props {
  addLayer: (layer: Layer) => void;
}

export default function CakeBuilder({ addLayer }: Props) {
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
    <div>
      <LayerAdd displayForm={displayForm} />
      <LayerBuilder />
      {formDisplay && <LayerForm hideForm={hideForm} addLayer={addLayer} />}
    </div>
  );
}
