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
      className={`flex flex-col gap-3 rounded-2xl border p-3 md:flex-row md:items-center md:justify-between ${
        task.done
          ? "border-emerald-200 bg-emerald-50"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <div className="flex flex-1 items-center gap-3">
        <button
          type="button"
          aria-label={
            task.done
              ? "Marquer comme non terminée"
              : "Marquer comme terminée"
          }
          onClick={onToggle}
          className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition ${
            task.done
              ? "border-emerald-500 bg-emerald-500 text-white"
              : "border-slate-300 bg-white hover:border-sky-500"
          }`}
        >
          {task.done ? "✓" : ""}
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
            className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            autoFocus
          />
        ) : (
          <span
            className={`text-base font-medium ${
              task.done
                ? "text-slate-500 line-through"
                : "text-slate-800"
            }`}
          >
            {task.title}
          </span>
        )}
      </div>

      {isEditing ? (
        <div className="flex gap-2 self-end md:self-auto">
          <button
            type="button"
            onClick={onSave}
            className="rounded-lg bg-emerald-500 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-600"
          >
            Enregistrer
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Annuler
          </button>
        </div>
      ) : (
        <div className="flex gap-2 self-end md:self-auto">
          <button
            type="button"
            onClick={onStartEditing}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Modifier
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white hover:bg-red-600"
          >
            Supprimer
          </button>
        </div>
      )}
    </li>
  );
}

export default TaskItem;
