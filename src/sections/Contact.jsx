import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    
    <section id="contacto" className="bg-orange-100/40 p-8 md:px-18 py-16 font-body scroll-mt-24" >

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:mt-6">

        <div className="flex flex-col">
          <div className="flex items-center justify-start gap-3 mb-8 mt-3">
            <div className="w-8 h-[1.5px] bg-slate-400"></div>
            <h2 className="font-title text-sm font-semibold uppercase tracking-widest text-taupe-600">
              Contacto
            </h2>
          </div>

          <h3 className="text-4xl font-title font-semibold mb-4 text-taupe-600">
            Inicia tu <span className="italic font-serif text-taupe-500/80">camino</span>
          </h3>
    
        
          <p className="text-lg text-gray-600 text-left mt-8 mb-10 leading-loose">
            No esperes más para dar el primer paso hacia tu bienestar. 
            Contáctame para resolver tus dudas o agendar tu primera sesión de evaluación. 
            Estoy aquí para acompañarte en cada etapa de tu transformación nutricional.
          </p>

  
          <div className="flex flex-col gap-5">
            
          {/* Fila: Dirección */}
          <div className="flex items-center gap-4 text-gray-700 leading-loose">
            <div className="w-8 flex justify-center text-lime-800 text-2xl">
              <FontAwesomeIcon icon={faMapPin} />
            </div>
            {/* font-medium hace que se vea pro, sin ser tosco como el bold */}
            <p className="text-base font-medium">Tijuana, Baja California - México</p>
          </div>

          {/* Fila: Correo */}
          <div className="flex items-center gap-4 text-gray-700 leading-loose">
            <div className="w-8 flex justify-center text-lime-800 text-2xl">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <a href="mailto:..." className="text-base font-medium hover:text-taupe-600 transition-colors">
              nutriologa.dianatorres@gmail.com
            </a>
          </div>

          {/* Fila: Teléfono */}
          <div className="flex items-center gap-4 text-gray-700 leading-loose">
            <div className="w-8 flex justify-center text-lime-800 text-2xl">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <a href="tel:..." className="text-base font-medium hover:text-taupe-600 transition-colors">
              +52 55 1234 5678
            </a>
          </div>
          </div>
        </div>
    
        {/* Lado derecho: Formulario */}
        <ContactForm />

      </div>
    </section>
  )
}

export default Contact