import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Cake from "./components/Cake";
import CakeBuilder from "./components/CakeBuilder";

export interface Layer {
  height: number;
  width: number;
  color: string;
  index: number;
}

function App() {
  const [layers, setLayers] = useState([
    { height: 0.5, width: 3, color: "skyblue", index: 0 },
    { height: 1, width: 4, color: "skyblue", index: 1 },
    { height: 2, width: 5, color: "skyblue", index: 2 },
  ]);

  const addLayer = (newLayer: Layer) => {
    setLayers((prev) => [...prev, newLayer]);
  };
  console.log(layers.length);
  return (
    <div className="App">
      <CakeBuilder addLayer={addLayer} />
      <Cake layers={layers} />
    </div>
  );
}

export default App;
