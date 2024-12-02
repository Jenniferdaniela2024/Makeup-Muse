import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import Footer from "../Footer";
import Navbar from "../Nav";

export const Login = () => {
    const [data, setData] = useState([]); // Inicializa data como null
    const [nombre, setNombre] = useState(""); 
    const [contraseña, setContraseña] = useState(""); 
    const [error, setError] = useState(false); 
    const [user, setUser] = useState([]); 
    const [showPassword, setShowPassword] = useState(false); // Estado para mostrar u ocultar la contraseña

    const navigate = useNavigate(); // Hook para redirigir

    // Cargar usuarios desde la API
    useEffect(() => {
        fetch("http://localhost/api/users")
            .then((response) => response.json())
            .then((data) => {  
                console.log("Datos de la API:", data); // Verifica lo que recibes
                setData(data);
            })            
            .catch((error) => console.error('Error al cargar los usuarios:', error));
    }, []); // Solo se ejecuta una vez al montar el componente

    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (nombre === "" || contraseña === "") {
            setError(true); 
            return;
        }

        setError(false); 

        // Verificar si el usuario existe en los datos cargados de la API
        const userValid = data?.find(user => user.nombre === nombre && user.contraseña === contraseña);

        if (userValid) {
            setUser([nombre]); // Guarda el nombre del usuario
            alert(`Bienvenid@ ${nombre} a la tienda Makeup Muse`);
            navigate('/store', { state: { nombre } });
        } else {
            setError(true); // Si no encuentra el usuario, muestra un error
            alert("Usuario o contraseña incorrectos.");
        }
    };

    return (
        <div>
            <Navbar/><br/>
            <div className="container-login">
                <img src="public/img-login.jpeg" alt="img-login" className="img-login" />
                <div className="login">
                    <section>
                        <h1 className='tittle-login'>Login</h1><br/>
                        <p>Inicia sesión y compra increíbles productos en nuestra tienda <br/> Makeup Muse🌸</p><br/>
                        <form onSubmit={handleSubmit}>
                            Nombre de Usuario <br/>
                            <input
                                type="text"
                                value={nombre}
                                onChange={e => setNombre(e.target.value)}
                                placeholder="Nombre de usuario"
                                className='input-login'
                            /><br/><br/>
                            Contraseña <br/>
                            <input
                                type={showPassword ? "text" : "password"} // Cambia entre texto y contraseña
                                value={contraseña}
                                onChange={e => setContraseña(e.target.value)}
                                placeholder="Contraseña"
                                className='input-login'
                            /><br/>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={showPassword}
                                    onChange={() => setShowPassword(!showPassword)} // Cambia el estado del checkbox
                                />
                                Mostrar contraseña
                            </label><br/>
                            <button type="submit" className="button-login">Iniciar sesión</button>
                        </form>
                        {error && <p className="error">Todos los campos son obligatorios para iniciar sesión</p>}
                    </section>
                </div>
            </div>

            {/* Muestra la lista de usuarios solo si 'data' está cargada */}
            <ul>
                {data ? (
                    data.map((user) => (
                        <li key={user.id}>{user.nombre}</li> // Asegúrate de que 'user.id' exista
                    ))
                ) : (
                    <li>Cargando usuarios...</li> // Muestra un mensaje mientras se cargan los datos
                )}
            </ul>

            <Footer />
        </div>
    );
};

export default Login;
