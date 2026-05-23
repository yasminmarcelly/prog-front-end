const technologies = [
  "HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Git", "GitHub", "Vercel",
];

export default function AboutMe() {
  return (
    <section id="sobre" className="px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-calistoga text-black mb-6">Sobre Mim</h2>

        <div className="flex flex-col gap-4 text-sm text-gray-600 leading-relaxed mb-10">
          <p>
           Olá, me chamo Yasmin e tenho interesse por tecnologia desde criança, principalmente hardware e computadores.
          </p>
          <p>
           Meu primeiro contato com programação aconteceu na faculdade e durante esse período descobri que curto mais backend do que frontend 😅.
          </p>
          <p>
            Nas horas vagas: cinema, Liverpool e dormir (in that order).
          </p>
        </div>

        <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">tecnologias usadas neste portfólio</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
