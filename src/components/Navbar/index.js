import {AiOutlineShoppingCart} from 'react-icons/ai'

import './index.css'

const Navbar = () => {
  let prod
  return (
    <div className="nav-main">
      <h1>E-Commmerce</h1>
      <h3>
        <AiOutlineShoppingCart />
      </h3>
    </div>
  )
}

export default Navbar
