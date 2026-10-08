function TaskFilters({ filters, selectedFilter, onFilterChange }) {
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          onClick={() => onFilterChange(filter.id)}
          className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
            selectedFilter === filter.id
              ? "bg-slate-900 text-white"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default TaskFilters;
