function TaskForm({ newTask, onNewTaskChange, onSubmit }) {
  return (
    <section className="relative rounded-[24px] border border-[#2d357d] bg-[#161a46]/90 p-4 shadow-xl backdrop-blur-md sm:p-5">
      <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <input
            type="text"
            value={newTask}
            onChange={(event) => onNewTaskChange(event.target.value)}
            placeholder="Quelle est ta prochaine quête ?"
            className="w-full rounded-[14px] border border-[#2d357d] bg-[#0b0e35] px-4 py-3.5 text-base font-medium text-white placeholder-[#6f7ca7] transition-all outline-none focus:border-[#5865f2] focus:bg-[#0f1342] focus:ring-4 focus:ring-[#5865f2]/25"
            aria-label="Ajouter une tâche"
          />
        </div>
        <button
          type="submit"
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-[#35ed7e] px-6 py-3.5 font-display text-base font-extrabold tracking-wide text-black uppercase transition-all duration-150 hover:bg-[#2de074] hover:shadow-lg hover:shadow-[#35ed7e]/20 active:scale-[0.98]"
        >
          <span>＋</span>
          <span>Ajouter</span>
        </button>
      </form>
    </section>
  );
}

export default TaskForm;
