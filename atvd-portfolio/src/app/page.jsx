import NavBar from "@/components/ui/NavBar";
import Hero from "@/components/ui/Hero";
import AboutMe from "@/components/ui/AboutMe";
import Education from "@/components/ui/Education";
import Experience from "@/components/ui/Experience";
import Projects from "@/components/ui/Projects";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <NavBar />

      <div className="max-w-2xl mx-auto px-6">
        <hr className="border-gray-100" />
      </div>

      <Hero />

      <div className="max-w-2xl mx-auto px-6">
        <hr className="border-gray-100" />
      </div>

      <AboutMe />

      <div className="max-w-2xl mx-auto px-6">
        <hr className="border-gray-100" />
      </div>

      <Education />

      <div className="max-w-2xl mx-auto px-6">
        <hr className="border-gray-100" />
      </div>

      <Experience />

      <div className="max-w-2xl mx-auto px-6">
        <hr className="border-gray-100" />
      </div>

      <Projects />

      <div className="max-w-2xl mx-auto px-6">
        <hr className="border-gray-100" />
      </div>


      <footer className="px-6 py-8">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <p className="text-xs text-gray-400">© 2026 Yasmin Marcelly</p>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/yasminmarcelly" className="text-xs text-gray-400 hover:text-black">LinkedIn</a>
            <a href="https://github.com/yasminmarcelly" className="text-xs text-gray-400 hover:text-black">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
