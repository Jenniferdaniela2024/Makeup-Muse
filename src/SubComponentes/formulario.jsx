import React from "react";
import './formulario.css';
import Navbar from "../Nav";  // Asegúrate de que la ruta de importación sea correcta
import Footer from "../Footer"; // Asegúrate de que la ruta de Footer sea correcta

const Formulario = () => {
    const EscucharClick = (event) => {
        // Previene el envío del formulario
        event.preventDefault();

        // Obtener los valores de los inputs
        const email = event.target.email.value;
        const descripcion = event.target.descripcion.value;

        // Validar si los campos están vacíos
        if (!email || !descripcion) {
            alert('Por favor, completa todos los campos antes de enviar.');
            return;
        }

        // Si los campos están completos, mostrar el mensaje de éxito
        alert('Mensaje enviado Correctamente ✔');
     
    };

    return (
        <div>
            {/* Renderiza el Navbar en la parte superior */}
            <Navbar />

            {/* Contenido específico de la página */}
            <div className="formulario-contenido">
               <br />
               <form onSubmit={EscucharClick}>
               <div className="title">Welcome,<br/><span>Envianos tus Sugerencias/Quejas</span></div>
               <input 
                   className="input" 
                   name="email" 
                   placeholder="Ingresa tu email" 
                   type="email" 
                   required
               />
               <input 
                   className="input" 
                   name="descripcion" 
                   placeholder="Descripción" 
                   type="text" 
                   required
               />
               <button className="button-confirm" type="submit">Enviar →</button>
               </form>
            </div>

            {/* Renderiza el Footer en la parte inferior */}
            <Footer />
        </div>
    );
};

export default Formulario;



