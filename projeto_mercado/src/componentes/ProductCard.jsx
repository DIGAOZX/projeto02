import React, { useContext } from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ produto }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(produto); 
  };

  const precoFormatado = Number.isNaN(Number(produto.preco)) ? '0.00' : Number(produto.preco).toFixed(2);

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 2,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={produto.imagem}
        alt={produto.nome}
        sx={{
          borderBottom: '1px solid #ddd',
        }}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 'bold',
            mb: 1,
          }}
        >
          {produto.nome}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 1,
          }}
        >
          R${precoFormatado}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
          }}
        >
          Quantidade: {produto.quantidade}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddToCart}
          sx={{
            width: '100%',
          }}
        >
          Adicionar ao Carrinho
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
