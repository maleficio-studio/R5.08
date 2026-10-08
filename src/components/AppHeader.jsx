function AppHeader() {
  return (
    <header className="mb-6 rounded-3xl bg-gradient-to-r from-sky-600 to-indigo-600 p-6 text-white shadow-lg shadow-sky-200">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-100">
        Todo List
      </p>
      <h1 className="mt-2 text-3xl font-bold md:text-4xl">
        Ma liste de tâches
      </h1>
    </header>
  );
}

export default AppHeader;
