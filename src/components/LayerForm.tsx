import { ChangeEvent, FormEvent, useState } from "react";
import { Layer } from "../App";
import "./LayerForm.css";
interface LayerFormProps {
  hideForm: () => void;
  addLayer: (layer: Layer) => void;
}

export default function LayerForm({ hideForm, addLayer }: LayerFormProps) {
  const [newLayer, setNewLayer] = useState<Layer>({
    height: 0,
    width: 0,
    color: "#ffffff",
    index: 3,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewLayer({ ...newLayer, ...{ [e.target.name]: e.target.value } });
    console.log("changed ", e.target.value);
    console.log(newLayer);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    addLayer(newLayer);
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <h2>Add a Layer</h2>
        <label htmlFor="">Color</label>
        <input
          type="color"
          name="color"
          value={newLayer.color}
          onChange={handleChange}
        />
        <label htmlFor="">Height</label>
        <input
          type="range"
          name="height"
          step={0.5}
          min=".5"
          max="10"
          value={newLayer.height}
          onChange={handleChange}
        />
        <label htmlFor="">Width</label>
        <input
          type="range"
          name="width"
          step={0.5}
          min="1"
          max="10"
          value={newLayer.width}
          onChange={handleChange}
        />
        <button type="submit" className="save">
          Save
        </button>
        <button className="cancel" onClick={hideForm}>
          Cancel
        </button>
      </form>
    </div>
  );
}
