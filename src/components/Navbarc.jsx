import { useState } from 'react';

const Navbarc = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-olive-300 bg-olive-200 fixed w-full z-20 top-0 start-0 border-b border-default">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 px-4">
        
        {/* Logo que te regresa hasta arriba */}
        <a href="#hero" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap font-title">
            Logo/Nombre
          </span>
        </a>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" 
        >
          <span className="sr-only">Abrir menú</span>
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
          </svg>
        </button>
        
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="font-body font-medium text-sm uppercase flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-16 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            
            {/* Los href ahora apuntan a los IDs con el símbolo # */}
            <li>
              <a href="#about" className="block py-2 px-3 text-heading rounded hover:text-[#5A6D3A] transition-colors md:p-0">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#services" className="block py-2 px-3 text-heading rounded hover:text-[#5A6D3A] transition-colors md:p-0">
                Servicios
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 px-3 text-heading rounded hover:text-[#5A6D3A] transition-colors md:p-0">
                Contacto
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbarc;