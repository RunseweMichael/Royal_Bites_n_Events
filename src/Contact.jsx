import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from './framerMotion/Variants'

export default function Contact() {
  return (
    <motion.div 
      variants={fadeIn('up', 0.5)}
      initial = 'hidden'
      whileInView = 'show'
      viewport = {{once: false, amount:0}}
      className='full-container bg-img contact-container'>
      <div className='contact-div1'>
      <h2 className='cake-menu contact'>NEED OUR CATERING & EVENTS DECORATION SERVICES?</h2>
      <h6 className='cake-menu contact'>At Royal Bites n' Events, we take pride in delivering exceptional
         catering and event decoration services tailored to your unique vision.
          Whether you are planning a corporate function, private celebration,
           or large-scale event, our dedicated team ensures every detail is 
           executed with elegance and professionalism. Contact us today to 
           discuss how we can bring your occasion to life with impeccable 
           taste and style.</h6>
        </div>

      <form className='contact-div2' action="https://formsubmit.co/runsewemichael93@gmail.com" method="POST">
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_next" ></input>
        <input type="hidden" name="_subject" value="New message from Royal Kitchen Contact Form"></input>
        <div >
          <label className='color color1'>Name :</label>
          <input className='contact-input' type="text" name="Name" required />
        </div>
        <div>
          <label className='color color1'>Email :</label>
          <input className='contact-input' type="email" name="Email" required />
        </div>
        <div>
          <label className='color color2'>Message :</label> <br />
          <textarea className='contact-input' name="Message" required cols={30} rows={5}></textarea>
        </div>
        <button type="submit" id='contact-btn'>Send</button>
      </form>
    </motion.div>
  )
}
