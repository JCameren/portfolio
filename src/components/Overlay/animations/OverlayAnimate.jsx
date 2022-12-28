import { motion } from "framer-motion"
import * as styles from '../index.css'

export const OverlayAnimate = ({ children }) => {
    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1.25 }}
      className={styles.overlay}
      >
        {children}
      </motion.div>
    )
  }