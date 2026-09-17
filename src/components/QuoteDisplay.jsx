// components/QuoteDisplay.jsx
import { motion, AnimatePresence } from "motion/react";

function QuoteDisplay({ quote, animKey }) {
  return (
    <AnimatePresence mode="wait">
      {quote && (
        <motion.p
          key={animKey}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="quote-card"
        >
          {quote}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export default QuoteDisplay;
