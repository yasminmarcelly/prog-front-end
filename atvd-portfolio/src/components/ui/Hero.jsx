export default function Hero() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-start">

          <div className="w-36 h-36 shrink-0 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center text-gray-400 text-xs">
            <img src="/img/pic.webp" alt="Yasmin" className="w-full h-full object-cover object-position-top" />
          </div>

          <div>
            <h1 className="text-4xl font-calistoga text-black mb-3">
              oi, yasmin aqui. 👋
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed mb-2">
              estudante de sistemas para internet 
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              pt-br / eng-us
            </p>

            <div className="flex gap-4 flex-wrap">
              <a href="/YasminCV.pdf" className="text-sm text-gray-500 hover:text-black">
                Currículo
              </a>
              <a href="https://linkedin.com/in/yasminmarcelly" className="text-sm text-gray-500 hover:text-black">
                LinkedIn
              </a>
              <a href="https://github.com/yasminmarcelly" className="text-sm text-gray-500 hover:text-black">
                GitHub
              </a>
              <a href="mailto:ymvarruda@gmail.com" className="text-sm text-gray-500 hover:text-black">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
