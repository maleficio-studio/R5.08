import { getIcon } from "../data/ImgData";

function MainCard({ name, platform, username, followers, today }) {
  const isDown = parseInt(today) < 0;
  const todayIcon = isDown ? getIcon("Down") : getIcon("Up");
  const todayColor = isDown ? "text-bright-red" : "text-lime-green";

  // Résolution de l'icône via le tableau associatif
  const image = getIcon(platform);

  const topBarStyles = {
    Facebook: "bg-facebook",
    Twitter: "bg-twitter",
    Instagram: "bg-gradient-to-r from-instagram-start to-instagram-end",
    Youtube: "bg-youtube",
  };

  return (
    <div className="bg-theme-card relative overflow-hidden rounded-md py-6 text-center hover:cursor-pointer hover:brightness-95 dark:hover:brightness-110">
      <div
        className={`absolute top-0 left-0 h-1 w-full ${topBarStyles[name]}`}
      ></div>

      <div className="flex items-center justify-center gap-2">
        <img src={image} alt={name} className="h-5 w-5" />
        <span className="text-theme-text-muted text-xs font-bold">
          {username}
        </span>
      </div>

      <div className="mt-6 mb-6">
        <h2 className="text-theme-text text-5xl font-bold">{followers}</h2>
        <p className="text-theme-text-muted mt-2 text-[0.75rem] tracking-[0.3em] uppercase">
          {name === "Youtube" ? "Subscribers" : "Followers"}
        </p>
      </div>

      <div
        className={`flex items-center justify-center gap-1 text-xs font-bold ${todayColor}`}
      >
        <img
          src={todayIcon}
          alt={isDown ? "down" : "up"}
          className="object-contain"
        />
        <span>{Math.abs(parseInt(today))} Today</span>
      </div>
    </div>
  );
}

export default MainCard;
