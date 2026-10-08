function TaskForm({ newTask, onNewTaskChange, onSubmit }) {
  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 md:p-5">
      <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={newTask}
          onChange={(event) => onNewTaskChange(event.target.value)}
          placeholder="Ajouter une nouvelle tâche"
          className="flex-1 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-base outline-none transition focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
          aria-label="Ajouter une tâche"
        />
        <button
          type="submit"
          className="rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-700"
        >
          Ajouter
        </button>
      </form>
    </section>
  );
}

export default TaskForm;
