import React from 'react';
import './OfferCard.css'; 

const OfferCard = ({ image, name, price, discount }) => {
  return (
    <div className="offer-card">
      <img src={image} alt={name} className="offer-image" />
      <h3>{name}</h3>
      <p className="offer-price">Precio: ${price}</p>
      <p className="offer-discount">Descuento: {discount}%</p>
      <button className="add-to-cart">Agregar al carrito</button>
    </div>
  );
};

export default OfferCard;
