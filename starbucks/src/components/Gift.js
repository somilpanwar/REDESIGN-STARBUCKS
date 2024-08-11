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
          <a href="/order"> > Gift Card</a>
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
      <div className="selectionbar">
        <button >ANYTHING</button>
        <button >THANKYOU</button>
        <button >CONGRATS</button>
      </div>

      <Footer/>
    </>
  )
}

export default Gift
