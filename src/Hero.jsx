import React from 'react'
import rice from './assets/rice.jpg'
import hat from './assets/chefhat.png'
import {motion} from 'framer-motion'
import { fadeIn } from './framerMotion/Variants'

export default function Hero() {
  const openWhatsApp = () => {
  const phone = '+2349030406498';
  const message = encodeURIComponent("Hi! I'm interested in your services.");
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
};

  return (
    <div id='hero-container'>        
        <div id='royal-kitchen'>
            <div id='name'>
                <motion.p
                  variants={fadeIn('down', 0.5)}
                  initial = 'hidden'
                  whileInView = 'show'
                  viewport = {{once: false, amount:0}}
                >Super Delicious </motion.p>
                < motion.img 
                  variants={fadeIn('down', 0.5)}
                  initial = 'hidden'
                  whileInView = 'show'
                  viewport = {{once: false, amount:0}}
                src={hat} alt="Chef Hat" id='hat'/>
            </div>

            <motion.div 
              variants={fadeIn('right', 0.5)}
              initial = 'hidden'
              whileInView = 'show'
              viewport = {{once: false, amount:0}}
              id='kitchen'>ROYAL BITES N' EVENTS</motion.div>
            <div>
                <motion.p
                  variants={fadeIn('left', 0.5)}
                  initial = 'hidden'
                  whileInView = 'show'
                  viewport = {{once: false, amount:0}}
                  className='green'>Limited time offer
                </motion.p>

                <motion.p 
                  variants={fadeIn('up', 0.5)}
                  initial = 'hidden'
                  whileInView = 'show'
                  viewport = {{once: false, amount:0}}
                  className='text'>Enjoy Free Delivery Within <span id='min'>Minutes</span>
                </motion.p>
            </div>

            <motion.button 
              variants={fadeIn('up', 0.5)}
              initial = 'hidden'
              whileInView = 'show'
              viewport = {{once: false, amount:0}}
              id='btn' onClick={openWhatsApp}>ORDER NOW</motion.button>
        </div>

      <div id='image-div'>
        <motion.img 
          variants={fadeIn('left', 0.4)}
          initial = 'hidden'
          whileInView = 'show'
          viewport = {{once: false, amount:0.3}}
          src={rice} alt="Rice" className='image-mod'/>
        </div>
    </div>
  )
}
