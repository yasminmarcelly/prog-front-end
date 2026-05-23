const experiences = [
  {
    company: "SS SANEL SAÚDE",
    role: "Estagiária - Suporte TI",
    period: "Set 2025 – Fev 2026",
    icon: "/img/sanel.png",
    bullets: [
      "Prestei suporte técnico de primeiro nível a usuários em hardware, software e sistemas internos.",
      "Atuei na manutenção e configuração básica de computadores e periféricos.",
      "Cadastrei e atualizei dados em sistemas internos e mantive planilhas de controle de chamados no Excel.",
    ],
  },
  {
    company: "Jornal do Commercio",
    role: "Jovem Aprendiz - Administrativo",
    period: "Dez 2022 – Maio 2024",
    icon: "/img/sjcc.jpg",
    bullets: [
      "Realizei lançamento e conferência de notas fiscais no sistema TOTVS Datasul.",
      "Elaborei e atualizei planilhas de controle para suporte às rotinas administrativas.",
      "Organizei documentos e apoiei atendimento e recebimento de fornecedores e materiais.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-calistoga text-black mb-6">
          Experiência Profissional
        </h2>

        <div className="flex flex-col gap-8">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-6"
            >
              <div className="flex items-start justify-between gap-4">
                
                <div className="flex gap-4">
                  <img
                    src={item.icon}
                    alt={item.company}
                    className="w-12 h-12 rounded-full object-cover border border-gray-200 shrink-0"
                  />

                  <div>
                    <p className="text-sm font-medium text-black">
                      {item.company}
                    </p>

                    <p className="text-sm text-gray-500 mb-2">
                      {item.role}
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