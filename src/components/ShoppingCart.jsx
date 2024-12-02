import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import { Item } from "./Item";
import './Shopping.css';


export const ShoppingCart = ({nombre}) => {
  const [cart, setCart] = useContext(CartContext);

  // Calcular la cantidad total de productos en el carrito
  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  // Calcular el precio total de los productos en el carrito
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  ).toFixed(3); // Limita a 3 decimales
  
  // Función para manejar la compra
  const handleCompra = () => {
    if (cart.length === 0) {
      alert("No hay productos en el carrito para comprar");
    } else {
      alert(`Compra exitosa, usuario: ${nombre} ✔`);
    }
  };

  return (
    <div className="cart-container">
      <div>
        <hr />
        <div><h4>Lista de Productos🧾</h4>
          <hr />
          <ul>
            {cart.length > 0 ? (
              cart.map((product) => (
                <li key={product.id}>
                  <span >Producto:  {product.name}</span> <br/>
                  <span>Nombre de cliente: {nombre}</span><br/>
                  <span>Cantidad: {product.quantity}</span> <br/>
                  <span>Precio unitario: ${product.price}</span><br/>
                  <span>Marca: {product.Marca}</span><br />
                  <span>Tono: {product.Tono}</span><br />
                  <img src={product.imgUrl} alt={product.name} className="img-shoppng" width="100" />
                  <hr />
                </li>
              ))
            ) : (
              <p>No hay productos en el carrito</p>
            )}
          </ul>
        </div>
        <div>Total: ${totalPrice}</div>
        <button onClick={handleCompra}>Comprar</button> {/* Llamamos a handleCompra */}
      </div>
    </div>
  );
};

