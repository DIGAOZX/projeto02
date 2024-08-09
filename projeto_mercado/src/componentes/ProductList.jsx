import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductList = ({ produto }) => {
  const { addToCart } = useContext(CartContext);

  // Garantindo que o preco seja um número e formatando-o
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
        alt={produto.nome}
        height="140"
        image={produto.imagem}
        title={produto.nome}
        sx={{
          borderBottom: '1px solid #ddd',
        }}
      />
      <CardContent>
        <Typography
          gutterBottom
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
        >
          Quantidade: {produto.quantidade}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: 'center',
          borderTop: '1px solid #ddd',
        }}
      >
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={() => addToCart(produto)}
          sx={{
            width: '100%',
          }}
        >
          Adicionar ao Carrinho
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductList;
