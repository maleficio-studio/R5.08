function TaskStats({ stats }) {
  return (
    <section className="mt-6 grid gap-3 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`rounded-2xl p-4 shadow-sm ${stat.tone}`}
        >
          <p className="text-sm opacity-80">{stat.label}</p>
          <p className="mt-2 text-3xl font-bold">{stat.value}</p>
        </div>
      ))}
    </section>
  );
}

export default TaskStats;
