// src/routes/Cart.jsx
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../componentes/Header';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Cart = () => {
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
      <Container>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginTop: '20px' }}>
          Carrinho
        </Typography>
        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <ShoppingCartOutlinedIcon style={{ fontSize: 100, color: 'grey' }} />
          <Typography variant="body1">
            Seu carrinho está vazio.
          </Typography>
        </div>
        ) : (
          <>
            <Grid container spacing={4}>
              {cart.map((produto, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt={produto.nome}
                      height="140"
                      image={produto.imagem} // Supondo que a URL da imagem esteja em produto.imagem
                      title={produto.nome}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {produto.nome}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        R${produto.preco.toFixed(2)} x {produto.quantidade}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Typography variant="h5" gutterBottom style={{ textAlign: 'center', marginTop: '20px' }}>
              Valor Total: R${total.toFixed(2)}
            </Typography>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Button variant="contained" color="primary" component={Link} to="/finalizado">
                Finalizar Compra
              </Button>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default Cart;
