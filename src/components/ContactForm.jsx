import { useState, useRef, useEffect } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    servicio: '',
    mensaje: ''
  });

  const [errores, setErrores] = useState({});
  // Nuevo estado para controlar si el dropdown está abierto o cerrado
  const [dropdownAbierto, setDropdownAbierto] = useState(false);
  const dropdownRef = useRef(null);

  // Lista de tus servicios
  const opcionesServicios = [
    "Consulta Nutricional",
    "Especialidad Bariátrica",
    "Salud Hormonal"
  ];

  // Cerrar el dropdown automáticamente si el usuario hace clic afuera de él
  useEffect(() => {
    const clickAfuera = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownAbierto(false);
      }
    };
    document.addEventListener('mousedown', clickAfuera);
    return () => document.removeEventListener('mousedown', clickAfuera);
  }, []);

  const formatearTelefono = (valor) => {
    const soloDigitos = valor.replace(/\D/g, '').slice(0, 10);
    if (soloDigitos.length <= 3) return soloDigitos;
    if (soloDigitos.length <= 6) return `${soloDigitos.slice(0, 3)} ${soloDigitos.slice(3)}`;
    return `${soloDigitos.slice(0, 3)} ${soloDigitos.slice(3, 6)} ${soloDigitos.slice(6)}`;
  };

  const formatearNombre = (valor) => {
    return valor.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g, '');
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    let valorFinal = value;
    if (id === 'telefono') valorFinal = formatearTelefono(value);
    if (id === 'nombre') valorFinal = formatearNombre(value);

    setFormData(prev => ({ ...prev, [id]: valorFinal }));
    if (errores[id]) setErrores(prev => ({ ...prev, [id]: '' }));
  };

  // Función especial para actualizar el servicio simulando el evento original
  const seleccionarServicio = (servicio) => {
    handleChange({ target: { id: 'servicio', value: servicio } });
    setDropdownAbierto(false);
  };

  const validar = () => {
    const nuevosErrores = {};

    if (!formData.nombre.trim())
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    else if (formData.nombre.trim().length < 3)
      nuevosErrores.nombre = 'Ingresa un nombre completo.';

    const soloDigitos = formData.telefono.replace(/\s/g, '');
    if (!soloDigitos)
      nuevosErrores.telefono = 'El teléfono es obligatorio.';
    else if (soloDigitos.length !== 10)
      nuevosErrores.telefono = 'El teléfono debe tener 10 dígitos.';

    if (!formData.correo.trim())
      nuevosErrores.correo = 'El correo es obligatorio.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo))
      nuevosErrores.correo = 'Ingresa un correo válido.';

    if (!formData.servicio)
      nuevosErrores.servicio = 'Selecciona un servicio.';

    return nuevosErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const erroresEncontrados = validar();
    if (Object.keys(erroresEncontrados).length > 0) {
      setErrores(erroresEncontrados);
      return;
    }

    const texto = `Hola Diana, te contacto desde tu página web.\n\n` +
      `*Nombre:* ${formData.nombre}.\n` +
      `*Teléfono:* ${formData.telefono}.\n` +
      `*Correo:* ${formData.correo}.\n` +
      `*Interesado en:* ${formData.servicio}. \n` +
      `*Mensaje adicional:* ${formData.mensaje}.\n\n` +
      `Espero tu respuesta, ¡gracias!`;
    const url = `https://wa.me/5216643313275?text=${encodeURIComponent(texto)}`;
    window.location.href = url;
  };

  const inputClass = (campo) =>
    `w-full bg-[#f8fbf8] border rounded-md px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#5A6D3A]/50 transition-all flex items-center justify-between text-left ${
      errores[campo] ? 'border-red-400' : 'border-[#d0dfd0]'
    }`;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 font-body w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-bold text-[#5c4a3d] mb-1.5">Nombre Completo</label>
            <input
              id="nombre" type="text" placeholder="Tu nombre y apellido"
              value={formData.nombre} onChange={handleChange}
              className={inputClass('nombre')}
            />
            {errores.nombre && <p className="text-red-500 text-xs mt-1">{errores.nombre}</p>}
          </div>
          <div>
            <label className="block text-sm font-bold text-[#5c4a3d] mb-1.5">Número Telefónico</label>
            <input
              id="telefono" type="tel" placeholder="(664) 123 4567"
              value={formData.telefono} onChange={handleChange}
              className={inputClass('telefono')}
              maxLength={12}
            />
            {errores.telefono && <p className="text-red-500 text-xs mt-1">{errores.telefono}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-[#5c4a3d] mb-1.5">Correo Electrónico</label>
          <input
            id="correo" type="email" placeholder="tucorreo@ejemplo.com"
            value={formData.correo} onChange={handleChange}
            className={inputClass('correo')}
          />
          {errores.correo && <p className="text-red-500 text-xs mt-1">{errores.correo}</p>}
        </div>

        {/* CONTENEDOR DEL NUEVO DROPDOWN PERSONALIZADO */}
        <div className="relative" ref={dropdownRef}>
          <label className="block text-sm font-bold text-[#5c4a3d] mb-1.5">Servicio de Interés</label>
          
          {/* Botón que simula el input */}
          <button
            type="button"
            onClick={() => setDropdownAbierto(!dropdownAbierto)}
            className={`${inputClass('servicio')} text-gray-700`}
          >
            <span className={formData.servicio ? 'text-gray-900' : 'text-gray-400'}>
              {formData.servicio || "Selecciona una opción"}
            </span>
            {/* Icono de flecha animada */}
            <svg 
              className={`w-4 h-4 text-[#5c4a3d] transition-transform duration-200 ${dropdownAbierto ? 'rotate-180' : ''}`} 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Menú desplegable flotante (No bloquea la pantalla) */}
          {dropdownAbierto && (
            <div className="absolute z-50 w-full mt-1 bg-white border border-[#d0dfd0] rounded-md shadow-lg overflow-hidden animate-fadeIn">
              {opcionesServicios.map((servicio, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => seleccionarServicio(servicio)}
                  className="w-full text-left px-4 py-3 text-sm text-[#5c4a3d] hover:bg-[#f8fbf8] hover:text-[#5A6D3A] font-medium transition-colors border-b border-gray-50 last:border-none"
                >
                  {servicio}
                </button>
              ))}
            </div>
          )}
          {errores.servicio && <p className="text-red-500 text-xs mt-1">{errores.servicio}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-[#5c4a3d] mb-1.5">Cuéntame sobre ti</label>
          <textarea
            id="mensaje" rows="4" placeholder="¿Cuál es tu objetivo? ¿Tienes alguna condición de salud que deba conocer?"
            value={formData.mensaje} onChange={handleChange}
            className="w-full bg-[#f8fbf8] border border-[#d0dfd0] rounded-md px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#5A6D3A]/50 resize-none text-gray-900"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#7b8d5c] hover:bg-[#697a4b] font-body text-white font-semibold py-3.5 rounded-md uppercase tracking-wide transition-colors shadow-sm"
        >
          Enviar Mensaje
        </button>

      </form>
    </div>
  );
};

export default ContactForm;