"use client";

import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "home", href: "#" },
    { label: "sobre", href: "#sobre" },
    { label: "educação", href: "#educacao" },
    { label: "experiência", href: "#experiencia" },
    { label: "projetos", href: "#projetos" },
  ];

  return (
    <nav className="w-full py-6 px-6">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <a href="#" className="text-sm text-gray-500 hover:text-black">
          ./portfolio/
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-gray-500 hover:text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-sm text-gray-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "fechar" : "menu"}
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden max-w-2xl mx-auto flex flex-col gap-3 mt-4 px-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-500 hover:text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
