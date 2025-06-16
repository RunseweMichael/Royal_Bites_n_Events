import React from 'react'
import call from './assets/callIcon.png'
import {Link} from 'react-scroll'


export default function Navbar() {
  return (
    <div className='navbar-container'>
        <div className='link-container'>
            <Link to='home' smooth={true} duration={200} className="nav-links">Home</Link>
            <Link to='menu' smooth={true} duration={200} className="nav-links">Menu</Link>
            <Link to='about' smooth={true} duration={200} className="nav-links" >About Us</Link>
            <Link to='gallery' smooth={true} duration={200} className="nav-links" >Gallery</Link>
            <Link to='testimonials' smooth={true} duration={200} className="nav-links" >Testimonials</Link>
            <Link to='contact' smooth={true} duration={200} className="nav-links" >Contact</Link>
        </div>

        <div>
            <div className='tel-icon-div'>
                <a href="tel: +2349030406498"><img src={call} alt="" /></a>
                <p>To place your order</p>
            </div>

            <div className='number'>
                <a href="tel: +2349030406498" className='num'>(+234) 903-0406-498</a>
            </div>
        </div>
      
    </div>
  )
}
