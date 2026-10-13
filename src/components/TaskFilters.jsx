function TaskFilters({ filters, selectedFilter, onFilterChange }) {
  return (
    <div className="mb-5 flex flex-wrap items-center gap-2">
      {filters.map((filter) => {
        const isActive = selectedFilter === filter.id;
        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onFilterChange(filter.id)}
            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-bold transition-all duration-150 ${
              isActive
                ? "bg-[#5865f2] text-white shadow-md shadow-[#5865f2]/30 scale-[1.02]"
                : "border border-[#2d357d] bg-[#1e2353] text-[#8e9acf] hover:bg-[#282f6e] hover:text-white"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}

export default TaskFilters;
