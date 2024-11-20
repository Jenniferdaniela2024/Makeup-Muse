import React, { useState } from "react";
import './store.css';
import { Item } from './Item';  // Importamos el componente Item
import { Link } from 'react-router-dom';  // Importa Link desde react-router-dom
// import products from "../data/products.json";


export const Nav_store = () => {
    const spanStyle = {
        color: 'black',
        backgroundColor: '#E4B1F0',
        listStyle: 'none',
        textDecoration: 'none',
        borderRadius: '20px',
        margin: '10px',
    };

    // Estado para manejar la cantidad total de productos en el carrito
    const [cartCount, setCartCount] = useState(0);

    const [isAddVisible, setIsAddVisible] = useState(true); // Estado para mostrar/ocultar el botón de agregar
    const [isSubtractVisible, setIsSubtractVisible] = useState(false); // Estado para mostrar/ocultar el botón de restar


const addToCart = () => {
    setCartCount(prevCount => prevCount + 1); 
    setIsAddVisible(true); // Ocultamos el botón de agregar
    setIsSubtractVisible(true); // Mostramos el botón de eliminar
    alert('Agregado correctamente ✔');
};

// Función para disminuir 1 producto del carrito (solo si hay productos)
const subtractToCart = () => {
    if (cartCount > 0) {
        setCartCount(prevCount => prevCount - 1); // Disminuimos el contador del carrito
        if (cartCount - 1 === 0) { 
            setIsSubtractVisible(false); // Ocultamos el botón de eliminar si el carrito está vacío
            setIsAddVisible(true); // Mostramos el botón de agregar
        }
        alert('Eliminado del carrito de compras 🛒');
    }
};


const items = [
    {
        "id": 1,
        "name": "Kit de brochas para Rostro",
        "price": " 30,500",
        "imgUrl": "public/brochas.png",
        "description": `✔Kit de brochas x7 `,
        "Marca": "Rubi Rouse",
        "Tono": "Rosado"
    },
    {
        "id": 2,
        "name": "Base",
        "price": "35,000",
        "imgUrl": "public/base.jpeg",
        "description": "Base liquida mate ",
        "Marca": "Vogue",
        "Tono": "02"
    },
    {
        "id": 3,
        "name": "Iluiminador",
        "price": "12,000",
        "imgUrl": "public/iluimnador.jpeg",
        "description": "Iluminador suelto para rostro",
        "Marca": "Ani-k",
        "Tono": "03"
    },
    {
        "id": 4,
        "name": "Polvo Traslucido",
        "price": "12,000",
        "imgUrl": "public/polvo.jpeg",
        "description": "Polvo suelto traslucido",
        "Marca": "Sammy",
        "Tono": "01"
    }
];









   

    return (
        <div>
            <ul className="nav-list">
                <h2>Bienvenidos a nuestra tienda 🛒!</h2><br/><br/><br />
                <li>
                    Cantidad total: <span className="cart-count">{cartCount}</span>
                    {/* El enlace ahora tiene contenido, "Ver factura" */}
                    <Link to="/cart" style={spanStyle}>
                        <span>Ver factura</span>
                    </Link>
                </li>
            </ul>
            <div className="items-list">
                {items.map(Items=> (
                    <Item 
                        key={Items.id} 
                        {...Items} 
                        addToCart={addToCart}  // Pasamos la función addToCart
                        subtractToCart={subtractToCart} // Pasamos la función subtractToCart
                        isAddVisible={isAddVisible} // Pasar el estado de visibilidad
                        isSubtractVisible={isSubtractVisible} // Pasar el estado de visibilidad
                    />
                ))}
            </div>
        </div>
    );
};

export default Nav_store;
