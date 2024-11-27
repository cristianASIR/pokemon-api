//import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Nav.css';
function Navbar () {
  return (
    <nav className='navbar'>
        <ul className='nav-links'>
        <li><a href='/'>Gen1</a></li>        
        <li><a href='/Gen2'>Gen2</a></li>        
        <li><a href='/Gen3'>Gen3</a></li>        
        <li className="dropdown">
          <button className="dropbtn">Contactos</button>
          <div className="dropdown-content">
            <a href="/Contacto/Cristian">Cristian</a>
            <a href="/Contacto/Support">Soporte técnico</a>
          </div>
        </li>        
        </ul>
    </nav>
  );
}

export default Navbar
