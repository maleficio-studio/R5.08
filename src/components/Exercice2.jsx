/**
 * ## Exercice 2 : Keyframes et Boucles
 * Objectif : Créer des animations cycliques complexes.
 * - Utiliser des tableaux de valeurs (keyframes) pour les propriétés `scale`, `rotate` et `borderRadius`.
 * - Mettre en place une boucle infinie avec `repeat: Infinity` et `repeatType: "reverse"`.
 */
import { motion } from "motion/react";

export default function Exercice2() {
  return (
    <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-12 shadow-2xl shadow-purple-900/20">
      <motion.div
        animate={{
          scale: [1, 1.5, 1.5, 1],
          rotate: [0, 90, 270, 360],
          borderRadius: ["20%", "20%", "50%", "20%"],
          backgroundColor: ["#f43f5e", "#8b5cf6", "#3b82f6", "#10b981"] // rose to violet to blue to emerald
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="h-32 w-32 shadow-xl shadow-rose-500/30"
      ></motion.div>
    </div>
  );
}
