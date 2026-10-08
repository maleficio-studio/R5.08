export const initialTasks = [
  { id: 1, title: "Apprendre React", done: false },
  { id: 2, title: "Ranger le bureau", done: true },
  { id: 3, title: "Préparer le dîner", done: false },
];

export const taskFilters = [
  { id: "all", label: "Toutes" },
  { id: "todo", label: "À faire" },
  { id: "done", label: "Terminé" },
];

export const taskStatistics = [
  { id: "total", label: "Total", tone: "bg-slate-900 text-white" },
  { id: "completed", label: "Terminées", tone: "bg-emerald-500 text-white" },
  { id: "remaining", label: "Restantes", tone: "bg-amber-400 text-slate-900" },
];
