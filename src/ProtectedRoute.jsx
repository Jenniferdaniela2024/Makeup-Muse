import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { nombre } = location.state || {}; // Verifica si el estado `nombre` está disponible

  if (!nombre) {
    // Si no hay nombre, redirige a la página de inicio o login
    return <Navigate to="/login" replace />;
  }

  // Si el nombre está presente, renderiza los hijos (contenido protegido)
  return children;
};

export default ProtectedRoute;
