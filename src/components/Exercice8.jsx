/**
 * ## Exercice 8 : Text Animation (Par caractère)
 * **Objectif** : Animer un texte lettre par lettre.
 * - Découper un texte en tableau de caractères.
 * - Utiliser `staggerChildren` pour un effet de "vague" ou de révélation séquentielle.
 * - Ajouter des transformations 3D (`rotateX`, `perspective`) pour un rendu premium.
 */
import { motion } from "motion/react";

const text = "L'ART DU MOUVEMENT";

export default function Exercice8() {
  const letters = Array.from(text);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", damping: 12 },
    },
  };

  return (
    <div className="flex aspect-square items-center justify-center rounded-lg bg-slate-800 px-6">
      <motion.h2
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ perspective: 500 }}
        className="flex flex-wrap justify-center text-center text-4xl font-black tracking-tighter text-white md:text-5xl"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block pointer-events-none"
            style={{
              marginRight: letter === " " ? "0.3em" : "0.02em",
              minWidth: letter === " " ? "0.3em" : "auto",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
}
