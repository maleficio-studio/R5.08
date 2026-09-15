/**
 * ## Exercice 3 : Interactions (Hover & Tap)
 * Objectif : Rendre l'interface réactive au curseur et au clic.
 * - Créer un bouton interactif utilisant `whileHover` et `whileTap`.
 * - Configurer une transition de type `spring` (ressort) avec `stiffness` et `damping`.
 * - Utiliser des noms de variants sémantiques (`rest`, `hover`, `tap`).
 */
import { motion } from "motion/react";

export default function Exercice3() {
  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.1,
      backgroundColor: "#059669", // emerald-600
      transition: { type: "spring", damping: 10, stiffness: 600 },
    },
    tap: { scale: 0.9 },
  };

  return (
    <div className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800">
      <motion.button
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        className="w-1/2 cursor-pointer rounded-lg bg-emerald-600 py-4 text-2xl font-light tracking-wide text-gray-100"
      >
        subscribe
      </motion.button>
    </div>
  );
}
