
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbarfile from './components/Navbarfile'
import '../src/';
import Home from './components/Home';
import Order from './components/Order';



function App() {
  return (
    <>
<Router>
     <Routes>

    <Route path="/home" element={<Home/>}/>
    <Route path="/order" element={<Order/>}/>
     </Routes>
</Router>
    
    
    </>
  );
}

export default App;
