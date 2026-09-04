import Card from "./components/Card";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col p-10 justify-center gap-10 shadow-2xl">
        <ul className="flex flex-col items-start justify-center">
          <li className="text-4xl font-bold">Room</li>
          <li className="text-xl text-gray-400">5 people are around right now</li>
        </ul>
        <div className = "cardContainer flex gap-10 flex-col justify-between">

          <Card name="Dale Houston" title="Software Engineer" img="https://thispersondoesnotexist.com/random-person.jpeg"/>
          <Card name="Madge Murphy" title="Teacher" img="https://thispersondoesnotexist.com/random-person.jpeg"/>
          <Card name="Margaret Garner" title="Just a Nerd" img="https://thispersondoesnotexist.com/random-person.jpeg"/>
          <Card name="Gertrude Roberts" title="Photographer" img="https://thispersondoesnotexist.com/random-person.jpeg"/>
          <Card name="Jean Michel" title="Stone Eater" img="https://thispersondoesnotexist.com/random-person.jpeg"/>


        </div>
      </div>
    </div>

  );
}

export default App;