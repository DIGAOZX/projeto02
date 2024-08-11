import React, { useEffect, useState } from 'react';
import Header from '../componentes/Header';
import ProductCard from '../componentes/ProductCard';
import { Container, Typography, Grid, Button, Box, Paper, TextField, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/produtos')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setProdutos(data))
      .catch(error => setErro(error.message));
  }, []);

  const agruparPorCategoria = (produtos) => {
    return produtos.reduce((agrupados, produto) => {
      const categoria = produto.categoria;
      if (!agrupados[categoria]) {
        agrupados[categoria] = [];
      }
      agrupados[categoria].push(produto);
      return agrupados;
    }, {});
  };

  const produtosPorCategoria = agruparPorCategoria(produtos);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredProducts = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(searchQuery)
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '100%' }}>
      <Header />
      <Container maxWidth="lg" sx={{ marginTop: '60px', paddingBottom: '40px', ml: '65px' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginTop: '20px' }}>
          Bem-vindo ao Meu Mercado
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ textAlign: 'center', marginBottom: '20px' }}>
          Confira nossos produtos e aproveite as melhores ofertas!
        </Typography>
        
        
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <TextField
            variant="outlined"
            placeholder="Buscar produtos..."
            onChange={handleSearch}
            sx={{ width: '100%', maxWidth: '600px' }}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Box>

        {erro ? (
          <Typography variant="body1" color="error" sx={{ textAlign: 'center' }}>
            Erro ao carregar produtos: {erro}
          </Typography>
        ) : (
          Object.keys(produtosPorCategoria).map(categoria => (
            <Box key={categoria} sx={{ width: '100%', mb: 4 }}>
              <Paper elevation={3} sx={{ padding: '10px', marginBottom: '20px', backgroundColor: '#f5f5f5' }}>
                <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
                  {categoria}
                </Typography>
              </Paper>
              <Grid container spacing={4} justifyContent="center">
                {produtosPorCategoria[categoria].filter(produto => produto.nome.toLowerCase().includes(searchQuery)).map(produto => (
                  <Grid item key={produto.id} xs={12} sm={6} md={4} lg={3}>
                    <ProductCard produto={produto} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))
        )}
        
        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
          <Button variant="contained" color="primary" component={Link} to="/carrinho" startIcon={<ShoppingCartIcon />}>
            Ir para o Carrinho
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
