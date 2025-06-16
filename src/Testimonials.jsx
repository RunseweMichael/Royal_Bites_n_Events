import React from 'react'
import girl from './assets/girl.jpg'
import image3 from './assets/image3.jpg'
import bride1 from './assets/bride1.jpg'
import bride2 from './assets/bride2.jpg'
import bride3 from './assets/bride3.jpg'
import testimg from './assets/testimg.jpg'
import testimg2 from './assets/testimg2.jpg'
import background2 from './assets/background2.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from './framerMotion/Variants'


export default function Testimonials() {
  return (<motion.div 
    variants={fadeIn('up', 0.5)}
    initial = 'hidden'
    whileInView = 'show'
    viewport = {{once: false, amount:0}}
    className='testimonials-container'>

    <h1 className='testimonial'>Testimonials</h1>
    <div>
      <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>

  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={girl} class="d-block w-100 test-img" alt="Testimonial Image" />
      <div class="carousel-caption d-md-block">
        <h6 style={{color: 'white'}}>⭐️⭐️⭐️⭐️⭐️ <br />
            “Exceptional from start to finish!”
             Royal Bites n' Events transformed our wedding reception
              into a dream. The decor was elegant, the
               catering was flawless, and the service
                was top-notch. Our guests are still
                 talking about the food!. <br />
                 — Olivia M., Bride
        </h6>
      </div>
    </div>

    <div class="carousel-item">
      <img src={bride1} class="d-block w-100 test-img" alt="Testimonial Image" />
      <div class="carousel-caption d-md-block">
        <h6 style={{color: 'orangered'}}>⭐️⭐️⭐️⭐️⭐️ <br />
“Reliable, professional, and creative.”
We hired Royal Bites n' Events for our company’s annual gala and were beyond impressed. They delivered an unforgettable experience, seamlessly blending theme, taste, and presentation.
<br />
— Precious R., <br /> Corporate Event Planner</h6>
      </div>
    </div>

    <div class="carousel-item">
      <img src={image3} class="d-block w-100 test-img" alt="Testimonial Image" />
      <div class="carousel-caption d-md-block">
        <h6 style={{color: 'white'}}>⭐️⭐️⭐️⭐️⭐️ <br />
“Delicious food and stunning decor.”
I couldn’t believe how beautiful the birthday setup was! The attention to detail and the gourmet buffet made everything feel so special.
<br />
— Sade A., Private Client</h6>
      </div>
    </div>

      <div class="carousel-item">
      <img src={bride3} class="d-block w-100 test-img" alt="Testimonial Image" />
      <div class="carousel-caption d-md-block">
        <h6 style={{color: 'orangered'}}>⭐️⭐️⭐️⭐️⭐️ <br />
“They handled everything beautifully.”
From the initial consultation to the final cleanup, Royal Bites n' Events exceeded expectations. Their team was courteous, organized, and incredibly creative.
<br />
— Mrs. Funmi R., Mother of the Bride</h6>
      </div>
    </div>

      <div class="carousel-item">
      <img src={testimg} class="d-block w-100 test-img" alt="Testimonial Image" />
      <div class="carousel-caption d-md-block">
        <h6 style={{color: 'white'}}>⭐️⭐️⭐️⭐️⭐️ <br />
"Flavor Bombs & Friendly Faces!"
Tried Royal Bites n' Events at a local food fair and instantly fell in love. Every dish was like a little flavor bomb—crispy, juicy, perfectly seasoned. Their team was super friendly and made everyone feel welcome. Can’t wait to book them for my next birthday bash!
<br />
— Bunmi S., Foodie</h6>
      </div>
    </div>

    <div class="carousel-item">
      <img src={bride2} class="d-block w-100 test-img" alt="Testimonial Image" />
      <div class="carousel-caption d-md-block">
        <h6 style={{color: 'orangered'}}>⭐️⭐️⭐️⭐️⭐️ <br />
"Perfect for Our Big Day!"
We hired Royal Bites n' Events to cater our wedding and couldn’t be happier. Not only was the food delicious (guests raved about the creamy pasta and dessert bites), but the presentation was stunning. Everything felt elegant, yet totally us. Thank you for making it stress-free and special!
<br />
— Tunde A., Repeat Client</h6>
      </div>
    </div>

    <div class="carousel-item">
      <img src={background2} class="d-block w-100 test-img" alt="Testimonial Image" />
      <div class="carousel-caption d-md-block">
        <h6 >⭐️⭐️⭐️⭐️⭐️ <br />
"Truly Royal Service & Flavor!"
From the first bite to the final clean-up, Royal Bites n' Events made our corporate lunch unforgettable. The food was vibrant, fresh, and full of flavor. Highly recommended for anyone who wants to impress guests without stress.
<br />
— Ayoka M., Caterer</h6>
      </div>
    </div>
    
  </div>
  

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </motion.div>
  )
}
