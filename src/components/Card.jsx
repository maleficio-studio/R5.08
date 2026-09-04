import Button from "./Button";

function Card({ connected, name, title, img }) {
  return (
    <div className="card flex justify-between items-center gap-30">
      <div className="flex relative items-center gap-5">
        <img src={img} alt="" className="w-15 h-15 object-cover rounded-4xl"></img>
        <p className={`text-4xl absolute left-11 top-6 ${connected ? 'text-green-500' : 'text-red-500'}`}>●</p>
        <ul>
          <li className="font-bold text-lg">{name}</li>
          <li className="text-gray-500">{title}</li>
        </ul>
      </div>
      <Button/>
    </div>
  );
}

export default Card;