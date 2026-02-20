import Profile from '../components/Profile';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        The truth is out there.
        <Profile />
      </h1>
    </div>
  );
}
