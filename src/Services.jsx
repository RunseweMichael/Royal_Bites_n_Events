import React from 'react'
import delivery from './assets/delivery.png'
import verified from './assets/verified.png'
import store from './assets/store.png'
import warehouse from './assets/warehouse.png'
import {motion} from 'framer-motion'
import { fadeIn } from './framerMotion/Variants'

export default function Services() {
  return (
    <motion.div 
        variants={fadeIn('up', 0.5)}
        initial = 'hidden'
        whileInView = 'show'
        viewport = {{once: false, amount:0}}
        className='services-container'>
        <div>
            <div className='icon-div'>
                <img src={warehouse} alt="Warehouse Icon" className='service' />
                <h6>Cheap Shipping</h6>
            </div>
            <p className='icon-div p'>Affordable packaging made easy.</p>
        </div>

        <div>
             <div className='icon-div'>
                <img src={store} alt="Store Icon" className='service' />
                <h6>Our Store</h6>
            </div>
            <p className='icon-div p'>Welcome to our kitchen, where quality meets value.</p>
        </div>

        <div>
             <div className='icon-div'>
                <img src={delivery} alt="Delivery Icon" className='service' />
                <h6>Fast Delivery</h6>
             </div>
             <p className='icon-div p'>Fast delivery right to your doorstep.</p>
        </div>

        <div>
             <div className='icon-div'>
                <img src={verified} alt="Verified Icon" className='service' />
                <h6>Best Quality</h6>
            </div>
            <p className='icon-div p'>Only the best quality, guaranteed.</p>
        </div>
    </motion.div>
  )
}
