import { Layer } from "../App";
import CakeLayer from "./CakeLayer";

interface CakeProps {
  layers: Layer[];
  selectLayer: (layer: Layer) => void;
}

export default function Cake({ layers, selectLayer }: CakeProps) {
  return (
    <div>
      {layers.map((layer) => (
        <CakeLayer layer={layer} key={layer.id} selectLayer={selectLayer} />
      ))}
    </div>
  );
}
