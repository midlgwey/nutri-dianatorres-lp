import ServicesCard from '../components/ServicesCard'

const Services = () => {
  return (
    <section id="servicios" className="bg-stone-50 px-6 md:px-18 py-12 font-body scroll-mt-24">

      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-3 mb-6 mt-10">
        <div className="w-10 h-px bg-slate-300" />
        <span className="text-sm  font-title font-semibold uppercase tracking-[0.2em] text-taupe-600">
          Servicios
        </span>
        <div className="w-10 h-px bg-slate-300" />
      </div>

      {/* Título */}
      <h2 className="text-4xl md:text-4xl font-title font-semibold text-slate-700 text-center mb-3">
        Transforma tu salud con el enfoque correcto
      </h2>

      {/* Subtítulo */}
      <p className="text-center font-body text-slate-700 text-base max-w-md mx-auto mb-10">
        Nutrición especializada de alta gama y respuestas reales para necesidades específicas: desde el balance hormonal hasta el proceso post-bariátrico.
      </p>

      {/* Grid — las cards se estiran a la misma altura automáticamente */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
        <ServicesCard
          index={0}
          title="Consulta Nutricional Personalizada"
          description="Tu nutrición debe ser única. Evaluamos tu historial para construir un plan flexible y sostenible que responda a tus objetivos reales, sin dietas extremas."
          subtitles={["DIAGNÓSTICO", "PLAN PERSONALIZADO", "SEGUIMIENTO"]}
        />
        <ServicesCard
          index={1}
          title="Especialidad Bariátrica"
          description="Preparación segura y cuidado postoperatorio experto. Protocolos nutricionales específicos para cada etapa de tu cirugía, protegiendo tu salud y resultados"
          subtitles={["PRE-OP", "POST-OP", "ADAPTACIÓN METABÓLICA"]}
        />
        <ServicesCard
          index={2}
          title="Salud Hormonal Femenina"
          description="Recupera tu bienestar y energía. Aprende cómo la nutrición correcta puede ayudarte a controlar el SOP, la resistencia a la insulina y la menopausia."
          subtitles={["SOP", "SALUD TIROIDEA", "MENOPAUSIA"]}
        />
      </div>

    </section>
  )
}

export default Services