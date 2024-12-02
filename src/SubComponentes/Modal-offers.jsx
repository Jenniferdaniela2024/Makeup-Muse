import React from 'react';
import '../Modal.css'; // Asegúrate de tener estilos para tu modal

const Modal = ({ isOpen, onClose, text }) => {
  if (!isOpen) return null; // Si el modal no está abierto, no renderiza nada.

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>x</button>
        <h2 className="tittle-categories">Descripción de la Oferta</h2><br/><br/><br/>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Modal;