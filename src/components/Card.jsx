import Button from "./Button";

function Card(props) {
  return (
    <div className="card flex justify-between items-center gap-30">
      <div className="flex items-center gap-5">
        <img src={props.img} alt="" className="w-15 h-15 object-cover rounded-4xl"></img>
        <ul>
          <li className="font-bold text-lg">{props.name}</li>
          <li className="text-gray-500">{props.title}</li>
        </ul>
      </div>
      <Button/>
    </div>
  );
}

export default Card;