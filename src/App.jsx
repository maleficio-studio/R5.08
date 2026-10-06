import { useState } from "react";

function LikeButton({ count, onLike }) {
  return (
    <button
      type="button"
      onClick={onLike}
      className="relative inline-flex items-center gap-2 rounded bg-pink-500 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-pink-600"
    >
      <span aria-hidden="true">❤️</span>
      J'aime
      <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
        {count}
      </span>
    </button>
  );
}

function ColorPicker({ onColorSelect }) {
  return (
    <div className="mb-4 flex gap-2">
      <button
        type="button"
        onClick={() => onColorSelect("red")}
        className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
      >
        Rouge
      </button>
      <button
        type="button"
        onClick={() => onColorSelect("blue")}
        className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
      >
        Bleu
      </button>
    </div>
  );
}

function ExerciseStatus() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => setIsVisible((prev) => !prev)}
        className="rounded bg-slate-800 px-3 py-1 text-sm text-white"
      >
        {isVisible ? "Masquer" : "Afficher"}
      </button>

      {isVisible ? <p>Le message est visible.</p> : <p>Le message est caché.</p>}
      {!isVisible && <p className="text-sm text-slate-500">Conditionnal rendering.</p>}
    </div>
  );
}

function ExerciseList() {
  const [items, setItems] = useState(["Apprendre React", "Faire du sport"]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    const value = newItem.trim();
    if (!value) return;

    setItems((prev) => [...prev, value]);
    setNewItem("");
  };

  return (
    <div className="space-y-3">
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={`${item}-${index}`} className="rounded bg-slate-100 px-3 py-2">
            {item}
          </li>
        ))}
      </ul>

      <div className="flex gap-2">
        <input
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
          placeholder="Ajouter une tâche"
          className="flex-1 rounded border border-slate-300 px-3 py-2"
        />
        <button type="button" onClick={addItem} className="rounded bg-emerald-500 px-3 py-2 text-white">
          Ajouter
        </button>
      </div>
    </div>
  );
}

function ExerciseImmutable() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Ranger le bureau", done: false },
    { id: 2, text: "Préparer le dîner", done: true },
  ]);

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center justify-between gap-3 rounded bg-slate-100 p-3">
          <button type="button" onClick={() => toggleTodo(todo.id)} className="flex items-center gap-2 text-left">
            <span className={`h-4 w-4 rounded border ${todo.done ? "bg-green-500 border-green-500" : "border-slate-400"}`} />
            <span className={todo.done ? "line-through text-slate-500" : ""}>{todo.text}</span>
          </button>
          <button type="button" onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-700">
            Supprimer
          </button>
        </li>
      ))}
    </ul>
  );
}

function ExerciseControlledInput() {
  const [email, setEmail] = useState("");

  return (
    <div className="space-y-2">
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="w-full rounded border border-slate-300 px-3 py-2"
        placeholder="Votre email"
      />
      <p className="text-sm text-slate-600">Valeur actuelle : {email || "vide"}</p>
    </div>
  );
}

function ExerciseUncontrolledForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = data.get("title");
    const description = data.get("description");
    alert(`Titre : ${title}\nDescription : ${description}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input name="title" defaultValue="Mon titre" className="w-full rounded border border-slate-300 px-3 py-2" />
      <textarea
        name="description"
        defaultValue="Détails de la tâche"
        className="w-full rounded border border-slate-300 px-3 py-2"
      />
      <button type="submit" className="rounded bg-violet-500 px-3 py-2 text-white">
        Soumettre
      </button>
    </form>
  );
}

function ExerciseFilter() {
  const products = ["Ordinateur", "Clavier", "Souris", "Écran", "Casque"];
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="space-y-3">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Filtrer"
        className="w-full rounded border border-slate-300 px-3 py-2"
      />
      <ul className="space-y-2">
        {filteredProducts.map((product) => (
          <li key={product} className="rounded bg-slate-100 px-3 py-2">
            {product}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExerciseSharedState() {
  const [search, setSearch] = useState("");
  const items = ["React", "Vue", "Svelte", "Angular", "Node"];

  const matches = items.filter((item) => item.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-3">
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Rechercher un framework"
        className="w-full rounded border border-slate-300 px-3 py-2"
      />
      <ul className="space-y-2">
        {matches.map((item) => (
          <li key={item} className="rounded bg-slate-100 px-3 py-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExerciseChildState() {
  const [selectedId, setSelectedId] = useState(2);

  const players = [
    { id: 1, name: "Alice", role: "Product owner" },
    { id: 2, name: "Bob", role: "Designer" },
    { id: 3, name: "Charlie", role: "Developer" },
  ];

  const selectedPlayer = players.find((player) => player.id === selectedId) ?? players[0];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-2">
        {players.map((player) => (
          <button
            key={player.id}
            type="button"
            onClick={() => setSelectedId(player.id)}
            className={`w-full rounded border px-3 py-2 text-left ${selectedId === player.id ? "border-blue-500 bg-blue-50" : "border-slate-200"}`}
          >
            {player.name}
          </button>
        ))}
      </div>
      <div className="rounded bg-slate-100 p-4">
        <p className="text-sm text-slate-500">Sélectionné</p>
        <h3 className="text-xl font-semibold">{selectedPlayer.name}</h3>
        <p>{selectedPlayer.role}</p>
      </div>
    </div>
  );
}

function App() {
  const [likes, setLikes] = useState(0);
  const [bgColor, setBgColor] = useState("white");

  return (
    <main className="space-y-8 bg-slate-50 p-8 text-slate-800">
      <section className="rounded-xl bg-white p-6 shadow-sm">
        <h1 className="mb-4 text-2xl font-bold">Exercice 1</h1>
        <LikeButton count={likes} onLike={() => setLikes((prev) => prev + 1)} />
      </section>

      <section className="rounded-xl bg-white p-6 shadow-sm" style={{ backgroundColor: bgColor }}>
        <h1 className="mb-4 text-2xl font-bold">Exercice 2</h1>
        <ColorPicker onColorSelect={(color) => setBgColor(color)} />
        <p>
          Couleur actuelle : <strong>{bgColor}</strong>
        </p>
      </section>

      <section className="rounded-xl bg-white p-6 shadow-sm">
        <h1 className="mb-4 text-2xl font-bold">Exercice 3</h1>
        <ExerciseStatus />
      </section>

      <section className="rounded-xl bg-white p-6 shadow-sm">
        <h1 className="mb-4 text-2xl font-bold">Exercice 4</h1>
        <ExerciseList />
      </section>

      <section className="rounded-xl bg-white p-6 shadow-sm">
        <h1 className="mb-4 text-2xl font-bold">Exercice 5</h1>
        <ExerciseImmutable />
      </section>

      <section className="rounded-xl bg-white p-6 shadow-sm">
        <h1 className="mb-4 text-2xl font-bold">Exercice 6</h1>
        <ExerciseControlledInput />
      </section>

      <section className="rounded-xl bg-white p-6 shadow-sm">
        <h1 className="mb-4 text-2xl font-bold">Exercice 7</h1>
        <ExerciseUncontrolledForm />
      </section>

      <section className="rounded-xl bg-white p-6 shadow-sm">
        <h1 className="mb-4 text-2xl font-bold">Exercice 8</h1>
        <ExerciseFilter />
      </section>

      <section className="rounded-xl bg-white p-6 shadow-sm">
        <h1 className="mb-4 text-2xl font-bold">Exercice 9</h1>
        <ExerciseSharedState />
      </section>

      <section className="rounded-xl bg-white p-6 shadow-sm">
        <h1 className="mb-4 text-2xl font-bold">Exercice 10</h1>
        <ExerciseChildState />
      </section>
    </main>
  );
}

export default App;
