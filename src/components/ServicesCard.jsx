const SERVICE_ACCENTS = {
  0: { icon: "🥗", border: "border-emerald-200", tag: "bg-emerald-50 text-emerald-700" },
  1: { icon: "🩺", border: "border-emerald-200", tag: "bg-emerald-50 text-emerald-700" },
  2: { icon: "🌸", border: "border-emerald-200", tag: "bg-emerald-50 text-emerald-700" },
}

export default function ServicesCard({ title, description, subtitles = [], index = 0 }) {
  const accent = SERVICE_ACCENTS[index] ?? SERVICE_ACCENTS[0]

  return (
    <div className={`
      bg-white rounded-2xl border ${accent.border}
      flex flex-col
      px-5 py-5 shadow-sm text-center
      hover:shadow-md hover:-translate-y-1
      transition-all duration-300 ease-out
    `}>

      {/* Ícono */}
      <div className="text-4xl mb-3">{accent.icon}</div>

      {/* Título — altura fija mínima para que alinee entre cards */}
      <h3 className="text-lg font-title font-bold text-slate-700 leading-snug mb-3">
        {title}
      </h3>

      {/* Descripción — crece para llenar espacio */}
      <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5">
        {description}
      </p>

      {/* Tags — siempre al fondo */}
      <div className="flex flex-wrap gap-2 justify-center">
        {subtitles.map((texto, i) => (
          <span
            key={i}
            className={`${accent.tag} text-xs font-semibold px-3 py-1 rounded-full tracking-wide`}
          >
            {texto}
          </span>
        ))}
      </div>

    </div>
  )
}