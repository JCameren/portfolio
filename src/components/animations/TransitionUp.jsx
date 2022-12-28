import { motion } from "framer-motion";

const TransitionUp = ({ children }) => {
  return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ ease: "easeInOut", duration: 1.25 }}
      >
        {children}
      </motion.div>
  );
};

export default TransitionUp;
