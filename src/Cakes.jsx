import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from './framerMotion/Variants'



export default function Cakes(props) {
  return (
    <motion.div 
      variants={fadeIn('up', 0.5)}
      initial = 'hidden'
      whileInView = 'show'
      viewport = {{once: false, amount:0}}
      className='cake-container'>
      <img src={props.image} alt="Cakes" className='cakes'/>
    </motion.div>
  )
}
