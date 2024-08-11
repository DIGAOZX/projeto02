import React, { useContext, useEffect, useState } from 'react';
import { Container, Typography, Button, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';
import Header from '../componentes/Header';
import { CartContext } from '../context/CartContext';

const Finalizado = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calcularTotal = () => {
      const total = cart.reduce((acc, produto) => acc + produto.preco * produto.quantidade, 0);
      setTotal(total);
    };

    calcularTotal();
  }, [cart]);

  return (
    <div>
      <Header />
      <Container
        maxWidth="lg"
        sx={{ marginTop: '70px', paddingBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
          <CheckCircleOutlineIcon
            sx={{
              fontSize: 100,
              color: 'success.main',
              mb: 2,
            }}
          />
        </Box>

        <Typography variant="h5" gutterBottom style={{ textAlign: 'center', marginTop: '20px' }}>
          Compra Finalizada!
        </Typography>
        <Typography variant="h5" gutterBottom style={{ textAlign: 'center', marginTop: '20px' }}>
          Obrigado por sua compra. Seu pedido foi processado com sucesso.
        </Typography>

        <Typography variant="h5" gutterBottom style={{ textAlign: 'center', marginTop: '20px' }}>
          Resumo do Pedido
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {cart.map((produto, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  alt={produto.nome}
                  height="140"
                  image={produto.imagem}
                  title={produto.nome}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {produto.nome}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    R${produto.preco.toFixed(2)} x {produto.quantidade}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5" gutterBottom style={{ textAlign: 'center', marginTop: '20px' }}>
          Valor Total Pago: R${total.toFixed(2)}
        </Typography>

        <Box mt={4} sx={{ textAlign: 'center' }}>
          <Button variant="contained" color="primary" component={Link} to="/">
            Voltar para a Página Inicial
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Finalizado;
