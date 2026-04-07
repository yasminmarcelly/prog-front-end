"use client";

import { useState } from "react";

export default function Dado({ valorExterno = null, onRolar }) {
  const [valor, setValor] = useState(null);

  const valorExibido = valorExterno ?? valor;

  const jogarDado = () => {
    const resultado = Math.floor(Math.random() * 6) + 1;
    setValor(resultado);
    onRolar?.(resultado);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-16 h-16 flex items-center justify-center">
        {valorExibido !== null ? (
          <img
            src={`assets/${valorExibido}.png`}
            alt={String(valorExibido)}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-16 h-16 border-2 border-dashed border-zinc-300 rounded-xl flex items-center justify-center text-zinc-400 text-sm">
            ?
          </div>
        )}
      </div>
    </div>
  );
}