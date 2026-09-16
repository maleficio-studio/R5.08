import { motion } from "motion/react";
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
    <motion.div
      className="bg-theme-card relative rounded-md py-6 text-center hover:cursor-pointer"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <div
        className={`absolute top-0 left-0 h-1 w-full ${topBarStyles[name]}`}
      ></div>

      <motion.div
        className="flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
      >
        <img src={image} alt={name} className="h-5 w-5" />
        <span className="text-theme-text-muted text-xs font-bold">
          {username}
        </span>
      </motion.div>

      <div className="mt-6 mb-6">
        <motion.h2
          className="text-theme-text text-5xl font-bold"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
        >
          {followers}
        </motion.h2>
        <motion.p
          className="text-theme-text-muted mt-2 text-[0.75rem] tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.35 }}
        >
          {name === "Youtube" ? "Subscribers" : "Followers"}
        </motion.p>
      </div>

      <motion.div
        className={`flex items-center justify-center gap-1 text-xs font-bold ${todayColor}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.45, ease: "easeOut" }}
      >
        <img
          src={todayIcon}
          alt={isDown ? "down" : "up"}
          className="object-contain"
        />
        <span>{Math.abs(parseInt(today))} Today</span>
      </motion.div>
    </motion.div>
  );
}

export default MainCard;
