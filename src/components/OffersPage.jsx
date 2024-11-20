import React from 'react';
import OfferCard from './OfferCard'; 
import './OffersPage.css';

const OffersPage = () => {
  const offers = [
    {
      id: 1,
      image: 'https://via.placeholder.com/100',
      name: 'Labial Rosa',
      price: 10,
      discount: 20,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/100',
      name: 'Sombras Neutras',
      price: 15,
      discount: 30,
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/100',
      name: 'Base de Maquillaje',
      price: 20,
      discount: 25,
    },
  ];

  return (
    <div className="offers-page">
      <h2 className="offers-title">Ofertas Especiales</h2>
      <div className="offers-grid">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            image={offer.image}
            name={offer.name}
            price={offer.price}
            discount={offer.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default OffersPage;
