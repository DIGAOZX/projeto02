// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Importe o App que contém a configuração de rotas
import { CartProvider } from './context/CartContext'; // Provedor de contexto

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App /> {/* Renderize o componente App */}
    </CartProvider>
  </React.StrictMode>
);
