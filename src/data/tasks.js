export const initialTasks = [
  { id: 1, title: "Rejoindre le salon vocal d'équipe", done: true },
  { id: 2, title: "Configurer le bot de notifications Discord", done: false },
  { id: 3, title: "Débloquer le badge Quête Nitro", done: false },
];

export const taskFilters = [
  { id: "all", label: "Toutes les quêtes" },
  { id: "todo", label: "En cours" },
  { id: "done", label: "Accomplies" },
];

export const taskStatistics = [
  { id: "total", label: "TOTAL QUÊTES", variant: "primary" },
  { id: "completed", label: "ACCOMPLIES", variant: "magenta" },
  { id: "remaining", label: "EN ATTENTE", variant: "indigo" },
];
