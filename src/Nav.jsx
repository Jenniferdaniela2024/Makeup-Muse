import React from "react";
import './Nav.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";



const Navbar = () => {
    
    return (

        <header className="header">
            <img src="public/Logo Boutique de Ropa Moderno Rosa.png" alt="logo" className="logo" />
             
            <nav className="navbar">
                <a href="/" >Home</a>
                <Link to={"store"}>
                    <span>Store 🛒</span>
                </Link>
                <Link to={"form"}>
                    <span>Formulario PQRS 📩</span>
                </Link>
            </nav>
        </header>
    )
}

export default Navbar