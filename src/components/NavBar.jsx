import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";
import '../SubComponentes/store.css'



export const Navbar_store = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const navStyles = {
    color: "black",
    listStyle: "none",
    textDecoration: "none",
  };

  return (
    <nav>
      <Link to={"/"} style={navStyles}>
        {/* <h2 className="titulo"> Bienvenidos a la tienda de MakeupMuse 🛒</h2> */}
      </Link>
      <ul className="nav-list">
          <li>
          <strong>Factura</strong><br/>
          Cantidad de productos: <span className="cart-count">{quantity}</span>
          </li>
      </ul>
    </nav>
  );
};
