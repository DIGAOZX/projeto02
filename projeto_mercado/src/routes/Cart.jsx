// src/components/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Carrinho
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">
          Seu carrinho está vazio.
        </Typography>
      ) : (
        <List>
          {cart.map((produto, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={produto.nome}
                secondary={`R$${produto.preco}`}
              />
            </ListItem>
          ))}
        </List>
      )}
      <Button variant="contained" color="primary" component={Link} to="/finalizado">Finalizar Compra</Button>
    </Container>
  );
};

export default Cart;
