const education = [
  {
    school: "UNICAP — Universidade Católica de Pernambuco",
    degree: "Tecnólogo em Sistemas para Internet",
    period: "Fev 2025 – Presente",
    icon: "/img/unicap.png",
    bullets: [
      "Atualmente no 3° período.",
      "Estudando programação front-end, POO e redes de computadores.",
    ],
  },
  {
    school: "IJCPM",
    degree: "Pacote Office — Excel, Word, PowerPoint",
    period: "2022",
    icon: "/img/ijcpm.png",
    bullets: [
      "Curso de informática básica com foco em ferramentas de escritório.",
    ],
  },
];

export default function Education() {
  return (
    <section id="educacao" className="px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-calistoga text-black mb-6">
          Educação
        </h2>

        <div className="flex flex-col gap-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-6"
            >
              <div className="flex items-start justify-between gap-4">
                
                <div className="flex gap-4">
                  <img
                    src={item.icon}
                    alt={item.school}
                    className="w-12 h-12 rounded-full object-cover border border-gray-200 shrink-0"
                  />

                  <div>
                    <p className="text-sm font-medium text-black">
                      {item.school}
                    </p>

                    <p className="text-sm text-gray-500 mb-2">
                      {item.degree}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-400 shrink-0 mt-1">
                  {item.period}
                </p>
              </div>

              <ul className="flex flex-col gap-1 mt-3 ml-16">
                {item.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-600 leading-relaxed before:content-['·'] before:mr-2 before:text-gray-400"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}