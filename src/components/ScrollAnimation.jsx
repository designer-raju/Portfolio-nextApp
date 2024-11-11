// components/ScrollToFadeInRight.js

import { motion, AnimatePresence } from "framer-motion";

const ScrollToFadeInRight = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        // animate={{ x: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        exit={{ x: 100, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ScrollToFadeInRight;
