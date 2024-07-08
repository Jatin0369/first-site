import React from 'react'
import './Footer.css'
import Images from './Images'
import { Link } from 'react-router-dom'


function Footer() {
    // console.log(imageList);
    return (
    <div className="footer-body">
        <div className="icons">
        <Images />
        </div>
        <div className="options">
          <ul className='font-class'>
            {/* <Link to = '/home'><li>Home</li></Link> */}
            <Link to = '/whoweare' className='text-link' ><li>About Us</li></Link>
            <Link to = '/contact' className='text-link' ><li>Contact Us</li></Link>
          </ul>
        </div>
        <div className="cpy">

        </div>
    </div>
  )
}

export default Footer