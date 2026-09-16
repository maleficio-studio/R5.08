import { motion } from "motion/react";
import { getIcon } from "../data/ImgData";

function OverviewCard({ name, platform, data, percent }) {
  const isDown = percent.startsWith("-");
  const todayIcon = isDown ? getIcon("Down") : getIcon("Up");
  const todayColor = isDown ? "text-bright-red" : "text-lime-green";
  const displayPercent = percent.replace(/[+-]/, "");
  const image = getIcon(platform);

  return (
    <motion.div
      className="bg-theme-card relative rounded-md p-6 hover:cursor-pointer"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="mb-6 flex items-center justify-between"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
      >
        <span className="text-theme-text-muted text-sm font-bold">{name}</span>
        <img
          src={image}
          alt="platform icon"
          className="h-5 w-5 object-contain"
        />
      </motion.div>

      <div className="flex items-end justify-between">
        <motion.h2
          className="text-theme-text text-3xl leading-none font-bold"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
        >
          {data}
        </motion.h2>
        <motion.div
          className={`flex items-center justify-center gap-1 text-xs font-bold ${todayColor}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.35, ease: "easeOut" }}
        >
          <img
            src={todayIcon}
            alt={isDown ? "down" : "up"}
            className="object-contain"
          />
          <span>{displayPercent}</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default OverviewCard;
