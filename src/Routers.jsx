// Routers.jsx
import React from 'react';
import Welcome_Content from './Welcome';  // Asegúrate de que el nombre y la ruta coincidan
import Destacados from './destacados';

import Navbar from './Nav.jsx';
import Carrusel from './Carrusel.jsx';
import Categories from './Categories.jsx';
import Footer from './Footer.jsx';
import QuienesSomos from './QuienesSomos.jsx';


export function App() {
    return(
        <>
        
        <Navbar/>
        <Carrusel/>
        <Welcome_Content />
        <Destacados />
        <Categories/>
        <QuienesSomos/>
        <Footer/>
        </>
    );
}

export default App;