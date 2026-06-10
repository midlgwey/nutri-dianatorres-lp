import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="border-t border-taupe-500 bg-taupe-400">
      <div className="mx-auto max-w-6xl px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        {/* 1. Logo (Ajusta la ruta a tu archivo de logo real) */}
        <div className="flex justify-center md:justify-start">
          <img src="/logo.png" alt="Logo Nutriologa Diana Torres" className="h-12 w-auto" />
        </div>

        {/* 2. Copyright */}
        <p className="text-sm text-white text-center">
          © {new Date().getFullYear()} Nutrición Diana Torres. <br className="md:hidden" /> Todos los derechos reservados.
        </p>

        {/* 3. Redes Sociales */}
        <div className="flex justify-center md:justify-end gap-6">
          <a 
            href="https://www.instagram.com/nutri.dianatorres/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-3xl text-white" />
          </a>

         
        </div>
        
      </div>
    </footer>
  );
}