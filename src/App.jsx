import Card from "./components/Card";
import data from "./data/data";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col p-10 justify-center gap-10 shadow-2xl">
        <ul className="flex flex-col items-start justify-center">
          <li className="text-4xl font-bold">Room</li>
          <li className="text-xl text-gray-400">5 people are around right now</li>
        </ul>
        <div className = "cardContainer flex gap-10 flex-col justify-between">

          {data.map((person) => (
            <Card connected={person.connected} id={person.id} name={person.name} title={person.title} img={person.img} />
          ))}

        </div>
      </div>
    </div>

  );
}

export default App;