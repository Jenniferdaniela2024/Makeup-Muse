import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './Routers' 
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Formulario from './SubComponentes/formulario';
import Store from './SubComponentes/store';
import Cart from './SubComponentes/bill';

const router = createBrowserRouter([
  {
  path: "/", 
  element:<App />
},
  {
  path: "form" ,
  element:<Formulario />
  },
  {
    path: "store",
    element: <Store />
  },
  {
    path: "cart",
    element: <Cart />
  }
  
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
