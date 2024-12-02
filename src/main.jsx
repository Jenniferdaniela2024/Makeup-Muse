import { createRoot } from 'react-dom/client';
import './index.css';
import App from './Routers';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Formulario from './SubComponentes/formulario';
import Store from './SubComponentes/store';
import { ShoppingCart } from './components/ShoppingCart.jsx';
import { ProductDetails } from './SubComponentes/Gestion_de_productos.jsx';
import { Login } from './SubComponentes/login.jsx';
import { OffersPage } from './SubComponentes/OffersPage.jsx';
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "form",
    element: <Formulario />
  },
  {
    path: "Store",
    element:  <ProtectedRoute>
    <Store />
  </ProtectedRoute>
  },
  {
    path: "factura",
    element: <ShoppingCart />
  },
  {
    path: "login",
    element: <Login />
  },
 { path:"/product-details", 
  element: <ProductDetails />
 },
 {
  path: "/offers",
  element: <OffersPage />
 }
  
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
