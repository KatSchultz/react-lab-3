import React from "react";

interface LayerFormProps {
  hideForm: () => void;
}

export default function LayerForm({ hideForm }: LayerFormProps) {
  return (
    <div>
      <form action="">
        <h2>Add a Layer</h2>
        <label htmlFor="">Color</label>
        <input type="color" />
        <label htmlFor="">Height</label>
        <input type="range" name="height" step={0.5} min=".5" max="10" />
        <label htmlFor="">Width</label>
        <input type="range" name="width" step={0.5} min="1" max="10" />
        <button className="save">Save</button>
        <button className="cancel" onClick={hideForm}>
          Cancel
        </button>
      </form>
    </div>
  );
}
