import React, { useState } from "react";
import "./App.css";
import Cake from "./components/Cake";
import CakeBuilder from "./components/CakeBuilder";

export interface Layer {
  height: number;
  width: number;
  color: string;
  id: string;
  selected: boolean;
}

function App() {
  const [layers, setLayers] = useState([
    { height: 0.5, width: 3, color: "#87ceeb", id: "abc", selected: false },
    { height: 1, width: 4, color: "#87ceeb", id: "def", selected: false },
    { height: 2, width: 5, color: "#87ceeb", id: "ghi", selected: false },
  ]);

  const addLayer = (newLayer: Layer) => {
    setLayers((prev) => [...prev, newLayer]);
  };

  const selectLayer = (layer: Layer) => {
    const arr = layers.slice();
    arr.forEach((elem, index) => (arr[index].selected = false));
    const index = layers.indexOf(layer);
    arr[index].selected = true;
    setLayers(arr);
  };

  const removeLayer = (layer: Layer) => {
    const arr = layers.slice();
    const index = arr.indexOf(layer);
    arr.splice(index, 1);
    setLayers(arr);
  };

  console.log(layers);
  return (
    <div className="App">
      <CakeBuilder
        layers={layers}
        addLayer={addLayer}
        removeLayer={removeLayer}
        selectLayer={selectLayer}
      />
      <Cake layers={layers} selectLayer={selectLayer} />
    </div>
  );
}

export default App;
