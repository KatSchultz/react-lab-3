import React, { useState } from "react";
import "./App.css";
import Cake from "./components/Cake";
import CakeBuilder from "./components/CakeBuilder";

export interface Layer {
  height: number;
  width: number;
  color: string;
  id: string;
}

function App() {
  const [layers, setLayers] = useState([
    { height: 0.5, width: 3, color: "#87ceeb", id: "abc" },
    { height: 1, width: 4, color: "#87ceeb", id: "def" },
    { height: 2, width: 5, color: "#87ceeb", id: "ghi" },
  ]);

  const addLayer = (newLayer: Layer) => {
    setLayers((prev) => [...prev, newLayer]);
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
      />
      <Cake layers={layers} />
    </div>
  );
}

export default App;
