
import '../style/allcss.css';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCalendar, faCar, faCartShopping, faEnvelope, faHome, faHouse, faPen, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons';






function Navbarfile() {
  return (
  
   <Navbar className='navbar'>
    <div className='logo'>
      
      
    <img src='/images/starbuckslogo.png' alt="STARBUCKS"></img>
    <h1>STARBUCKS</h1>

     

    </div>

    <div className='links'>
      <ul type='none'>
        <li>Home</li>
        <li>Contact</li>
        <li>Orders</li>
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