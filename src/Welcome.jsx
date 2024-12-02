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
          <h4 className="tittles-welcome"> Comodidad</h4><br/>
          <p>Compra desde cualquier lugar </p>
          <h4 className="tittles-welcome">Ofertas</h4><br/>
          <p>Promociones y precios competitivos  </p>
          <h4 className="tittles-welcome">Variedades de Productos</h4><br/>
          <p>Desde productos básicos a mas especializados </p>
        </div>
      </main>
    </div>
  );
};

export default Welcome_Content;
