// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './routes/Home';
import Cart from './routes/Cart';
import Finalizado from './routes/Finalizado';
import LoginPage from './routes/LoginPage'; // Importação para LoginPage
import RepositorioPage from './componentes/RepositorioPage'; // Importação para RepositorioPage
import { Container } from '@mui/material';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/finalizado" element={<Finalizado />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/repositorio" element={<RepositorioPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
