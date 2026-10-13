import { useMemo, useState } from "react";
import { initialTasks, taskFilters, taskStatistics } from "./data/tasks.js";
import AppHeader from "./components/AppHeader.jsx";
import TaskFilters from "./components/TaskFilters.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskItem from "./components/TaskItem.jsx";
import TaskStats from "./components/TaskStats.jsx";

import DiscordLogo from "./components/DiscordLogo.jsx";

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.done).length;
  const remainingTasks = totalTasks - completedTasks;

  const visibleTasks = useMemo(() => {
    switch (filter) {
      case "todo":
        return tasks.filter((task) => !task.done);
      case "done":
        return tasks.filter((task) => task.done);
      case "all":
      default:
        return tasks;
    }
  }, [filter, tasks]);

  const stats = taskStatistics.map((stat) => ({
    ...stat,
    value: {
      total: totalTasks,
      completed: completedTasks,
      remaining: remainingTasks,
    }[stat.id],
  }));

  const handleAddTask = (event) => {
    event.preventDefault();
    const trimmedTask = newTask.trim();

    if (!trimmedTask) return;

    setTasks((previousTasks) => [
      { id: Date.now() + Math.random(), title: trimmedTask, done: false },
      ...previousTasks,
    ]);
    setNewTask("");
  };

  const handleToggleTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== id));

    if (editingId === id) {
      setEditingId(null);
      setEditValue("");
    }
  };

  const startEditing = (task) => {
    setEditingId(task.id);
    setEditValue(task.title);
  };

  const handleSaveTask = (id) => {
    const trimmedValue = editValue.trim();

    if (!trimmedValue) return;

    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id ? { ...task, title: trimmedValue } : task,
      ),
    );
    setEditingId(null);
    setEditValue("");
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditValue("");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0d3a] px-4 py-8 text-white sm:py-12 md:px-8">
      {/* Discord atmospheric animated gradient mesh */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-mesh-1 absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#5865f2]/25 blur-[120px]" />
        <div className="animate-mesh-2 absolute top-1/4 -right-32 h-[450px] w-[450px] rounded-full bg-[#ec48bd]/20 blur-[130px]" />
        <div className="animate-mesh-3 absolute bottom-10 left-1/3 h-[500px] w-[500px] rounded-full bg-[#743ee4]/20 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <AppHeader />

        <TaskForm
          newTask={newTask}
          onNewTaskChange={setNewTask}
          onSubmit={handleAddTask}
        />

        <TaskStats stats={stats} />

        <section className="mt-6 rounded-[24px] border border-[#2d357d] bg-[#161a46]/90 p-5 shadow-2xl backdrop-blur-md md:p-6">
          <TaskFilters
            filters={taskFilters}
            selectedFilter={filter}
            onFilterChange={setFilter}
          />

          {visibleTasks.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#343e85] bg-[#0f133b]/60 px-6 py-12 text-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5865f2]/20 text-2xl">
                🎮
              </div>
              <p className="font-display text-lg font-bold text-white uppercase">
                Aucune quête disponible
              </p>
              <p className="mt-1 text-sm text-[#8893cc]">
                Toutes les quêtes pour ce filtre ont été validées ou n'existent pas encore.
              </p>
            </div>
          ) : (
            <ul className="space-y-3">
              {visibleTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  isEditing={editingId === task.id}
                  editValue={editValue}
                  onEditValueChange={setEditValue}
                  onToggle={() => handleToggleTask(task.id)}
                  onDelete={() => handleDeleteTask(task.id)}
                  onStartEditing={() => startEditing(task)}
                  onSave={() => handleSaveTask(task.id)}
                  onCancel={cancelEditing}
                />
              ))}
            </ul>
          )}
        </section>

        {/* Discord-inspired footer wordmark */}
        <footer className="mt-10 flex flex-wrap items-center justify-center gap-2 pb-6 text-xs font-bold tracking-widest text-[#727dae] uppercase">
          <DiscordLogo className="h-5 w-5 text-[#5865f2]" />
          <span className="font-display text-sm font-extrabold text-[#5865f2]">
            DISCORD QUEST
          </span>
          <span className="mx-1 opacity-40">•</span>
          <span>TODO SYSTEM // PLAY · ORGANIZE · SHIP</span>
        </footer>
      </div>
    </main>
  );
}

export default App;
