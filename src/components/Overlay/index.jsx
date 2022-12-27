import * as styles  from './index.css'

const Overlay = ({ toggleNavState }) => {
  return (
    <div className={styles.overlay} onClick={toggleNavState}></div>
  )
}

export default Overlay