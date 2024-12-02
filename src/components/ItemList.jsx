import React, { useState, useEffect } from "react"; 
import { Item } from "./Item";

export const ItemList = () => {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    // Realizamos la solicitud GET a la API para obtener los productos
    fetch("http://localhost/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo cargar los productos");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data); // Asigna los productos recibidos al estado
        setLoading(false);  // Cambia el estado de loading cuando los productos están listos
      })
      .catch((error) => {
        setError(error.message); // Si hay un errorg uarda el mensaje 
        setLoading(false);  // Cambia el estado de loading
      });
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>; // Muestra un mensaje mientras se cargan los productos
  }

  if (error) {
    return <p>Error al cargar los productos: {error}</p>; // Muestra el error si ocurre
  }

  return (
    <div className="items-list">
      {products.map((product) => {
        return <Item key={product.id} {...product} />;
      })}
    </div>
  );
};
