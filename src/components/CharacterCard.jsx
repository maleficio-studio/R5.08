function CharacterCard({ character }) {
  if (!character) return null;

  const { name, status, species, gender, location, origin, image } = character;

  const statusColors = {
    Alive: "bg-emerald-500",
    Dead: "bg-rose-500",
    unknown: "bg-slate-400",
  };

  return (
    <article className="overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col group">
      <div className="relative overflow-hidden aspect-square bg-slate-100">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover object-center group-hover:scale-105 transition duration-300"
        />
        <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 text-xs font-semibold text-white">
          <span
            className={`h-2 w-2 rounded-full ${statusColors[status] || "bg-slate-400"}`}
          />
          <span>{status}</span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition">
            {name}
          </h3>
          <p className="text-xs font-medium text-slate-500">
            {species} • {gender}
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-100 pt-3 text-xs text-slate-600">
          <div>
            <span className="text-slate-400 block text-[11px] font-medium uppercase">Origine</span>
            <span className="font-medium text-slate-800 line-clamp-1">{origin?.name || "Inconnue"}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px] font-medium uppercase">Dernière localisation</span>
            <span className="font-medium text-slate-800 line-clamp-1">{location?.name || "Inconnue"}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CharacterCard;
