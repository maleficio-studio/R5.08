function TaskStats({ stats }) {
  const getCardStyle = (variant) => {
    switch (variant) {
      case "primary":
        return "bg-[#5865f2] text-white shadow-lg shadow-[#5865f2]/25 border border-[#6b77f5]";
      case "magenta":
        return "bg-[#ec48bd] text-white shadow-lg shadow-[#ec48bd]/25 border border-[#f061c7]";
      case "indigo":
      default:
        return "bg-[#1e2353] text-white border border-[#2d357d] shadow-lg shadow-black/20";
    }
  };

  const getSubLabel = (variant) => {
    switch (variant) {
      case "primary":
        return "Enregistrées";
      case "magenta":
        return "Objectifs validés";
      case "indigo":
      default:
        return "À conquérir";
    }
  };

  return (
    <section className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`relative overflow-hidden rounded-[20px] p-5 transition-transform duration-200 hover:-translate-y-0.5 ${getCardStyle(
            stat.variant,
          )}`}
        >
          <div className="flex items-center justify-between">
            <p className="text-xs font-black tracking-widest uppercase opacity-90">
              {stat.label}
            </p>
            <span className="text-xs font-semibold opacity-75">
              {getSubLabel(stat.variant)}
            </span>
          </div>
          <p className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
            {stat.value}
          </p>
        </div>
      ))}
    </section>
  );
}

export default TaskStats;
