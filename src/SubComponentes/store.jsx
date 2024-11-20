import React from "react";
import Navbar from "../Nav";  
import Footer from "../Footer"; 
import './store.css'; 
import Nav_store  from "./Navbar";
import { ItemList } from "./ItemList";
const Store = () => {
   return (
    <div className="container"> 
      <Navbar />  
      <Nav_store />
      <div className="main-content">
        {/* Aquí irá el contenido principal de la tienda */}
        <ItemList />
      </div>
      <Footer />
    </div>
   );
}

export default Store;
