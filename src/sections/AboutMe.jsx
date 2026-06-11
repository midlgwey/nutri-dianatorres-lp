
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    // 1. Cambiamos el <div> principal por <section> y le ponemos el id="about"
    <section id="sobre-mi" className="bg-orange-100/30 px-6 md:px-18 py-12 font-body scroll-mt-24">

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="flex items-center justify-start gap-3 mb-6 mt-16"
      >
        <div className="w-8 h-[1.5px] bg-slate-400"></div>
        <h2 className="font-title text-sm font-semibold uppercase tracking-widest text-slate-500">
          Sobre mí
        </h2>
      </motion.div>
      
      <motion.h3 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-4xl font-title font-semibold mb-2 text-taupe-600"
      >
        Nutrición con <span className="italic font-serif text-taupe-500/80">propósito</span>
      </motion.h3>
    
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-4xl"
      >
        <p className="font-body text-base leading-loose text-gray-700 mt-6">
          Soy Diana Torres, nutrióloga certificada con especialidad en salud hormonal y acompañamiento a pacientes bariátricos. 
          Mi enfoque va más allá de un plan de alimentación: creo en el bienestar integral, 
          donde la ciencia y la empatía trabajan juntas para transformar vidas de forma sostenible.
        </p>

        <p className="font-body text-base leading-loose text-gray-700 mt-6 mb-8">
          Cada paciente tiene una historia única. 
          Mi misión es escucharla, entenderla y diseñar una estrategia nutricional que respete tu cuerpo, tus tiempos y tus objetivos.
        </p>
      </motion.div>

      {/* 2. Grid animado en cascada rápida */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl border-t border-slate-300/50 pt-5 mb-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="border-l-2 border-[#5A6D3A] pl-4"
        >
          <h4 className="font-title text-lg font-semibold text-[#5c4a3d] mb-1">Evidencia científica</h4>
          <p className="font-body text-gray-500">Planes basados en investigación clínica actualizada.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
          className="border-l-2 border-[#5A6D3A] pl-4"
        >
          <h4 className="font-title text-lg font-semibold text-[#5c4a3d] mb-1">Enfoque integral</h4>
          <p className="font-body text-gray-500">Cuerpo, mente y hábitos en equilibrio.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="border-l-2 border-[#5A6D3A] pl-4"
        >
          <h4 className="font-title text-lg font-semibold text-[#5c4a3d] mb-1">Acompañamiento real</h4>
          <p className="font-body text-gray-500">Seguimiento cercano en cada etapa del proceso.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
          viewport={{ once: true, margin: "-50px" }}
          className="border-l-2 border-[#5A6D3A] pl-4"
        >
          <h4 className="font-title text-lg font-semibold text-[#5c4a3d] mb-1">Personalización total</h4>
          <p className="font-body text-gray-500">Sin planes genéricos, todo diseñado para ti.</p>
        </motion.div>

      </div>

    </section>
  )
}

export default AboutMe;