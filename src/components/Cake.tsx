import { Layer } from "../App";
import CakeLayer from "./CakeLayer";

interface CakeProps {
  layers: Layer[];
}

export default function Cake({ layers }: CakeProps) {
  return (
    <div>
      {layers.map((layer) => (
        <CakeLayer layer={layer} />
      ))}
    </div>
  );
}
