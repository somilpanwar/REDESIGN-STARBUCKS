import '../style/allcss.css'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, faBurger, faCoffee, faIceCream, faWineBottle } from '@fortawesome/free-solid-svg-icons'

const Other = () => {
    const images = [
        'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day5_41f11ca3d2.jpg',
        'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day5_41f11ca3d2.jpg',
        'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day5_41f11ca3d2.jpg',
 
      ];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='other'>
        <h1>Handcrafted Curations</h1>

        <div className='item'>
            <div className='box'>
                <img src='https://starbucksstatic.cognizantorderserv.com/Category/Small/Bestseller.jpg'></img>
                 <h4>Bestseller</h4>
            </div>
           
            <div className='box'>
                <img src='https://starbucksstatic.cognizantorderserv.com/Category/Small/Drinks.jpg'></img>
                 <h4>Drink</h4>
            </div>

            <div className='box'>
                <img src='https://starbucksstatic.cognizantorderserv.com/Category/Small/Food.jpg'></img>
                 <h4>Sandwitch</h4>
            </div>

            <div className='box'>
                <img src='https://starbucksstatic.cognizantorderserv.com/Category/Small/ReadyToEat.jpg'></img>
                 <h4>Ready To Eat</h4>
            </div>

            <div className='box'>
                <img src='https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/104997.webp'></img>
                 <h4>Cold Drink</h4>
            </div>

            <div className='box'>
                <img src='https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/112573.webp   '></img>
                 <h4>Coffee</h4>
            </div>
        </div><br/>

<h1>Barista Recommends</h1><br/>
        <div className='recommends'>
            <div className='card'>
             <FontAwesomeIcon icon={faCoffee} id='icon'/>
             <h3>Cappuccino</h3>
             <h6>SHORT()</h6>
             <h2>$15</h2>
            </div>

            <div className='card'>
             <FontAwesomeIcon icon={faBowlFood} id='icon'/>
             <h3>cappuccino</h3>
             <h6>SHORT()</h6>
             <h2>$5</h2>
            </div>


            <div className='card'>
             <FontAwesomeIcon icon={faIceCream} id='icon'/>
             <h3>IceCream</h3>
             <h6>SHORT()</h6>
             <h2>$25</h2>
            </div>


            <div className='card'>
             <FontAwesomeIcon icon={faWineBottle} id='icon'/>
             <h3>Drink</h3>
             <h6>SHORT()</h6>
             <h2>$55</h2>
            </div>


            <div className='card'>
             <FontAwesomeIcon icon={faBurger} id='icon'/>
             <h3>Burger</h3>
             <h6>SHORT()</h6>
             <h2>$15</h2>
            </div>


            

        </div>
        <br/>
   <h1>Learn About Coffee</h1>
   <div className='slider'>
      <div className='details'>
        <h1>Art & Science of Coffee Brewing</h1>
        <p>
                Master the perfect  brew  with Starbucks! Learn the Art and Science of Coffee brew..
        </p>
      </div>
   <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} style={{ width: '100%'     }} />
          </div>
        ))}
        
      </Slider>
   </div>
    </div>
  )
}

export default Other
