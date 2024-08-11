// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import { CartProvider } from './context/CartContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App /> {/* Renderize o componente App */}
    </CartProvider>
  </React.StrictMode>
);
