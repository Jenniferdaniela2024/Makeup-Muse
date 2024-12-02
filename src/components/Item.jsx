import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";





export const Item = ({ name, price, id, imgUrl, description, Marca, Tono}) => {
  const [cart, setCart] = useContext(CartContext);



  const addToCart = () => {
    alert(`Nombre del producto: ${name} 
      \n Producto agregado correctamente al carrito de compras 🌸`);

    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, price, name, imgUrl, description, Marca, Tono}];
      }
    });
  };

  const removeItem = (id) => {
    alert(`Nombre del producto: ${name} 
      \n Producto Eliminado ❌ correctamente al carrito de compras `);
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
    <div className="item-box">
      {quantityPerItem > 0 && (
        <div className="item-quantity">{quantityPerItem}</div>
      )}

      <div>{name}</div>
      <img src={imgUrl} className="img-store" width="100" height="75" />
      <div className="zoom-lens"></div>
      <div className="description">{description}</div>
      <div className="item-price">${price}</div>
      <div className="Marca">Marca: {Marca}</div>
      <div className="Tono">Tono: {Tono} </div>
  

      {quantityPerItem === 0 ? (
        <button className="item-add-button" onClick={() => addToCart()}>
          + Agregar
        </button>
      ) : (
        <button className="item-plus-button" onClick={() => addToCart()}>
          + Agregar más
        </button>
      )}

      {quantityPerItem > 0 && (
        <button className="item-minus-button" onClick={() => removeItem(id)}>
          - Eliminar
        </button>
      )}
    

    </div>
  );
};
