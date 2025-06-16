import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Gallery from './Gallery'
import amala from './assets/amala.jpg'
import beans from './assets/beans.jpg'
import bread1 from './assets/bread1.jpg'
import bread2 from './assets/bread2.jpg'
import pounded from './assets/poundedyam.jpg'
import rice1 from './assets/whuterice2.jpg'
import rice2 from './assets/whiteRice.jpg'
import jollof1 from './assets/jollof1.jpg'
import jollof2 from './assets/jollof2.jpg'
import spag1 from './assets/spag1.jpg'
import spag2 from './assets/spag2.jpg'
import fried from './assets/fried1.jpg'
import efo from './assets/efo.jpg'
import eba from './assets/eba.jpg'
import snack1 from './assets/snack1.jpg'
import snack2 from './assets/snack3.jpg'
import About from './About'
import Cakes from './Cakes'
import cake3 from './assets/cake3.jpg'
import cake4 from './assets/cake4.jpg'
import cake5 from './assets/cake5.jpg'
import cake6 from './assets/cake6.jpg'
import cake7 from './assets/cake7.jpg'
import cake8 from './assets/cake8.jpg'
import cake9 from './assets/cake9.jpg'
import cake10 from './assets/cake10.jpg'
import cake1 from './assets/cake.jpg'
import fruit2 from './assets/fruit2.jpg'
import fruit3 from './assets/fruit3.jpg'
import fruit4 from './assets/fruit4.jpg'
import fruit5 from './assets/fruit5.jpg'
import fruit6 from './assets/fruit6.jpg'
import fruit7 from './assets//fruit8.jpg'
import fruit8 from './assets/juice9.jpg'
import fruit9 from './assets/fruit13.jpg'
import fruit10 from './assets/fruit12.jpg'
import cream1 from './assets/ice-cream.jpg'
import cream2 from './assets/ice-cream1.jpg'
import cream3 from './assets/ice-cream2.jpg'
import cream4 from './assets/ice-cream3.jpg'
import cream5 from './assets/ice-cream5.jpg'
import cream6 from './assets/ice-cream5.jpg'
import cream7 from './assets/ice-cream6.jpg'
import cream8 from './assets/ice-cream7.jpg'
import cream9 from './assets/ice-cream8.jpg'
import pastry1 from './assets/pastry1.jpg'
import pastry2 from './assets/pastry2.jpg'
import pastry3 from './assets/pastry3.jpg'
import pastry4 from './assets/pastry4.jpg'
import pastry5 from './assets/pastry5.jpg'
import pastry6 from './assets/pastry6.jpg'
import pastry7 from './assets/pastry7.jpg'
import pastry8 from './assets/pastry8.jpg'
import pastry9 from './assets/pastry9.jpg'
import event1 from './assets/event2.jpg'
import event2 from './assets/event4.jpg'
import event3 from './assets/event5.jpg'
import event4 from './assets/event6.jpg'
import event5 from './assets/event8.jpg'
import event6 from './assets/event9.jpg'
import event7 from './assets/event10.jpg'
import event8 from './assets/event11.jpg'
import event9 from './assets/event12.jpg'
import Contact from './Contact'
import Testimonials from './Testimonials'
import event01 from './assets//event0.1.jpg'
import event02 from './assets/event0.2.jpg'
import event03 from './assets/event0.3.jpg'
import pastry01 from './assets/pastry0.1.jpg'
import pastry02 from './assets/pastry0.2.jpg'
import pastry03 from './assets/pastry0.3.jpg'
import cream01 from './assets/cream0.1.jpg'
import cream02 from './assets/cream0.2.jpg'
import cream03 from './assets/cream0.3.jpg'
import cream04 from './assets/cream0.4.jpg'
import juice01 from './assets/juice0.1.jpg'
import juice02 from './assets/juice0.2.jpg'
import juice03 from './assets/juice0.3.jpg'
import cake01 from './assets/cake0.1.jpg'
import cake02 from './assets/cake0.2.jpg'
import cake03 from './assets/cake0.3.jpg'
import cake04 from './assets/cake0.4.jpg'
import Services from './Services'
import Footer from './Footer'
import VideoPlayer from './VideoPlayer'
import { Element } from 'react-scroll';












