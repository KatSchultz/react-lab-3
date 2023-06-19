import React from "react";

interface LayerAddProps {
  displayForm: () => void;
}

export default function LayerAdd({ displayForm }: LayerAddProps) {
  return (
    <div>
      <button
        onClick={displayForm}
        className="rounded-none w-full text-lg font-bold bg-slate-200 p-1"
      >
        Add Layer
      </button>
    </div>
  );
}
