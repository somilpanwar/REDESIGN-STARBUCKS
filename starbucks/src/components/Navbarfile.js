
import '../style/allcss.css';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCar, faEnvelope, faHome, faHouse, faPen, faPerson } from '@fortawesome/free-solid-svg-icons';






function Navbarfile() {
  return (
   <Navbar className='navbar'>
    <div className='logo'>
      
      <img src='...' alt='STARBUCKS'></img>
     

    </div>

    <div className='links'>
      <ul type='none'>
        <li>HOME</li>
        <li>CONTACT</li>
        <li>ORDERS</li>
      </ul>
    </div>


    <div className='search'>
    <FontAwesomeIcon icon={faHome} />
    <FontAwesomeIcon icon={faPen} />

      <input 
      type='text'
      placeholder='Search'/>
      <img src='/images/search.png' alt='images'/>
          </div>

   </Navbar>
  );
}

export default Navbarfile;