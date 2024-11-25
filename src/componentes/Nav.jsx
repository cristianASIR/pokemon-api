//import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Nav.css';
function Navbar () {
  return (
    <nav>
        <ul>
        <li><a href='/'>Inicio</a></li>        
        <li><a href='/Gen1'>Gen1</a></li>        
        <li><a href='/Gen2'>Gen2</a></li>        
        <li><a href='/Gen3'>Gen3</a></li>        
        <li><a href='/Contacto'>Contacto</a></li>        
        </ul>
    </nav>
  );
}

export default Navbar
