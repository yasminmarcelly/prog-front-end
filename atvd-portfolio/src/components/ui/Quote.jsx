"use client";

import { useEffect, useState } from "react";

export default function Quote() {
  const [quote, setQuote] = useState("Carregando Frase...");

  useEffect(() => {
    console.log("OK");

    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuote(data.quote);
      })
      .catch((err) => {
        console.error(err);
        setQuote("Erro ao carregar a frase.");
      });
  }, []);

  return (
    <p className="text-sm text-gray-400 italic">
      {quote}
    </p>
  );
}