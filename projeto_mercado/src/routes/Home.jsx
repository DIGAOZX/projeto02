import React, { useEffect, useState } from 'react';
import Header from '../componentes/Header';
import ProductList from '../componentes/ProductList';
import { Container, Typography, Grid, Button } from '@mui/material';
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
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginTop: '20px' }}>
          Bem-vindo ao Meu Mercado
        </Typography>
        <Typography variant="body1" gutterBottom style={{ textAlign: 'center', marginBottom: '20px' }}>
          Confira nossos produtos e aproveite as melhores ofertas!
        </Typography>
        {erro ? (
          <Typography variant="body1" color="error">
            Erro ao carregar produtos: {erro}
          </Typography>
        ) : (
          <Grid container spacing={4}>
            {produtos.map(produto => (
              <Grid item key={produto.id} xs={12} sm={6} md={4}>
                <ProductList produto={produto} />
              </Grid>
            ))}
          </Grid>
        )}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button variant="contained" color="primary" component={Link} to="/carrinho">
            Ir para o Carrinho
          </Button>
        </div>
      </Container>
    </div>                                        
  );
}

export default Home;