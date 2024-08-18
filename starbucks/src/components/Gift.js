import React from 'react'
import Navbarfile from './Navbarfile'
import Footer from './Footer'

const Gift = () => {
  return (
    <>
      <Navbarfile/>
      <div className="contend">
        <p>
          <a href="/">Home </a>
          <a href="/order">  Gift Card</a>
        </p>
      </div>
      <div className='location'>
        <div className='giftcard'>
          <img src='https://preprodtsbstorage.blob.core.windows.net/cms/uploads/banner_icon_1_2_d97e1578ee.png'/>
          <div className='info'>
          <h2>Essential Collection</h2>
          <p>A whole new expression of classic Starbucks Desing.explore merchandise collection.</p>

          <h3>Starting From</h3>
          <h2 >$50</h2>
          </div>
          <button>Order Now</button>
        </div>
      </div>
      <div className="selectionbargift">
        <button>ANYTHING</button>
        <button>THANKYOU</button>
        <button>CONGRATS</button>
      </div>

      <div className='arrangeitems'>
        <div className='cardgift'>
          <img src='https://preprodtsbstorage.blob.core.windows.net/cms/uploads/TSB_GC_indiacard_1_1_28dafb2bb6.png'/>
          <h2>India Exclusive</h2>
          <p>Bring in the festive season and make each celebration memorable.</p>
        <button>Add Item</button>
        </div>
        <div className='cardgift'>
        <img src='https://preprodtsbstorage.blob.core.windows.net/cms/uploads/71d3780c_be6e_46b1_ab01_8a2bce244a7f_1_1_2d1afadaa0.png'/>
        <h2>Starbucks Coffee</h2>
          <p>Starbucks is best when shared. Treat your pals to a good cup of coffee.</p>
        <button>Add Item</button>
        </div>
        <div className='cardgift'>
        <img src='https://preprodtsbstorage.blob.core.windows.net/cms/uploads/97ee3280_2f05_43ad_bd94_f5c184d4f502_1_0a31455af9.png'/>
        <h2>
        U Keep Me Warm</h2>
          <p>Captivating, cosy, coffee. Gift your loved ones this Starbucks Gift Card</p>
        <button>Add Item</button>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Gift
