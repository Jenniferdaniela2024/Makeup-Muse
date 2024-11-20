import React from "react";
import './Welcome.css';

const Welcome_Content = () => {
  return (
    <div>
      <div className="Content">
        <h1>Bienvenid@s a Makeup Muse 🌸</h1>
      </div>
      <main className="main-container">
        <div className="image-section">
          <img src="public/imagen1.png" className="foto" alt="Imagen de bienvenida" />
        </div>
        
        <div className="text-section">
          <h2>Tu tienda de confianza de maquillaje.  🛒</h2>
          <br/><br/><br /><br />
          <h4>Comodidad</h4>
          <p>Compra desde cualquier lugar</p>
          <h4>Ofertas</h4>
          <p>Promociones y precios competitivos. </p>
          <h4>Variedades de Productos</h4>
          <p>Desde productos básicos a mas especializados </p>
        </div>
      </main>
    </div>
  );
};

export default Welcome_Content;
