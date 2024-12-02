import React, { useEffect, useState } from "react";
import axios from "axios";
import './Gestion.css';
import Navbar_store from "./Navbar2";
import Footer from "../Footer"; 
import { Link } from "react-router-dom";

export const ProductDetails = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  // Llamada a la API para obtener los productos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost/api/products");
        setProducts(response.data); 
      } catch (err) {
        setError("Error al cargar los productos");
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  // Función para manejar la adición de un nuevo producto
  const handleAddProduct = () => {
    const name = prompt("Ingresa el nombre del producto:");
    if (!name || name.trim() === "") {
      alert("El nombre es obligatorio.");
      return;
    }

    const description = prompt("Ingresa la descripción del producto:");
    if (!description || description.trim() === "") {
      alert("La descripción es obligatoria.");
      return;
    }

    const Marca = prompt("Ingresa la marca del producto:");
    if (!Marca || Marca.trim() === "") {
      alert("La marca es obligatoria.");
      return;
    }

    const Tono = prompt("Ingresa el tono del producto:");
    if (!Tono || Tono.trim() === "") {
      alert("El tono es obligatorio.");
      return;
    }

    const price = parseFloat(prompt("Ingresa el precio del producto:"));
    if (isNaN(price) || price <= 0) {
      alert("El precio debe ser un número válido mayor a 0.");
      return;
    }

    // Crear un nuevo producto
    const newProduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
      name,
      description,
      Marca,
      Tono,
      price,
    };

    // Actualizar la lista de productos
    setProducts((prevProducts) => [...prevProducts, newProduct]);

    alert("Producto agregado exitosamente.");
  };

  // Función para manejar la edición de un producto
  const handleEdit = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    if (!productToEdit) {
      alert("Producto no encontrado");
      return;
    }

    const menuEdit = prompt(`Elige una de las opciones para editar el producto: 
      1. Nombre
      2. Descripción
      3. Marca
      4. Tono
      5. Precio`);

    if (menuEdit === null || menuEdit.trim() === "") {
      alert("Cancelando la edición... ");
      return;
    }

    const MenuEdit = parseInt(menuEdit, 10);

    switch (MenuEdit) {
      case 1: {
        const newName = prompt("Editar nombre del producto:", productToEdit.name);
        if (newName) {
          setProducts((prevProducts) =>
            prevProducts.map((product) =>
              product.id === id ? { ...product, name: newName } : product
            )
          );
        }
        break;
      }
      case 2: {
        const newDescription = prompt(
          "Editar descripción del producto:",
          productToEdit.description
        );
        if (newDescription) {
          setProducts((prevProducts) =>
            prevProducts.map((product) =>
              product.id === id ? { ...product, description: newDescription } : product
            )
          );
        }
        break;
      }
      case 3: {
        const newBrand = prompt("Editar marca del producto:", productToEdit.Marca);
        if (newBrand) {
          setProducts((prevProducts) =>
            prevProducts.map((product) =>
              product.id === id ? { ...product, Marca: newBrand } : product
            )
          );
        }
        break;
      }
      case 4: {
        const newTone = prompt("Editar tono del producto:", productToEdit.Tono);
        if (newTone) {
          setProducts((prevProducts) =>
            prevProducts.map((product) =>
              product.id === id ? { ...product, Tono: newTone } : product
            )
          );
        }
        break;
      }
      case 5: {
        const newPrice = parseFloat(
          prompt("Editar precio del producto:", productToEdit.price)
        );
        if (!isNaN(newPrice)) {
          setProducts((prevProducts) =>
            prevProducts.map((product) =>
              product.id === id ? { ...product, price: newPrice } : product
            )
          );
        } else {
          alert("El precio ingresado no es válido.");
        }
        break;
      }
      default:
        alert("El número ingresado no corresponde a ninguna opción.");
        break;
    }
  };

  // Función para manejar la eliminación de un producto
  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    }
  };

  // Mostrar mensaje de carga
  if (loading) {
    return <div>Cargando productos...</div>;
  }

  // Mostrar mensaje de error
  if (error) {
    return <div>{error}</div>;
  }

  // Renderizado principal
  return (
    <div>
      <Navbar_store className="nav" />
      <br />
      <div>
        <h1>Gestión de Productos 🧾</h1>
        <button className="btn-agregar" onClick={handleAddProduct}>
          Agregar producto
        </button>
        <Link to={"/store"} className="btn-agregar">
          Volver a Store 🛒
        </Link>
        <br />
        <br />
      </div>
      <table className="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Marca</th>
            <th>Tono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{product.Marca}</td>
              <td>{product.Tono}</td>
              <td>
                <button
                  className="editar"
                  onClick={() => handleEdit(product.id)}
                >
                  Editar
                </button>
                <button
                  className="eliminar"
                  onClick={() => handleDelete(product.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default ProductDetails;
