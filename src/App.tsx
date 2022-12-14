import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Cake from "./components/Cake";
import CakeBuilder from "./components/CakeBuilder";

export interface Layer {
  height: number;
  width: number;
  color: string;
}

function App() {
  const [layers, setLayers] = useState([
    { height: 0.5, width: 3, color: "skyblue" },
    { height: 1, width: 4, color: "skyblue" },
    { height: 2, width: 5, color: "skyblue" },
  ]);

  return (
    <div className="App">
      <CakeBuilder />
      <Cake layers={layers} />
    </div>
  );
}

export default App;
