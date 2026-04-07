import JogoDados from "./components/JogoDados";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center font-sans">
      <main className="w-full max-w-3xl flex flex-col items-center justify-center py-32 px-16 bg-white rounded-2xl shadow-sm">
        <JogoDados />
      </main>
    </div>
  );
}