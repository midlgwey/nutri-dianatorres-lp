const AboutMe = () => {
  return (
    // 1. Cambiamos el <div> principal por <section> y le ponemos el id="about"
    <section id="sobre-mi" className="bg-orange-100/30 px-6 md:px-18 py-12 font-body scroll-mt-24">

      <div className="flex items-center justify-start gap-3 mb-6 mt-16">
        <div className="w-8 h-[1.5px] bg-slate-400"></div>
        <h2 className="font-title text-sm font-semibold uppercase tracking-widest text-slate-500">
          Sobre mí
        </h2>
      </div>
      
      <h3 className="md:text-4xl font-title font-semibold mb-2 text-[#5c4a3d]">
        Nutrición con <span className="italic font-serif text-[#5c4a3d]/80">propósito</span>
      </h3>
    
      <div className="max-w-4xl">
        <p className="font-body text-base leading-loose text-gray-700 mt-6">
          Soy Diana Torres, nutrióloga certificada con especialidad en salud hormonal y acompañamiento a pacientes bariátricos. 
          Mi enfoque va más allá de un plan de alimentación: creo en el bienestar integral, 
          donde la ciencia y la empatía trabajan juntas para transformar vidas de forma sostenible.
        </p>

        <p className="font-body text-base leading-loose text-gray-700 mt-6 mb-8">
          Cada paciente tiene una historia única. 
          Mi misión es escucharla, entenderla y diseñar una estrategia nutricional que respete tu cuerpo, tus tiempos y tus objetivos.
        </p>
      </div>

      {/* 2. Le di formato de Grid a tus puntos clave para que se vean elegantes */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl border-t border-slate-300/50 pt-5 mb-8">
        
        <div className="border-l-2 border-[#5A6D3A] pl-4">
          <h4 className="font-title text-lg font-semibold text-[#5c4a3d] mb-1">Evidencia científica</h4>
          <p className="font-body text-gray-500">Planes basados en investigación clínica actualizada.</p>
        </div>

        <div className="border-l-2 border-[#5A6D3A] pl-4">
          <h4 className="font-title text-lg font-semibold text-[#5c4a3d] mb-1">Enfoque integral</h4>
          <p className="font-body text-gray-500">Cuerpo, mente y hábitos en equilibrio.</p>
        </div>

        <div className="border-l-2 border-[#5A6D3A] pl-4">
          <h4 className="font-title text-lg font-semibold text-[#5c4a3d] mb-1">Acompañamiento real</h4>
          <p className="font-body text-gray-500">Seguimiento cercano en cada etapa del proceso.</p>
        </div>

        <div className="border-l-2 border-[#5A6D3A] pl-4">
          <h4 className="font-title text-lg font-semibold text-[#5c4a3d] mb-1">Personalización total</h4>
          <p className="font-body text-gray-500">Sin planes genéricos, todo diseñado para ti.</p>
        </div>

      </div>

    </section>
  )
}

export default AboutMe;