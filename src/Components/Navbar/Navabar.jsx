import React from 'react'
import './Navbar.css'
import dots from './ellipsis.png'
import menuOption from './menu-option.png'
import { Link } from 'react-router-dom'
function Navabar() {
  return (
    <>
    <div className="navbar">
        <div className="dots">
            <img className="dots-image" src={dots} alt='button'/>
        </div>
        <div className="navbar-menu font-class">
            <ul>
            <Link className = 'text-link' to="/ourteam"><li>About Us</li></Link>
            <Link className='text-link' to = '/contact'><li>Contact Us</li></Link>
                <li><img className="menu-option" src={menuOption} alt='menu-option'/></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navabar