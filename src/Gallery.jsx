import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from './framerMotion/Variants';

export default function Gallery(props) {
  const handleclick = () => {
    const phone = '+2349030406498';
    const message = encodeURIComponent(`Hi! I'm interested in your services.
       I would love to order a plate of ${props.name}.
        Here are the details:
        Name: [Your Name]
        Phone: [Your Phone Number]
        Address: [Your Address]
        Please let me know the total cost and how to proceed with the payment.
       Thank you!
       `);

    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  }

  return (
    <div>
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial = 'hidden'
          whileInView = 'show'
          viewport = {{once: false, amount:0}}
          className='card-div'>
            <img src={props.image} alt="" className='cards-img'/>
            <h5>{props.name}</h5>
            <p>{props.text}</p>
            <h2 className='prices'>₦{props.price}</h2>
            <button className='btn-card' onClick={handleclick}>Order Now!!!</button>
        </motion.div>
    </div>
  )
}
