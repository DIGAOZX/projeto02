import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductList = ({ produto }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card>
      <CardMedia
        component="img"
        alt={produto.nome}
        height="140"
        image={produto.imagem}
        title={produto.nome}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {produto.nome}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          R${produto.preco}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Quantidade:{produto.quantidade}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => addToCart(produto)}>
          Adicionar ao Carrinho
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductList;
