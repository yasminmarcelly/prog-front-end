const projects = [
  {
    title: "MoviePicker ",
    description:
      "Site que recomenda de forma aleatória filmes do século 21, baseada na lista do The New York Times. ",
    tags: ["HTML", "CSS", "JavaScript", "TMDB API"],
    githubUrl: "https://github.com/yasminmarcelly/MoviePicker",
  },
  {
    title: "Lotus",
    description:
      "Projeto de apoio às mulheres com endometriose, com foco em desenvolvimento com ferramentas de IA.",
    tags: ["Lovable", "React", "TypeScript"],
    githubUrl: "https://github.com/yasminmarcelly/lotus",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-calistoga text-black mb-6">Projetos</h2>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <div key={index}>
              <p className="text-sm font-medium text-black mb-1">{project.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a href={project.githubUrl} className="text-xs text-gray-500 hover:text-black underline">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
