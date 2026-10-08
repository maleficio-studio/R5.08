import { useMemo, useState } from "react";
import {
  initialTasks,
  taskFilters,
  taskStatistics,
} from "./data/tasks.js";
import AppHeader from "./components/AppHeader.jsx";
import TaskFilters from "./components/TaskFilters.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskItem from "./components/TaskItem.jsx";
import TaskStats from "./components/TaskStats.jsx";

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
    <main className="min-h-screen bg-slate-100 p-4 text-slate-800 md:p-8">
      <div className="mx-auto max-w-3xl">
        <AppHeader />
        <TaskForm
          newTask={newTask}
          onNewTaskChange={setNewTask}
          onSubmit={handleAddTask}
        />
        <TaskStats stats={stats} />

        <section className="mt-6 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 md:p-5">
          <TaskFilters
            filters={taskFilters}
            selectedFilter={filter}
            onFilterChange={setFilter}
          />

          {visibleTasks.length === 0 ? (
            <p className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-slate-500">
              Aucune tâche pour ce filtre.
            </p>
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
      </div>
    </main>
  );
}

export default App;
