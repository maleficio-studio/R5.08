/**
 * ## Exercice 1 : Orchestration (Stagger)
 *  Objectif : Animer plusieurs éléments de manière séquentielle.
 * - Créer un conteneur parent et deux enfants.
 * - Utiliser `staggerChildren` dans le variant parent pour décaler l'apparition des enfants.
 * - Faire venir un enfant du haut et l'autre du bas.
 */
import { motion } from "motion/react";

export default function Exercice1() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  const child1Variants = {
    hidden: { opacity: 0, y: -100, rotate: -20 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", bounce: 0.5, duration: 1 } },
  };

  const child2Variants = {
    hidden: { opacity: 0, y: 100, rotate: 20 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", bounce: 0.5, duration: 1 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex aspect-square items-center justify-center gap-10 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-12 shadow-2xl shadow-indigo-900/20"
    >
      {/* Carré venant du haut */}
      <motion.div
        variants={child1Variants}
        className="h-24 w-24 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 shadow-lg shadow-pink-500/30"
      ></motion.div>

      {/* Cercle venant du bas */}
      <motion.div
        variants={child2Variants}
        className="h-24 w-24 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-lg shadow-blue-500/30"
      ></motion.div>
    </motion.div>
  );
}
