import React from "react";
import { useNavigate } from "react-router-dom"; 
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './Navbar2.css';
export const Navbar2 = () => {
  const navigate = useNavigate(); 
 
  // Función para manejar el clic en "Cerrar sesión"
  const handleLogout = () => {
    // Mostrar el alert de cerrando sesión
    alert("Cerrando sesión...");
  };

  return (
    <header className="header">
      <img
        src="public/Logo Boutique de Ropa Moderno Rosa.png"
        alt="logo"
        className="logo"
      />
        <p className="Farewell">Bienvenid@ a Nuestra tienda Makeup Muse 🛒</p>
      <nav className="navbar">
       <Link to={"/offers"}><span>Ofertas</span></Link> 
        <a href="/" onClick={handleLogout}>Cerrar sesión</a> {/* Llamamos a handleLogout al hacer clic */}   

      </nav>
    </header>
  );
};

export default Navbar2;
