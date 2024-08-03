// src/components/ProductCard.jsx
import React, { useContext } from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ produto }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={produto.imagem}
        alt={produto.nome}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {produto.nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          R${produto.preco}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => addToCart(produto)}>
          Adicionar ao Carrinho
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
