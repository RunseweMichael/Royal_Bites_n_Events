import React from "react";
import cake from './assets/cake7.jpg'
import icon24 from './assets//24.png'
import cheficon from './assets/chef.png'
import kitchenicon from './assets/kitchen.png'
import onlineicon from './assets/onlineOrder.png'
import reservation from './assets/reservation.png'
import foodicon from './assets/foodIcon.png' 
import {motion} from 'framer-motion'
import { fadeIn } from "./framerMotion/Variants";
import { Link } from "react-scroll";

export default function About() {
  return (
    <div className="about-container">
      <motion.div 
        variants={fadeIn('right', 0.5)}
        initial = 'hidden'
        whileInView = 'show'
        viewport = {{once: false, amount:0}}
        className="outer-div">

        <h2>WELCOME TO ROYAL BITES N' EVENTS</h2>
        <div className="about-us">
          <p>At Royal Bites n' Events, baking is more than just a craft — it’s our
          passion, our heritage, and our way of bringing people together.
          Founded on the belief that fresh, homemade flavors should be a daily
          delight, we blend time-honored techniques with creative flair to craft
          baked goods that warm the heart and satisfy the soul. </p>

          <p>From golden,
          flaky pastries and artisan breads to decadent cakes and wholesome
          treats, every item is made with love, high-quality ingredients, and a
          dedication to excellence. Whether you're stopping by for your morning
          croissant, a custom cake for a celebration, or simply a sweet
          pick-me-up, you'll always be greeted with the comforting aroma of
          freshly baked goodness and a warm smile.</p>
    
          <p>Royal Bites n' Events —
          where every bite tells a story.</p>
        </div>
        <Link to='menu'><button className="about-btn" >Our Menu</button></Link>
      </motion.div>

      <motion.div 
        variants={fadeIn('up', 0.5)}
        initial = 'hidden'
        whileInView = 'show'
        viewport = {{once: false, amount:0}}
        className="middle-div">
        <img src={cake} alt="Cake Image" className="about-img"/>
      </motion.div>

      <motion.div 
        variants={fadeIn('left', 0.5)}
        initial = 'hidden'
        whileInView = 'show'
        viewport = {{once: false, amount:0}}
        className="inner-div">
       <div className="check">
            <img src={reservation} alt="Reservation Icon" className="about-us-icons" />Pre-Reservation
            <img src={cheficon} alt="Chef Icon" className="about-us-icons" />Super Chefs
        </div>
        <div className="check">
            <img src={kitchenicon} alt="Kitchen Icon" className="about-us-icons" />Hygienic Kitchen
            <img src={onlineicon} alt="Online Order Icon" className="about-us-icons" />Online order
        </div>
        <div className=" check check1">
            <img src={icon24} alt="24 Hour Service Icon" className="about-us-icons check2"/>24 Hour Service
            <img src={foodicon} alt="Food Icon" className="about-us-icons" />Delicacies
        </div>
      </motion.div>
    </div>
  );
}
