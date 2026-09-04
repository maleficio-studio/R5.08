function App() {
  return (
    <div className="Card">
      <h1 className="Name">Hedy Lamarr's Todos</h1>
      <img className="Image" src="https://i.imgur.com/yXOvdOSs.jpg" alt="" />

      <div className="todo-list">
        <ul>
          <li className="todo">Invent new traffic lights</li>
          <li className="todo">Rehearse a movie scene</li>
          <li className="todo">Improve the spectrum technology</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
