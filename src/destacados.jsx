import React from "react";
import './Destacados.css';

const Destacados = () => {
    const destacado = [
        { "id": 1, "Categoria": "Rostro", "name": "Rubor compacto", "price": "12.000", "imgUrl": "public/destacados/rubor-polvo2.jpeg", "Marca": "Ani-k", "Tono": "02 Dua" },
        { "id": 2, "Categoria": "Sombras", "name": "Paleta de sombras", "price": "45.000", "imgUrl": "public/destacados/sombras.jpg", "Marca": "Vogue", "Tono": "Tierra" },
        { "id": 3, "Categoria": "Labios", "name": "Gloss liquido", "price": "10.000", "imgUrl": "public/destacados/gloss2.jpeg", "Marca": "Ani-k", "Tono": "Angel" },
        { "id": 4, "Categoria": "Ojos", "name": "Polvo Traslucido", "price": "12.000", "imgUrl": "public/polvo.jpeg", "Marca": "Sammy", "Tono": "01" },
        { "id": 5, "Categoria": "Brochas", "name": "Kit de Brochas para rostro", "price": "30.500", "imgUrl": "public/brochas.png", "Marca": "Ruby Rose", "Tono": "Rosado" },
        { "id": 6, "Categoria": "Pestañas", "name": "Pestañina Vogue Resist", "price": "15.000", "imgUrl": "public/destacados/pestañina2.jpg",  "Marca": "Vogue", "Tono": "Mascara negra" },
        
        ]
       
            return (
                <div>
                  <hr />
                   <h1>Destacados/Más vendidos</h1>
              <div className="productos-container">
                {destacado.map(producto => (
                  
                  <div key={producto.id} className="producto-card">
                    <p><strong className="Categoria">Categoria:  </strong><strong>{producto.Categoria}</strong></p><br/>
                    <img src={producto.imgUrl} alt={producto.name} className="img-destacado" />
                    <p>{producto.name}</p>
                    <p>{producto.description}</p>
                    <p><strong>Marca:</strong> {producto.Marca}</p>
                    <p><strong>Tono:</strong> {producto.Tono}</p>
                    <p><strong>Precio:</strong> ${producto.price}</p>
                  </div>
                ))}
              </div>
              </div>
            );
          };
          

export default Destacados;
