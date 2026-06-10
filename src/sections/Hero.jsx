const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center px-6 md:px-16 pt-20">
      
      {/* Contenedor principal con distribución de dos columnas */}
      <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        
        {/* Columna de contenido escrito y acciones */}
        <div className="flex flex-col text-left max-w-xl w-full">


          <div className="flex items-center justify-start gap-3 mb-6 mt-2">
            <div className="w-8 h-[1.5px] bg-slate-400"></div>
              <h2 className="font-title text-sm font-semibold uppercase tracking-widest text-slate-500">
                Nutrióloga Certificada fdfdfd
              </h2>
          </div>
          
          
           <h3 className="text-4xl md:text-6xl font-title font-Regular mb-6 text-taupe-600 ">
              Tu bienestar <span className="italic font-serif text-taupe-500/80 ">  <br/> empieza aquí</span>
           </h3>
    
          
          <p className="text-lg mb-12 text-gray-700 leading-loose">
            Especialista en salud hormonal y pacientes bariátricos. Acompaño tu proceso con ciencia, empatía y planes diseñados exclusivamente para ti.
          </p>
          
          {/* Bloque de llamados a la acción en línea */}
          <div className="flex flex-row flex-wrap gap-4 font-body">
            <a 
              href="#contacto" 
              className="bg-[#5A6D3A] hover:bg-[#48572e] text-white px-6 py-3.5 rounded-md font-semibold transition-colors duration-300 text-center shadow-sm"
            >
              Agendar Consulta
            </a> 
            
            <a 
              href="#sobre-mi" 
              className="border-2 border-[#5A6D3A] text-[#5A6D3A] hover:bg-[#5A6D3A]/5 px-6 py-3.5 rounded-md font-semibold transition-colors duration-300 text-center"
            >
              Conoce mi enfoque
            </a> 
          </div>

        </div>

        {/* Columna reservada para elemento visual o fotográfico */}
        <div className="hidden md:block"></div>

      </div>
    </section>
  )
}

export default Hero;