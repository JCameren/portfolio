import * as styles  from './index.css'

const Overlay = ({ toggleNavState }) => {
  return (
    <div onClick={toggleNavState}></div>
  )
}

export default Overlay