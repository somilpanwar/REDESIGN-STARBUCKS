
import '../style/allcss.css';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCalendar, faCar, faCartShopping, faEnvelope, faHamburger, faHome, faHouse, faPen, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';






function Navbarfile( ) {
  const [isOpen, setIsOpen] = useState("");
  

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
      <li> <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
      </li>

      <li> <NavLink to="/order" className={({ isActive }) => isActive ? 'active' : ''}>
            Order
          </NavLink>
      </li>

      <li> <NavLink to="/gift" className={({ isActive }) => isActive ? 'active' : ''}>
            Gift
          </NavLink>
      </li>
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