import React from 'react';
import OfferCard from './OfferCard'; 
import './OffersPage.css';
import Navbar2 from "./Navbar2";
import Footer from "../Footer"; 
import { Link } from "react-router-dom";



export const OffersPage = () => {
 
  
  const offers = [
    {
      id: 1,
      image: 'public/ofertas/Gel-limpiador.jpeg',
      name: 'Gel limpiador',
      price: '11.000',
      discount: 20,
      Marca: 'Cera ve'
    },
    {
      id: 2,
      image: 'public/ofertas/contorno.jpeg',
      name: 'Contorno de ojos',
      Marca: 'Nivea',
      price: '9.000',
      discount: 30,
    },
    {
      id: 3,
      image: 'public/ofertas/crema.jpg',
      name: 'Crema hidrante con brillos',
      price: '10.000',
      discount: 25,
      Marca: 'Sammy'
    },
  ];

  return (
    <div className="offers-page">
      <Navbar2 />
      
      <h2 className="offers-title">Ofertas Especiales</h2>
      
      <p className="subitulo">En Skin Care 🌸</p><br/>
      <Link to={"/store"} className="btn-agregar">
          Volver a Store 🛒
        </Link>
      <div className="offers-grid">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            image={offer.image}
            name={offer.name}
            price={offer.price}
            discount={offer.discount}
            Marca={offer.Marca}
          
          />
         
        ))}
      </div><br/><br/>
      <div className="footer-ofering">
      <Footer />
      </div>
    </div>
  );
};

export default OffersPage;