import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import {motion} from 'framer-motion'
import { fadeIn } from './framerMotion/Variants';
import {Link} from 'react-scroll'

export default function Footer() {
  return (
    <motion.div 
      variants={fadeIn('up', 0.5)}
      initial = 'hidden'
      whileInView = 'show'
      viewport = {{once: false, amount:0}}
      className='footer-container'>
      <div className='footer-header'>
         <h1>Royal Bites n' Events</h1>
         <p>Bringing Culinary Excellence to Your Events</p>
      </div>

      <div className='footer-content'>
        <div className='footer-div'>
          <h4>INFORMATION</h4>
          <div  className='footer-logo'>
            <Link to='about' smooth={true} duration={200} className='social-link'>About Us</Link>
            <Link to='gallery' smooth={true} duration={200} className='social-link'>Food Gallery</Link>
            <Link to='menu' smooth={true} duration={200} className='social-link'>Menu</Link>
            <Link to='testimonial' smooth={true} duration={200} className='social-link'>Testimonials</Link>
            <Link to='contact' smooth={true} duration={200} className='social-link'>Contact</Link>
            <Link to='home' smooth={true} duration={200} className='social-link'>Home</Link>
          </div>
        </div>

        <div className='footer-div'>
          <h4 className='contact-us'>CONTACT US</h4>
          <div  className='footer-logo'>
            <a href="mailto:support@example.com" className='social-link'>Email</a>
            <a href="tel:+234 9077781076" className='social-link'>+ (234) 907-7781-078</a>
            <a href="/contact" className='social-link'>Contact Form</a>
          </div>
        </div>

        <div className='footer-div'>
          <h4 className='contact-us'>OUR COMPANY</h4>
          <div  className='footer-logo'>
            <span>Address: 22 Gabriel AKanni Street, Apete, Ibadan, Oyo State, Nigeria.</span>
            <p>Mon-Sat: 9am - 5pm</p>
          </div>
        </div>
      </div>

      <div className='links-div'>
        <div className='footer-links-container'>
          <a href=""><FaFacebook style={{ fontSize: '30px', color: '#FFFFFF' }}/></a>
          <a href="https://twitter.com/#"><FaTwitter style={{ fontSize: '30px', color: '#FFFFFF' }}/></a>
          <a href="https://www.instagram.com/royalbites_n_events"><FaSquareInstagram style={{ fontSize: '30px', color: '#FFFFFF' }}/></a>
          <a href="https://wa.me/2349030406498"><FaWhatsapp style={{ fontSize: '30px', color: '#FFFFFF' }}/></a>
        </div>

        <div className='copyright'>
          Copyright &copy; 2025 Royal Bites n' Events Services. All rights reserved.
          <p>Website built and deployed by Michael Runsewe.</p>
        </div>
      </div>
    </motion.div>
  )
}
