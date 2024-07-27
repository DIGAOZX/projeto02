// src/App.js
import React, { useEffect, useState } from 'react';
import Header from './componentes/Header';
import ProductList from './componentes/ProductList';
import { Container } from '@mui/material';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/produtos')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setProdutos(data);
      })
      .catch(error => {
        setErro(error.message);
      });
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <ProductList produtos={produtos} erro={erro} />
      </Container>
    </div>
  );
}

export default App;
