import { motion } from "framer-motion";
import * as styles from '../index.css'

export const SideNavAnimate = ({ children }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0}}
    exit={{ opacity: 0, y: -100 }}
    transition={{ ease: "easeInOut", duration: 0.9 }}
    className={styles.sideMenu}
    >
        {children}
    </motion.div>
  )
}