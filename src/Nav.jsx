import React from "react";
import { Link as RouterLink } from "react-router-dom"; // Para navegación de rutas
import { Link as ScrollLink } from "react-scroll"; // Para hacer scroll dentro de la misma página
import './Nav.css';

const Navbar = () => {
    return (
        <header className="header">
            <img src="public/Logo Boutique de Ropa Moderno Rosa.png" alt="logo" className="logo" />
            <nav className="navbar">
                {/* Navegación con react-router-dom (para cambiar de páginas) */}
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/login">
                    Iniciar sesión <i className="fa-solid fa-user" style={{ color: '#f9fafa' }}></i>
                </RouterLink>
                <RouterLink to="/form">
                    Formulario PQRS 📩
                </RouterLink>

                {/* Navegación con react-scroll (para hacer scroll dentro de la misma página) */}
                <ScrollLink to="quienessomos" spy={true} smooth={true} duration={500} offset={-70}>
                    Quienes somos 🌸
                </ScrollLink>
            </nav>
        </header>
    );
}

export default Navbar;
