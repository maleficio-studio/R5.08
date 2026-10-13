function TaskItem({
  task,
  isEditing,
  editValue,
  onEditValueChange,
  onToggle,
  onDelete,
  onStartEditing,
  onSave,
  onCancel,
}) {
  return (
    <li
      className={`group flex flex-col gap-3 rounded-[18px] border p-3.5 transition-all duration-150 sm:flex-row sm:items-center sm:justify-between ${
        task.done
          ? "border-[#2b3368] bg-[#141842]/70 opacity-80"
          : "border-[#2d357d] bg-[#1e2353] hover:border-[#424d9c] hover:bg-[#22275d] shadow-sm"
      }`}
    >
      <div className="flex flex-1 items-center gap-3.5">
        <button
          type="button"
          aria-label={
            task.done ? "Marquer comme non accomplie" : "Marquer comme accomplie"
          }
          onClick={onToggle}
          className={`flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 transition-all duration-150 active:scale-90 ${
            task.done
              ? "border-[#35ed7e] bg-[#35ed7e] text-black shadow-md shadow-[#35ed7e]/20"
              : "border-[#3b458c] bg-[#0c1038] hover:border-[#5865f2] hover:bg-[#12174d]"
          }`}
        >
          {task.done && (
            <svg
              className="h-4 w-4 stroke-[3.5]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </button>

        {isEditing ? (
          <input
            value={editValue}
            onChange={(event) => onEditValueChange(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                onSave();
              }
              if (event.key === "Escape") {
                onCancel();
              }
            }}
            className="flex-1 rounded-[12px] border border-[#5865f2] bg-[#0b0e35] px-3.5 py-2 text-base font-medium text-white outline-none ring-4 ring-[#5865f2]/25"
            autoFocus
          />
        ) : (
          <span
            onClick={onToggle}
            className={`cursor-pointer select-none text-base font-semibold transition-colors ${
              task.done
                ? "text-[#6d79a5] line-through decoration-[#6d79a5]/70"
                : "text-white group-hover:text-[#f2f4ff]"
            }`}
          >
            {task.title}
          </span>
        )}
      </div>

      {isEditing ? (
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            type="button"
            onClick={onSave}
            className="cursor-pointer rounded-[12px] bg-[#35ed7e] px-3.5 py-1.5 text-xs font-black tracking-wide text-black uppercase transition hover:bg-[#2de074] active:scale-95"
          >
            Enregistrer
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="cursor-pointer rounded-[12px] border border-[#2d357d] bg-[#161a46] px-3.5 py-1.5 text-xs font-bold text-[#8e9acf] hover:bg-[#242b6a] hover:text-white active:scale-95 transition"
          >
            Annuler
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            type="button"
            onClick={onStartEditing}
            className="cursor-pointer rounded-[12px] border border-[#2d357d] bg-[#161a46] px-3.5 py-1.5 text-xs font-bold text-[#8e9acf] hover:bg-[#282f6e] hover:text-white active:scale-95 transition"
          >
            Modifier
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="cursor-pointer rounded-[12px] border border-[#ed4245]/30 bg-[#ed4245]/15 px-3.5 py-1.5 text-xs font-bold text-[#ff7878] hover:bg-[#ed4245]/25 hover:border-[#ed4245]/50 active:scale-95 transition"
          >
            Supprimer
          </button>
        </div>
      )}
    </li>
  );
}

export default TaskItem;
