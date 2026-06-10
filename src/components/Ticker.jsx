const Ticker = () => {
  const items = [
    "Salud Hormonal",
    "Cirugía Bariátrica",
    "Nutrición Clínica",
    "Asesoría Online",
    "Planes Personalizados",
  ];

  return (
    <div className="bg-taupe-500 py-7">
      <div className="flex justify-center flex-wrap gap-x-10 gap-y-2">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-xs uppercase tracking-widest text-taupe-200 font-body font-medium">
            <span className="font-title w-1.5 h-1.5 rounded-full bg-orange-200 inline-block"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;