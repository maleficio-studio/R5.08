// components/QuoteDisplay.jsx
import { motion, AnimatePresence } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
  exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } },
};

const letterVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

function QuoteDisplay({ quote }) {
  const letters = Array.from(quote || "");

  return (
    <AnimatePresence mode="wait">
      {quote && (
        <motion.p
          key={quote}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="quote-card"
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
              style={{
                marginRight: letter === " " ? "0.2em" : "0.05em",
                minWidth: letter === " " ? "0.2em" : "auto",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export default QuoteDisplay;