export default function App() {
  return (
    <div>
      <Element name='home' ><VideoPlayer /></Element>
      <Navbar />
      <Element name=''><Hero /></Element>
      <Element name='gallery'>
        <div><h1 className='popular'>Popular Plates</h1></div>
        <div className='flex'>
          <Gallery id={1} image={amala} price='1200' name= 'Amala' text='Exprience the authentic taste of Yoruba tradition with every bite of Amala.' />
          <Gallery id={2} image={beans} price='1200' name= 'Beans' text='Satisfy your hunger with our delicious, slow-cooked beans, bursting with flavor and goodness.'/>
          <Gallery id={3} image={bread1} price='1200' name= 'Bread' text='Freshly baked, soft and warm - our bread is the perfect companion to any meal!'/>
          <Gallery id={4} image={bread2} price='1200' name= 'Ginger Bread' text='Warm up with our soft, spicy and utterly delicious gluten-free gingerbread, perfect for the holidays!'/>
          <Gallery id={5} image={pounded} price='1200' name= 'Pounded Yam' text='Savor the traditional taste of Nigeria with our deliciosly pounded yam, smooth, stretchy, and utterly satisfying.'/>
          <Gallery id={6} image={rice1} price='1200' name= 'White Rice' text='Simple, fluffy and perfectly cooked - our white rice is the ultimate comfort food!'/>
          <Gallery id={7} image={rice2} price='1200' name= 'Spanish Rice' text='Sabor autentico en cada grano: nuestro arroz espanol, ileno de tomate, ajo y especias, es el acompanamiento perfecto!'/>
          <Gallery id={8} image={jollof1} price='1200' name= 'Jollof Rice With Chicken' text="One pot, one flavor, one love: Jollof rice, the West African classic that's smoky, and simply irresistible!"/>
          <Gallery id={9} image={spag1} price='1200' name= 'Stir-fried Spaghetti' text='Twirl, toss, and savor: our stir-fried spaghetti, a flavorful fusion of East meets West, is a dish that will leave you craving more.'/>
          <Gallery id={10} image={spag2} price='1200' name= 'Jollof Spag with Meat Balls' text='Jollof spag just got a whole lot better! Our spicy Jollof spaghetti meets juicy meatballs for a match made in food heaven.'/>
          <Gallery id={11} image={jollof2} price='1200' name='Big-Man Jollof' text='West African vibes on a plate! Jollof rice, roasted turkey, and sweet plantain - a flavor party in every bite.'/>
          <Gallery id={12} image={fried} price='1200' name= 'Fried Rice' text='Rice, revamped! Our fried rice is a flavorful mix of savory, spicy, and sweet, with a crunch finish that will leave you wanting more'/>
          <Gallery id={13} image={efo} price='1200' name= 'Efo Riro' text='Efo riro, the Yoruba classic! This delicious vegetable soup is a staple in Nigerian cuisine, packed with flavor and nutrients.'/>
          <Gallery id={14} image={eba} price='1200' name= 'Eba' text='Eba! Smooth, stretchy and perfect with your favorite soups, like egusi and efo riro.'/>
          <Gallery id={15} image={snack1} price='1200' name= 'Snacks' text="Snack attack! What's your craving - crunchy plantain chips, savory puff-puff, or maybe some spicy roasted meatballs?"/>
          <Gallery id={16} image={snack2} price='1200' name= 'Snacks Basket' text='A cacaphony of goodness! Pick one or pick all...'/>
        </div>
      </Element>
      
      <Element name='about'><About /></Element>

      <Element name='menu'>
        <div className='full-container'>
          <h2 className='cake-menu'>Our Cake Menu</h2>
          <div className='outer-cake-container'>
            <Cakes id={1} image={cake3} />
            <Cakes id={2} image={cake4} />
            <Cakes id={3} image={cake5} />
            <Cakes id={4} image={cake6} />
            <Cakes id={5} image={cake7} />
            <Cakes id={6} image={cake8} />
            <Cakes id={7} image={cake9} />
            <Cakes id={8} image={cake10}/>
            <Cakes id={9} image={cake03} />
            <Cakes id={10} image={cake01} />
            <Cakes id={11} image={cake02} />
            <Cakes id={12} image={cake04} />
          </div>
        </div>

        <div className='full-container'>
          <h2 className='cake-menu'>Our Juice Menu</h2>
          <div className='outer-cake-container'>
            <Cakes id={1} image={fruit2} />
            <Cakes id={2} image={fruit3} />
            <Cakes id={3} image={fruit4} />
            <Cakes id={4} image={fruit5} />
            <Cakes id={5} image={fruit6} />
            <Cakes id={6} image={fruit7} />
            <Cakes id={7} image={fruit8} />
            <Cakes id={8} image={fruit9} />
            <Cakes id={9} image={fruit10} />
            <Cakes id={10} image={juice03} />
            <Cakes id={11} image={juice02} />
            <Cakes id={12} image={juice01} />
          </div>
        </div>
      </Element>


      <div className='full-container'>
        <h2 className='cake-menu'>Our Ice-Cream Menu</h2>
        <div className='outer-cake-container'>
          <Cakes id={1} image={cream1} />
          <Cakes id={2} image={cream2} />
          <Cakes id={3} image={cream4} />
          <Cakes id={4} image={cream5} />
          <Cakes id={5} image={cream3} />
          <Cakes id={6} image={cream04} />
          <Cakes id={7} image={cream7} />
          <Cakes id={8} image={cream8} />
          <Cakes id={9} image={cream9} />
          <Cakes id={9} image={cream01} />
          <Cakes id={9} image={cream02} />
          <Cakes id={9} image={cream03} />
        </div>
      </div>

      <div className='full-container'>
        <h2 className='cake-menu'>Our Pastries Menu</h2>
        <div className='outer-cake-container'>
          <Cakes id={1} image={pastry1} />
          <Cakes id={2} image={pastry2} />
          <Cakes id={3} image={pastry3} />
          <Cakes id={4} image={pastry4} />
          <Cakes id={5} image={pastry5} />
          <Cakes id={6} image={pastry6} />
          <Cakes id={7} image={pastry7} />
          <Cakes id={8} image={pastry8} />
          <Cakes id={9} image={pastry9} />
          <Cakes id={10} image={pastry01} />
          <Cakes id={11} image={pastry02} />
          <Cakes id={12} image={pastry03} />
        </div>
      </div>

      <div className='full-container'>
        <h2 className='cake-menu'>Events Services</h2>
        <div className='outer-cake-container'>
          <Cakes id={1} image={event1} />
          <Cakes id={2} image={event2} />
          <Cakes id={3} image={event3} />
          <Cakes id={4} image={event4} />
          <Cakes id={5} image={event5} />
          <Cakes id={6} image={event6} />
          <Cakes id={7} image={event7} />
          <Cakes id={8} image={event8} />
          <Cakes id={9} image={event9} />
          <Cakes id={10} image={event01} />
          <Cakes id={11} image={event02} />
          <Cakes id={12} image={event03} />
        </div>
      </div>
      <Element name='testimonials'><Testimonials /></Element>
      <Element name='contact'><Contact /></Element>
      <Element name='services'><Services /></Element>
      <Element name='footer'><Footer /></Element>
    </div>
  )
}
