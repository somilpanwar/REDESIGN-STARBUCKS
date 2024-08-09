
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/';
import Home from './components/Home';
import Order from './components/Order';
import Gift from './components/Gift';
import Product from './components/Product'



function App() {
  return (
    <>
<Router>
     <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/order"  element={<Order/>}/>
    <Route path="/gift"  element={<Gift/>}/>
    <Route path="/item"  element={<Product/>}/>
     </Routes>
</Router>
    
    
    </>
  );
}

export default App;
