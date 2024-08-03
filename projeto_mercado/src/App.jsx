// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './routes/Home';
import Cart from './routes/Cart';
import Finalizado from './routes/Finalizado';
import { Container } from '@mui/material';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/finalizado" element={<Finalizado />} />
          </Routes>
        </Container>
      </Router>
    </CartProvider>
  );
}

export default App;
