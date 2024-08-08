
import '../style/allcss.css';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCalendar, faCar, faCartShopping, faEnvelope, faHamburger, faHome, faHouse, faPen, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';






function Navbarfile({color} ) {
  const [isOpen, setIsOpen] = useState("");
  const [color , setcolor] = useState("black")

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
  
   <Navbar className='navbar'>
    <div className='logo'>
      
      
    <img src='/images/starbuckslogo.png' alt="STARBUCKS"></img>
    <h1>STARBUCKS</h1>

     

    </div>

    <div className='ham' onClick={toggleMenu}>
      <FontAwesomeIcon icon={faHamburger} />

    </div>
    <ul className={`menu ${isOpen ? "open" : "close"}`}>
          <li ><a href="#home" >Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

    <div className='links'>
      <ul type='none'>
      <li ><a href="/home" style={{color:color}}>Home</a></li>
          <li><a href="/order">Order</a></li>
          <li><a href="#services">Store</a></li>
          <li><a href="#contact">Gift</a></li>
      </ul>
    </div>


    <div className='search'>
    

      <input 
      type='text'
      placeholder='Search'/>
      <FontAwesomeIcon icon={faSearch}/>
      <FontAwesomeIcon icon={faPerson}/>
      <FontAwesomeIcon icon={faCartShopping}/>
          </div>

   </Navbar>
  );
}

export default Navbarfile;