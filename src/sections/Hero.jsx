const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 md:px-16 pt-20 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(196, 210, 161, 0.45) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(232, 218, 199, 0.5) 0%, transparent 55%),
          radial-gradient(ellipse at 60% 80%, rgba(210, 195, 178, 0.35) 0%, transparent 50%),
          #f5f0e8
        `
      }}
    >

      {/* Blob decorativo fondo */}
      <div className="absolute -top-20 -right-20 w-96 h-96 opacity-20 pointer-events-none">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <path fill="#5A6D3A" d="M320,280Q280,360,200,350Q120,340,80,270Q40,200,90,130Q140,60,210,70Q280,80,325,140Q370,200,320,280Z"/>
        </svg>
      </div>

      <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">

        {/* Columna izquierda */}
        <div className="flex flex-col text-left max-w-xl w-full">

          <div className="flex items-center justify-start gap-3 mb-6 mt-2">
            <div className="w-8 h-[1.5px] bg-slate-400"></div>
            <h2 className="font-title text-sm font-semibold uppercase tracking-widest text-slate-600">
              Nutrióloga Certificada
            </h2>
          </div>

          <h3 className="text-4xl md:text-6xl font-title font-Regular mb-6 text-taupe-600">
            Tu bienestar <span className="italic font-serif text-taupe-500/80"><br/>empieza aquí</span>
          </h3>

          <p className="text-lg mb-12 text-gray-700 leading-loose">
            Especialista en salud hormonal y pacientes bariátricos. Acompaño tu proceso con ciencia, empatía y planes diseñados exclusivamente para ti.
          </p>

          <div className="flex flex-row flex-wrap gap-4 font-body">
            <a href="#contacto" className="bg-[#7b8d5c] hover:bg-[#697a4b] text-white px-6 py-3.5 rounded-md font-semibold transition-colors duration-300 text-center shadow-sm">
              Agendar Consulta
            </a>
            <a href="#sobre-mi" className="border-2 border-[#745f33] text-[#947738] hover:bg-[#5A6D3A]/5 px-6 py-3.5 rounded-md font-semibold transition-colors duration-300 text-center">
              Conoce mi enfoque
            </a>
          </div>

        </div>

      

      </div>
    </section>
  );
};

export default Hero;