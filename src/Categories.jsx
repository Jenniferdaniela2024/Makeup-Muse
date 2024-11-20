import React from "react";
import './Categories.css';

const Categories = () => {
    return(
        <div className="Content_categories">
            <hr />
            <h1>C A T E G O R Í A S </h1>
            <button>ROSTRO</button>
            <button className="boton">OJOS</button>
            <button>LABIOS</button>
            <button className="boton">SOMBRAS</button>
            <button>BROCHAS</button>
            
            <img src="public/rostro.png" alt="" className="imagenes" />
            <img src="public/ojos.png" alt="" className="imagenes" />
            <img src="public/labios.png" alt="" className="imagenes" />
            <img src="public/sombras.png" alt="" className="imagenes" />
            <img src="public/brochas.png" alt="" className="imagenes" />
            
          


        
        </div>
    )
}
export default Categories