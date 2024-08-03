// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx'

import Home from './routes/Home.jsx';
import Cart from './routes/Cart.jsx';
import Finalizado from './routes/Finalizado.jsx';

// Configuração das rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/carrinho",
    element: <Cart />
  },
  {
    path: "/finalizado",
    element: <Finalizado />
  }
]);

// Renderizando a aplicação com o provedor de contexto
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
