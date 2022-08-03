import { useState } from "react";
import LayerAdd from "./LayerAdd";
import LayerBuilder from "./LayerBuilder";
import LayerForm from "./LayerForm";

export default function CakeBuilder() {
  const [formDisplay, setFormDisplay] = useState(true);

  function displayForm() {
    setFormDisplay(true);
  }

  function hideForm() {
    setFormDisplay(false);
  }

  return (
    <div>
      <LayerAdd displayForm={displayForm} />
      <LayerBuilder />
      {formDisplay && <LayerForm hideForm={hideForm} />}
    </div>
  );
}
