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
    rest: {
      scale: 1,
      backgroundColor: "#10b981", // emerald-500
    },
    hover: {
      scale: 1.1,
      backgroundColor: "#059669", // emerald-600
      transition: { type: "spring", damping: 10, stiffness: 400 },
    },
    tap: {
      scale: 0.95,
      backgroundColor: "#047857", // emerald-700
    },
  };

  return (
    <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-12 shadow-2xl shadow-emerald-900/20">
      <motion.button
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        className="cursor-pointer rounded-xl px-6 py-4 text-sm font-bold tracking-wider text-white uppercase outline-none sm:text-base"
      >
        Subscribe
      </motion.button>
    </div>
  );
}
