import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'

import React from 'react'

const Footer = () => {
   
  return (
    <div className='foot'>
        <img src='../images/starbuckslogo.png' ></img>

        <div className='aboutus'>
            <h2>About Us</h2>
            <ul type="none">
                <li>Our Heritage</li>
                <li>Our Heritage</li>
                <li>Our Heritage</li>
            </ul>
        </div>
        <div className='respon'>
        <h2>Responsibility</h2>
            <ul type="none">
                <li>Diversity</li>
                <li>Community</li>
                <li>Ethical Sourcing</li>
                <li>Environmental Stewardship</li>
                <li>Learn More</li>
            </ul>
        </div>
        <div className='quick'>
        <h2>Quick Links</h2>
            <ul type="none">
                <li>Privacy Policy</li>
                <li>Customer Service</li>
                
            </ul>
        </div>
        <div className='social'>
            <h2>SOCIAL MEDIA</h2>
            <ul>

       <FontAwesomeIcon icon={faInstagram}/>
       <FontAwesomeIcon icon={faFacebook}/>
       <FontAwesomeIcon icon={faTwitter}/>
            </ul>
        </div>
        <div className='otherlogo'>
            <img src='https://www.starbucks.in/assets/images/appstoreiOS.png'></img>
            <img src='https://www.starbucks.in/assets/images/appstoreAndroid.png'></img>
        </div>
        
    </div>
  )
}

export default Footer
