import { motion } from "motion/react";
// Utilisation de Variants pour définir les états de l'animation
// 'hidden' : état initial
// 'visible' : état final
// 'transition' : paramètres de l'animation
//  'delayChildren': déclenche l'animation de tous les enfants après un délai
//  'staggerChildren': déclenche les animations des enfants les unes après les autres
export default function Exercice0() {
  const myVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  // Variants du PARENT
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2, // attend 0.2s avant le premier enfant
        staggerChildren: 0.3, // 0.3s d'écart entre chaque enfant
      },
    },
  };

  // Variants des ENFANTS
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-5xl font-bold"
    >
      <motion.span variants={childVariants}>Hello</motion.span>
      <motion.span
        animate={{
          scale: [0.5, 2, 0.5],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0.1,
        }}
        variants={childVariants}
        className="inline-block text-blue-500"
      >
        World
      </motion.span>
      <motion.span
        animate={{
          rotate: [-45, 0, 45, 0, -45],
        }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        variants={childVariants}
        className="inline-block"
      >
        !
      </motion.span>
    </motion.h1>
  );
}
