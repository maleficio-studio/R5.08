/**
 * ## Exercice 5 : Scroll Reveal
 * **Objectif** : Déclencher des animations à l'entrée dans l'écran.
 * - Utiliser `whileInView` au lieu de `animate`.
 * - Configurer `viewport` avec `once: false` et `amount` pour contrôler le déclenchement.
 * - Utiliser des noms sémantiques `offscreen` et `onscreen`.
 */
import { motion } from "motion/react";

export default function Exercice5() {
  const scrollVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 0.8 },
    },
  };

  return (
    <section className="mb-20 flex flex-col gap-10 py-20">
      <motion.h1
        variants={scrollVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.5 }}
        className="text-center text-6xl font-bold tracking-tight text-white"
      >
        Just Keep Scrolling
      </motion.h1>

      <motion.p
        variants={scrollVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.5 }}
        className="mx-auto max-w-2xl text-center text-3xl font-light leading-relaxed text-slate-300"
      >
        Il s'agit d'un exercice sur le déclenchement des animations au
        défilement (Scroll Reveal) avec Framer Motion.
      </motion.p>

      <motion.p
        variants={scrollVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.5 }}
        className="mx-auto max-w-2xl text-center text-3xl font-light leading-relaxed text-slate-300"
      >
        Grâce à whileInView, les éléments s'animent automatiquement lorsqu'ils
        entrent dans la zone visible.
      </motion.p>
    </section>
  );
}
