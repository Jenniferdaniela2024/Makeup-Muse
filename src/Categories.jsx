import React, { useState } from "react";
import Modal from './Modal'; // Asegúrate de tener el componente Modal importado
import './Categories.css';

const Categories = () => {
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

  return (
    <div className="Content_categories">
      <hr />
      <h1>C A T E G O R Í A S </h1>
      
      {/* Botones de categorías */}
      <button onClick={() => openModal("Categoría Rostro: 💆🏻‍♀️🧴✨ Explora todos los productos para el rostro de Makeup Muse desde productos para tu rutina de Skin care hasta productos para resaltar tu belleza. ")}>ROSTRO</button>
      <button onClick={() => openModal("Categoría Ojos: 🌸 En Makeup Muse encontraras los mejores productos para la sesión de ojos como lo son paletas de sombras, glitters y los mejores polvos traslucidos para que tu maquillaje tenga la mejor resistencia!")} className="boton">OJOS</button>
      <button onClick={() => openModal(`Categoria Labios: 💄 Descubre nuestra gran cantidad de productos para labios como  Gloss, Labiales Mate y Gloss hidrante, entre otros..Además disfruta de los mejores precios y de las mejores marcas 🌸
        `)}>LABIOS</button>
      <button onClick={() => openModal("Categoría Sombras: ⭐ La categoría de sombras se destaca por promocionar paletas de sombras con la mejor pigmentación funcionales incluso para realizar un contorno de alto impacto. ")} className="boton">SOMBRAS</button>
      <button onClick={() => openModal("Categoría Brochas: 🛒🛍️ Compra los mejores kit de brocha para ojos y rostros, brochas de excelente calidad a un excelente precio en nuestra sesión de ofertas!!")}>BROCHAS</button>

      {/* Imágenes de las categorías */}
      <img src="public/rostro.png" alt="Rostro" className="imagenes" />
      <img src="public/ojos.png" alt="Ojos" className="imagenes" />
      <img src="public/labios.png" alt="Labios" className="imagenes" />
      <img src="public/sombras.png" alt="Sombras" className="imagenes" />
      <img src="public/brochas.png" alt="Brochas" className="imagenes" />

      {/* Modal que se muestra con el texto de la categoría */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        text={categoryText} // Pasamos el texto de la categoría al modal
      />
    </div>
  );
}

export default Categories;
