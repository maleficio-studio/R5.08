/**
 * ## Exercice 4 : Animation SVG
 * Objectif : Animer des tracés vectoriels.
 * - Utiliser `pathLength` pour faire "se dessiner" une icône SVG.
 * - Définir des transitions spécifiques pour le tracé (`default`) et le remplissage (`fill`).
 * - Utiliser `repeatType: "reverse"` pour un effet de va-et-vient.
 */
import { motion } from "motion/react";

export default function Exercice4() {
  const svgIconVariants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(245, 158, 11, 0)", // transparent amber-500
    },
    visible: {
      pathLength: 1,
      fill: "rgba(245, 158, 11, 1)", // full amber-500
      transition: {
        default: { duration: 2, repeat: Infinity, repeatType: "reverse" },
        fill: { duration: 2, ease: "easeIn", delay: 1, repeat: Infinity, repeatType: "reverse" },
      },
    },
  };

  return (
    <div className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-1/2 stroke-amber-500 stroke-[0.5]"
      >
        <motion.path
          variants={svgIconVariants}
          initial="hidden"
          animate="visible"
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </motion.svg>
    </div>
  );
}
