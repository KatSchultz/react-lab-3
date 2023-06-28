import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Layer } from "../App";
import "./LayerForm.css";
interface LayerFormProps {
  hideForm: () => void;
  addLayer: (layer: Layer) => void;
}

export default function LayerForm({ hideForm, addLayer }: LayerFormProps) {
  const [newLayer, setNewLayer] = useState<Layer>({
    height: 2,
    width: 5,
    color: "#ffffff",
    id: "",
    selected: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "width" || e.target.name === "height") {
      setNewLayer({
        ...newLayer,
        ...{ [e.target.name]: Number(e.target.value) },
      });
    } else {
      setNewLayer({ ...newLayer, ...{ [e.target.name]: e.target.value } });
    }
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    addLayer({ ...newLayer, id: uuidv4() });
  };

  return (
    <div className="p-2">
      <form action="" onSubmit={submitHandler}>
        <h2 className="text-center font-bold">Add a Layer</h2>
        <div className="flex">
          <label htmlFor="" className="pl-2">
            Width
          </label>
          <input
            type="range"
            name="width"
            step={0.5}
            min="1"
            max="10"
            value={newLayer.width}
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
        </div>
        <div className="flex">
          <label htmlFor="">Color</label>
          <input
            type="color"
            name="color"
            value={newLayer.color}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="save text-blue-800 font-bold">
          Save
        </button>
        <button className="cancel text-red-600 font-bold" onClick={hideForm}>
          Cancel
        </button>
      </form>
    </div>
  );
}
