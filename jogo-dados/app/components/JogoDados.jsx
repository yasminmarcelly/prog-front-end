"use client";

import { useState } from "react";
import Dado from "./Dado";

const TOTAL_RODADAS = 5;

const JOGADORES = [
  { id: 1, label: "Jogador 1" },
  { id: 2, label: "Jogador 2" },
];

function resultado(vencedor, id) {
  if (!vencedor) return null;
  if (vencedor === "empate") return "Empatou";
  return vencedor === id ? "Ganhou" : "Perdeu";
}

function corResultado(vencedor, id) {
  if (!vencedor) return "";
  if (vencedor === "empate") return "text-amber-600 bg-amber-50 border-amber-200";
  return vencedor === id
    ? "text-teal-700 bg-teal-50 border-teal-200"
    : "text-red-600 bg-red-50 border-red-200";
}

function CartaJogador({ jogador, dados, total, jaJogou, vencedor, onJogar, habilitado }) {
  const res = resultado(vencedor, jogador.id);
  const cor = corResultado(vencedor, jogador.id);

  return (
    <div className={`flex flex-col items-center gap-4 p-6 rounded-2xl border transition-all duration-300 bg-white ${
      vencedor && vencedor === jogador.id ? "border-teal-300" :
      vencedor === "empate" ? "border-amber-200" : "border-zinc-200"
    }`}>
      <span className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">
        {jogador.label}
      </span>

      <div className="flex gap-3">
        <Dado valorExterno={dados[0]} />
        <Dado valorExterno={dados[1]} />
      </div>

      {jaJogou && (
        <div className="text-center">
          <p className="text-xs text-zinc-400">soma</p>
          <p className="text-2xl font-bold text-zinc-800">{total}</p>
        </div>
      )}

      {res && (
        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${cor}`}>
          {res}
        </span>
      )}

      <button
        onClick={onJogar}
        disabled={!habilitado}
        className={`w-full py-2.5 rounded-xl text-sm font-medium border transition-all duration-150 active:scale-95 ${
          habilitado
            ? "bg-zinc-800 text-white border-zinc-800 hover:bg-zinc-700 cursor-pointer"
            : "bg-zinc-100 text-zinc-400 border-zinc-200 cursor-not-allowed"
        }`}
      >
        Jogar dados
      </button>
    </div>
  );
}

function rolarDois() {
  return [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
}

const estadoInicial = () => ({
  dados: { 1: [null, null], 2: [null, null] },
  jogou: { 1: false, 2: false },
  vezDe: 1,
  vencedorRodada: null,
});

export default function JogoDados() {
  const [rodada, setRodada] = useState(1);
  const [vitorias, setVitorias] = useState({ 1: 0, 2: 0, empates: 0 });
  const [estado, setEstado] = useState(estadoInicial());
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  const { dados, jogou, vezDe, vencedorRodada } = estado;
  const total = (id) => (dados[id][0] || 0) + (dados[id][1] || 0);
  const rodadaFinalizada = jogou[1] && jogou[2];

  const jogar = (id) => {
    if (vezDe !== id || jogou[id]) return;

    const novos = rolarDois();
    const novosDados = { ...dados, [id]: novos };
    const novoJogou = { ...jogou, [id]: true };
    const proximaVez = id === 1 ? 2 : null;

    let novoVencedor = null;
    let novasVitorias = vitorias;

    if (novoJogou[1] && novoJogou[2]) {
      const t1 = novosDados[1][0] + novosDados[1][1];
      const t2 = novosDados[2][0] + novosDados[2][1];
      if (t1 > t2) {
        novoVencedor = 1;
        novasVitorias = { ...vitorias, 1: vitorias[1] + 1 };
      } else if (t2 > t1) {
        novoVencedor = 2;
        novasVitorias = { ...vitorias, 2: vitorias[2] + 1 };
      } else {
        novoVencedor = "empate";
        novasVitorias = { ...vitorias, empates: vitorias.empates + 1 };
      }
      setVitorias(novasVitorias);
      if (rodada >= TOTAL_RODADAS) setJogoFinalizado(true);
    }

    setEstado({
      dados: novosDados,
      jogou: novoJogou,
      vezDe: proximaVez,
      vencedorRodada: novoVencedor,
    });
  };

  const proximaRodada = () => {
    setRodada((r) => r + 1);
    setEstado(estadoInicial());
  };

  const jogarNovamente = () => {
    setRodada(1);
    setVitorias({ 1: 0, 2: 0, empates: 0 });
    setEstado(estadoInicial());
    setJogoFinalizado(false);
  };

  const vencedorPartida = () => {
    if (vitorias[1] > vitorias[2]) return "Jogador 1 venceu a partida!";
    if (vitorias[2] > vitorias[1]) return "Jogador 2 venceu a partida!";
    return "Empate geral!";
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-2xl mx-auto py-8 px-4">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-2xl font-bold text-zinc-800">Jogo de Dados</h1>
        <span className="text-sm text-zinc-400">
          Rodada {Math.min(rodada, TOTAL_RODADAS)} de {TOTAL_RODADAS}
        </span>
      </div>

      {/* Placar */}
      <div className="flex gap-6 bg-zinc-50 border border-zinc-200 rounded-2xl px-8 py-4">
        {JOGADORES.map((j) => (
          <div key={j.id} className="flex flex-col items-center gap-1">
            <span className="text-xs text-zinc-400">{j.label}</span>
            <span className="text-2xl font-bold text-zinc-800">{vitorias[j.id]}</span>
          </div>
        ))}
        <div className="w-px bg-zinc-200 mx-2" />
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-zinc-400">Empates</span>
          <span className="text-2xl font-bold text-zinc-400">{vitorias.empates}</span>
        </div>
      </div>

      {/* Tela de fim de jogo */}
      {jogoFinalizado ? (
        <div className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-zinc-200 bg-white w-full text-center">
          <span className="text-xs uppercase tracking-widest text-zinc-400">Fim de jogo</span>
          <p className="text-2xl font-bold text-zinc-800">{vencedorPartida()}</p>
          <p className="text-sm text-zinc-400">
            {vitorias[1]}–{vitorias[2]} ({vitorias.empates} empate{vitorias.empates !== 1 ? "s" : ""})
          </p>
          <button
            onClick={jogarNovamente}
            className="mt-2 px-8 py-3 bg-zinc-800 text-white rounded-xl text-sm font-medium hover:bg-zinc-700 active:scale-95 transition-all cursor-pointer"
          >
            Jogar Novamente
          </button>
        </div>
      ) : (
        <>
          {/* Cartas dos jogadores */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {JOGADORES.map((j) => (
              <CartaJogador
                key={j.id}
                jogador={j}
                dados={dados[j.id]}
                total={total(j.id)}
                jaJogou={jogou[j.id]}
                vencedor={vencedorRodada}
                onJogar={() => jogar(j.id)}
                habilitado={!jogoFinalizado && vezDe === j.id && !jogou[j.id]}
              />
            ))}
          </div>

          {/* Avança rodada */}
          {rodadaFinalizada && rodada < TOTAL_RODADAS && (
            <button
              onClick={proximaRodada}
              className="px-8 py-3 bg-zinc-800 text-white rounded-xl text-sm font-medium hover:bg-zinc-700 active:scale-95 transition-all cursor-pointer"
            >
              Próxima rodada →
            </button>
          )}

          {/* Indicador de vez */}
          {!rodadaFinalizada && (
            <p className="text-sm text-zinc-400">
              Vez do <span className="font-medium text-zinc-600">Jogador {vezDe}</span>
            </p>
          )}
        </>
      )}
    </div>
  );
}