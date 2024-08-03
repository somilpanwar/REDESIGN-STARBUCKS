import React, { useState } from 'react'
import '../style/allcss.css'

const Showcase = () => {
    const [rotation, setRotation] = useState(0);
    const handleClick = () => {
        setRotation(prevRotation => prevRotation + 90); 
        
      };
      
      const boxrotate={
        transition: 'all 1s ease-in',
        transform: `rotate(${rotation}deg)`
      }
      const rotate={
        transition: 'all 1s ease-in',
        transform: `rotate(${-rotation}deg)`,
      }
  return (
    
    <div className='main'>
      {/* <div className='back'></div> */}

        {/* <div className='circle'></div> */}
       <div className='rota' style={boxrotate} onClick={handleClick}>

        <div className='boxes'  style={rotate}>
            <img src='/images/coffe.png'  ></img>
        </div>
        <div className='boxes' style={rotate} >
        <img src='/images/coffe.png' ></img>
            
        </div>
        <div className='boxes' style={rotate}>
        <img src='/images/coffe.png' ></img>
        </div>
        <div className='boxes' style={rotate}>
        <img src='/images/coffe.png'></img>
        </div>
       </div>

       <div className='info'>
        <h1>cold coffe</h1>
        <h3 >$560</h3>
        <p>this is the world best coffer you have ever triedthis is the world best coffer you have ever triedthis is the world best coffer you have ever tried</p>
        <a href='/'>Show more</a>

       </div>
      
    </div>
  )
}

export default Showcase
