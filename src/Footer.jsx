import React, { useState } from "react";
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Asegúrate de que FontAwesome esté bien importado

const Footer = () => {
    // Estado para controlar el correo electrónico ingresado
    const [email, setEmail] = useState('');
    
    // Estado para controlar el estado del botón
    const [enviado, setEnviado] = useState(false);

    // Función para manejar el cambio en el input de correo electrónico
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // Función para manejar el envío
    const handleEnviar = (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        // Validación: si el campo de email está vacío
        if (!email) {
            alert('Por favor, completa el campo para enviar');
            return; // Detener la ejecución si el campo está vacío
        }

        // Si el campo no está vacío, cambiar el estado a "Enviado" y deshabilitar el botón
        setEnviado(true);
        alert('Enviado correctamente ')
        setEmail(''); // Esto vacía el campo

        // (Opcional) Si también quieres poner el foco en el input después de enviarlo, puedes hacerlo aquí
        inputRefEmail.current.focus();
    };
    
   

    return (
        <div className="footer">
            <h3>Makeup Muse</h3><br />
            <strong><p>- Suscríbete y mantente al día con nosotros ✔</p></strong>
            <form>
                <input 
                    type="email" 
                    id="email" 
                    name="email2" 
                    placeholder="Tu email" 
                    className="email" 
                    value={email} // Vinculamos el valor del input con el estado
                    onChange={handleEmailChange} // Capturamos los cambios en el input
                    required
             
                />
                <br />
                {/* Botón con cambio de texto, estado y color */}
                <button 
                    type="submit" 
                    className={`button_email ${enviado ? 'setEnviado' : ''}`} // Cambia la clase cuando se envíe
                    onClick={handleEnviar} 
                    disabled={enviado}
                   // Deshabilita el botón si ya se ha enviado

                >
                    {enviado ? 'Enviado' : 'Enviar'}  {/* Cambia el texto */}
                    <i className="fa-solid fa-envelope fa-2xl" style={{color: '#f9fafa'}}></i>
                </button>
            </form>

            <div className="content2">
                <strong><p>Síguenos en y comunícate por:</p></strong>
                <i className="fab fa-instagram fa-2x" style={{color: '#f9fafa'}}></i> {/* Instagram */}
                <i className="fab fa-facebook fa-2x" style={{color: '#f9fafa'}}></i> {/* Facebook */}
                <i className="fab fa-tiktok fa-2x" style={{color: '#f9fafa'}}></i> {/* TikTok */}
            </div>

            <div className="farewell">
                <strong>
                    <p>Bienvenidos siempre a <strong className="texto3">Makeup Muse</strong><br /> tu <strong className="texto3">musa en maquillaje</strong>🖐.</p>
                </strong>
            </div>
        </div>
    );
};

export default Footer;

