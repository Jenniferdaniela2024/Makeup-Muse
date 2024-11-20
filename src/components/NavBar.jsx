import React from 'react';
 import './NavBar.css';
;

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Maquillaje en Oferta</h1>
      <ul className="nav-list">
        <li>Inicio</li>
        <li>Ofertas</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
};

export default NavBar;
