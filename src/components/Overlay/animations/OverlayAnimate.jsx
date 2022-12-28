import { motion } from "framer-motion"
import * as styles from '../index.css'

export const OverlayAnimate = ({ children, toggleNavState }) => {
    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.9 }}
      className={styles.overlay}
      onClick={toggleNavState}
      >
        {children}
      </motion.div>
    )
  }