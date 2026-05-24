export default function Footer() {
  return (
    <footer className="px-6 py-8">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <p className="text-xs text-gray-400">© 2026 Yasmin Marcelly</p>
        <div className="flex gap-4 items-center">
          <a href="https://linkedin.com/in/yasminmarcelly" aria-label="LinkedIn" className="opacity-40 hover:opacity-100 transition-opacity">
            <img src="https://logotypes.dev/linkedin?variant=glyph&version=black" alt="LinkedIn" width={15} height={15} />
          </a>
          <a href="https://github.com/yasminmarcelly" aria-label="GitHub" className="opacity-40 hover:opacity-100 transition-opacity">
            <img src="https://logotypes.dev/github?variant=glyph&version=black" alt="GitHub" width={15} height={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
 