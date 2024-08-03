// src/routes/Finalizado.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Finalizado = () => {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Compra Finalizada!
      </Typography>
      <Typography variant="h6" gutterBottom>
        Obrigado pela sua compra. Aqui está o resumo do seu pedido:
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">
          Nenhum produto foi adicionado ao carrinho.
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
      <Button variant="contained" color="primary" component={Link} to="/">
        Voltar à Página Inicial
      </Button>
    </Container>
  );
};

export default Finalizado;
