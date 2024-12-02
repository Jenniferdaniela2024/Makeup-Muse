import React from "react";
import { useLocation } from "react-router-dom";
import { ShoppingCartProvider } from "../contexts/ShoppingCartContext";
import { Navbar_store } from "../components/NavBar";
import { ShoppingCart } from "../components/ShoppingCart";
import { ItemList } from "../components/ItemList";
import Footer from "../Footer";
import { Routes, Route } from 'react-router-dom';
import Navbar2 from "./Navbar2";
import { Link } from "react-router-dom";
import handleCompra, { OfferCard } from "./OfferCard";


const Store = () => {
  const location = useLocation(); // Obtener el estado pasado desde Login
  const { nombre } = location.state || {}; // Extraer el nombre del estado (si existe)
  const { id } = location.state || {};
  


  return (
    
    <ShoppingCartProvider>
      <Navbar2 />
      <Navbar_store />
      <Link to={`/product-details`} className="item-edit">Gestión de productos</Link> {/* Enlace con el id */}
      <ShoppingCart nombre={nombre} /> {/* Pasar el nombre al ShoppingCart */}
      <Routes>
        <Route path="/" element={<ItemList />} />
      </Routes>
      <OfferCard nombre={nombre} />
      <Footer />

    </ShoppingCartProvider>
  );
};

export default Store;
