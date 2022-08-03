import React from "react";

interface LayerAddProps {
  displayForm: () => void;
}

export default function LayerAdd({ displayForm }: LayerAddProps) {
  return (
    <div>
      <button onClick={displayForm}>Add Layer</button>
    </div>
  );
}
