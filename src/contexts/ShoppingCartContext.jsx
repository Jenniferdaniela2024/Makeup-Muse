import React, { createContext, useState } from "react";
import '../SubComponentes/store.css'

// Crea el contexto
export const CartContext = createContext();

// El proveedor del contexto
export const ShoppingCartProvider = ({ children }) => {
  // El valor inicial de cart es un array vacío
  const [cart, setCart] = useState([]); // Esto es un array

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

