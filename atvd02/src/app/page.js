import Profile from "./components/Profile";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main >
        <h1>Site criado para a disciplina Programação Front-End</h1>

        <Profile />
      </main>
    </div>
  );
}
