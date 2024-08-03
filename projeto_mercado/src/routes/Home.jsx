import React, { useEffect, useState } from 'react';
import Header from '../componentes/Header';
import ProductList from '../componentes/ProductList';
import { Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
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
        <Button variant="contained" color="primary" component={Link} to="/carrinho" style={{ marginTop: 16 }}>
        Ir para o Carrinho
        </Button>
      </Container>
    </div>
  );
}

export default Home;