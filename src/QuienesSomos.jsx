import React from "react";
import './QuienesSomos.css';

const QuienesSomos = () => {
    return(
        <div className="Content">
            <hr />
            <h1>Q  U  I  E  N  E  S  S  O  M  O  S</h1>
            <div className="Content_two">
           <img src="public/video.gif"alt="gif" width={"240px"} className="gif"/>
           <div className="Descripcion">
            <br/><p>Bienvenidos a <strong className="texto1">Makeup Muse</strong>,tu destino definitivo para todo lo relacionado con el maquillaje. Somos una <strong className="texto1">tienda</strong> apasionada por el arte de embellecer y empoderar, ofreciendo una amplia gama de <strong className="texto1">productos</strong> de maquillaje que se adaptan a cada estilo, tono de piel y personalidad. 
            </p><br/>
            <p>En <strong className="texto">Makeup Muse</strong>, creemos que cada persona es <strong className="texto">única</strong> y que el maquillaje es una forma de <strong className="texto">expresión personal</strong>. Por eso, hemos seleccionado cuidadosamente productos de las mejores marcas, desde bases y sombras hasta labiales y accesorios, para que encuentres todo lo que necesitas para crear tu <strong className="texto">look ideal</strong>.
            </p>
            <img src="public/Logo Boutique de Ropa Moderno Rosa.png" alt=""  width={'100px'} className="LOGOTIPO"/>
           </div>
           </div>
        </div>
        
    )
}
export default QuienesSomos