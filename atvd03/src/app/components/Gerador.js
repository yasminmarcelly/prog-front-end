"use client";

import { useState } from "react";

export default function Gerador() {
  const [valor, setValor] = useState("__");

  const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  const handleClick = () => {
    setValor(randomNum(1,99));
  };
  return (
    <>
      <h3>Numero gerado: {valor}</h3>
      <button onClick={handleClick}>Clique aqui</button>
    </>
  );
}