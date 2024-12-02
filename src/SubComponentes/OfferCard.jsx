import './OfferCard.css'; 
import React, { useState } from "react";
import Modal from './Modal-offers'; // Asegúrate de tener el componente Modal importado

export const OfferCard = ({ image, name, price, discount, Marca}) => { 
 
  
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir/cerrar el modal
  const [categoryText, setCategoryText] = useState(''); // Estado para almacenar el texto de la categoría

  // Función para abrir el modal con el texto correspondiente
  const openModal = (text) => {
    setCategoryText(text); // Establece el texto de la categoría
    setIsModalOpen(true); // Abre el modal
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false); // Cierra el modal
  };

  const handleCompra = () => { // Usa directamente 'nombre' de las props
  alert(`Compra exitosa ✔`);
  };
  
  return (
    <div className="offer-card">
      <img src={image} alt={name} className="offer-image" />
      <p className="offer-price">Precio: ${price}</p>
      <p><strong>Nombre:</strong> {name}</p>
      <p><strong>Marca:</strong> {Marca}</p>
      <p className="offer-discount">Descuento: {discount}%</p>
      <button
        className="add-to-cart"
        onClick={() =>
          openModal(
            "Producto en oferta 💆🏻‍♀️🧴✨ ¡Cómpralo ahora y recibe tu descuento con envío gratis!"
          )
        }
      >
        Ver oferta 🛍️
      </button>
      <button className="add-to-cart" onClick={handleCompra}>
        Comprar
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} text={categoryText} />
    </div>
  );
};

export default OfferCard;
