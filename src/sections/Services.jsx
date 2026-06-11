
import { motion } from 'framer-motion';
import ServicesCard from '../components/ServicesCard';

const Services = () => {
  // Guardamos los datos de los servicios en un arreglo para mapearlos limpiamente
  const servicesData = [
    {
      title: "Consulta Nutricional Personalizada",
      description: "Tu nutrición debe ser única. Evaluamos tu historial para construir un plan flexible y sostenible que responda a tus objetivos reales, sin dietas extremas.",
      subtitles: ["DIAGNÓSTICO", "PLAN PERSONALIZADO", "SEGUIMIENTO"]
    },
    {
      title: "Especialidad Bariátrica",
      description: "Preparación segura y cuidado postoperatorio experto. Protocolos nutricionales específicos para cada etapa de tu cirugía, protegiendo tu salud y resultados",
      subtitles: ["PRE-OP", "POST-OP", "ADAPTACIÓN METABÓLICA"]
    },
    {
      title: "Salud Hormonal Femenina",
      description: "Recupera tu bienestar y energía. Aprende cómo la nutrición correcta puede ayudarte a controlar el SOP, la resistencia a la insulina y la menopausia.",
      subtitles: ["SOP", "SALUD TIROIDEA", "MENOPAUSIA"]
    }
  ];

  return (
    <section id="servicios" className="bg-stone-50 px-6 md:px-18 py-12 font-body scroll-mt-24">

      {/* Eyebrow (Aparece primero) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="flex items-center justify-center gap-3 mb-6 mt-10"
      >
        <div className="w-10 h-px bg-slate-300" />
        <span className="text-sm font-title font-semibold uppercase tracking-[0.2em] text-taupe-600">
          Servicios
        </span>
        <div className="w-10 h-px bg-slate-300" />
      </motion.div>

      {/* Título (Aparece con delay de 0.2s) */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-4xl md:text-4xl font-title font-semibold text-slate-700 text-center mb-3"
      >
        Transforma tu salud con el enfoque correcto
      </motion.h2>

      {/* Subtítulo (Aparece con delay de 0.4s) */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-center font-body text-slate-700 text-base max-w-md mx-auto mb-10"
      >
       Nutrición clínica especializada en control hormonal y proceso pre y post-bariátrico.
      </motion.p>

      {/* Grid de Cards (Aparecen en cascada a partir de los 0.6s) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            /* El delay dinámico: la primera carta tarda 0.6s, la segunda 0.8s, la tercera 1.0s */
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 + (index * 0.2) }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex" /* flex asegura que la card interna pueda estirarse al 100% de la altura (h-full) */
          >
            <ServicesCard
              index={index}
              title={service.title}
              description={service.description}
              subtitles={service.subtitles}
            />
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Services;