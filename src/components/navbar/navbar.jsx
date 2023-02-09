import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const Navbar = () => {

  return (
    <div className='navbar'>
        <div className="links">
            <Link to="/">Shop</Link>
            <Link to="/cart"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></Link>
        </div>
    </div>
  )
}

export default Navbar;
