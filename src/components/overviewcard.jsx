import iconUp from "../assets/images/icon-up.svg";
import iconDown from "../assets/images/icon-down.svg";

function OverviewCard({ name, image, data, percent }) {
  const isDown = percent.startsWith("-");
  const todayIcon = isDown ? iconDown : iconUp;
  const todayColor = isDown ? "text-bright-red" : "text-lime-green";
  const displayPercent = percent.replace(/[+-]/, "");

  return (
    <div className="bg-theme-card relative overflow-hidden rounded-md p-6 hover:cursor-pointer hover:brightness-95 dark:hover:brightness-110">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-theme-text-muted text-sm font-bold">{name}</span>
        <img
          src={image}
          alt="platform icon"
          className="h-5 w-5 object-contain"
        />
      </div>

      <div className="flex items-end justify-between">
        <h2 className="text-theme-text text-3xl leading-none font-bold">
          {data}
        </h2>
        <div
          className={`flex items-center justify-center gap-1 text-xs font-bold ${todayColor}`}
        >
          <img
            src={todayIcon}
            alt={isDown ? "down" : "up"}
            className="object-contain"
          />
          <span>{displayPercent}</span>
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;
