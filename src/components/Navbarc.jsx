import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Navbarc = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-olive-200 fixed w-full z-20 top-0 start-0 ">  
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-9 px-4">
        
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap font-title">
            Logo/Nombre
          </span>
        </a>

        {/* Solo hamburguesa en móvil */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-base md:hidden focus:outline-none"
        >
          <span className="sr-only">Abrir menú</span>
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
            </svg>
          )}
        </button>
        
        {/* Links */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:w-auto`}>
          <ul className="font-title tracking-widest font-light text-sm uppercase flex flex-col p-4 md:p-0 mt-2 border-t border-default bg-olive-200 md:flex-row md:items-center md:space-x-16 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
              <a href="#sobre-mi" onClick={() => setIsOpen(false)}
                className="block py-3 px-3 text-heading rounded hover:text-[#5A6D3A] transition-colors md:p-0">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#servicios" onClick={() => setIsOpen(false)}
                className="block py-3 px-3 text-heading rounded hover:text-[#5A6D3A] transition-colors md:p-0">
                Servicios
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={() => setIsOpen(false)}
                className="block py-3 px-3 text-heading rounded hover:text-[#5A6D3A] transition-colors md:p-0">
                Contacto
              </a>
            </li>

            {/* Instagram: dentro del menú en móvil, al final en desktop */}
            <li>
              <a 
                href="https://www.instagram.com/nutri.dianatorres/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block py-3 px-3 md:p-0 hover:opacity-75 transition-opacity"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbarc;