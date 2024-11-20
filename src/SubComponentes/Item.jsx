import React from "react";
import "./store.css";


// Componente Item que recibe las funciones para agregar y restar, y el nombre, precio, etc.
export const Item = ({
  name,
  price,
  id,
  imgUrl,
  description,
  Marca,
  Tono,
  addToCart,
  subtractToCart,
  isAddVisible,  // Recibir isAddVisible como prop
  isSubtractVisible,  // Recibir isSubtractVisible como prop
}) => {
  return (
    <div className="item-box">
      <div>{name}</div>
      <img src={imgUrl} alt={name} className="img-store" />
      <div className="zoom-lens"></div>
      <div className="description">{description}</div>
      <div className="item-price">${price}</div>
      <div className="Marca">Marca: {Marca}</div>
      <div className="Tono">Tono: {Tono} </div>
      <br />
      {/* Botón para agregar al carrito */}
      <button
        className="item-add-button"
        style={{ display: isAddVisible ? "block" : "none" }} // Mostrar u ocultar según el estado
        onClick={addToCart}
      >
        + Agregar
      </button>

      {/* Botón para eliminar del carrito */}
      <button
        className="item-remove-button"
        style={{ display: isSubtractVisible ? "block" : "none" }} // Mostrar u ocultar según el estado
        onClick={subtractToCart}
      >
      -  Eliminar 
      </button>
    </div>
  );
};

export default Item;
