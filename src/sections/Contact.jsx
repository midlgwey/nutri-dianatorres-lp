
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section id="contacto" className="bg-orange-100/40 p-8 md:px-18 py-16 font-body scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:mt-6">

        {/* Columna Izquierda: Textos y Datos */}
        <div className="flex flex-col">
          
          {/* 1. Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex items-center justify-start gap-3 mb-8 mt-3"
          >
            <div className="w-8 h-[1.5px] bg-slate-400"></div>
            <h2 className="font-title text-sm font-semibold uppercase tracking-widest text-slate-500">
              Contacto
            </h2>
          </motion.div>

          {/* 2. Título */}
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-4xl font-title font-semibold mb-4 text-taupe-600"
          >
            Inicia tu <span className="italic font-serif text-taupe-500/80">camino</span>
          </motion.h3>
    
          {/* 3. Párrafo */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-lg text-gray-600 text-left mt-8 mb-10 leading-loose"
          >
            No esperes más para dar el primer paso hacia tu bienestar. 
            Contáctame para resolver tus dudas o agendar tu primera sesión de evaluación. 
            Estoy aquí para acompañarte en cada etapa de tu transformación nutricional.
          </motion.p>

          {/* 4. Bloque de íconos (Aparece junto) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-5"
          >
            
            {/* Fila: Dirección */}
            <div className="flex items-center gap-4 text-gray-700 leading-loose">
              <div className="w-8 flex justify-center text-lime-800 text-2xl">
                <FontAwesomeIcon icon={faMapPin} />
              </div>
              <p className="text-base font-medium">Tijuana, Baja California - México</p>
            </div>

            {/* Fila: Correo */}
            <div className="flex items-center gap-4 text-gray-700 leading-loose">
              <div className="w-8 flex justify-center text-lime-800 text-2xl">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <p className="text-base font-medium">nutriologa.dianatorres@gmail.com</p>
            </div>

            {/* Fila: Teléfono */}
            <div className="flex items-center gap-4 text-gray-700 leading-loose">
              <div className="w-8 flex justify-center text-lime-800 text-2xl">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <p className="text-base font-medium">+52 55 1234 5678</p>
            </div>

          </motion.div>
        </div>
    
        {/* Columna Derecha: Formulario */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex items-start justify-center"
        >
          <ContactForm />
        </motion.div>

      </div>
    </section>
  )
}

export default Contact;