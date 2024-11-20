import React from "react";
import './Destacados.css';

const Destacados = () => {
    return(
     <div className="Content_products"><br/>
        <hr />
        <h2>DESTACADOS / <strong className="titulo_destacado">MÁS VENDIDOS</strong></h2>
        <div className="products">
            <p className="titulo">Categoria Rostro</p>
            <img src="public/imagen1.png" alt="" className="productos"/>
            <p className="descripcion">Producto hola</p>
        </div>
        <div className="products">
            <p className="titulo">Categoria Rostro</p>
            <img src="public/imagen1.png" alt="" className="productos"/>
            <p className="descripcion">Producto hola</p>
        </div>
        <div className="products">
            <p className="titulo">Categoria Rostro</p>
            <img src="public/imagen1.png" alt="" className="productos"/>
            <p className="descripcion">Producto hola</p>
        </div>
        {/* Productos de abajo */}
        <div className="products">
            <p className="titulo">Categoria Rostro</p>
            <img src="public/imagen1.png" alt="" className="productos"/>
            <p className="descripcion">Producto hola</p>
        </div>
        <div className="products">
            <p className="titulo">Categoria Rostro</p>
            <img src="public/imagen1.png" alt="" className="productos"/>
            <p className="descripcion">Producto hola</p>
        </div>
        <div className="products">
            <p className="titulo">Categoria Rostro</p>
            <img src="public/imagen1.png" alt="" className="productos"/>
            <p className="descripcion">Producto hola</p>
        </div>

     </div>
    );
}
export default Destacados;
