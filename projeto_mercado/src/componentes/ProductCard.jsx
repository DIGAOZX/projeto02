import React, { useContext } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ produto }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(produto); // Passa o objeto completo
  };

  return (
    <Card
      sx={{
        maxWidth: 345, // Define uma largura máxima para o cartão
        borderRadius: 2, // Bordas arredondadas
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Sombra leve
        transition: 'transform 0.3s, box-shadow 0.3s', // Transição suave para efeito hover
        '&:hover': {
          transform: 'scale(1.03)', // Aumenta o tamanho do cartão ao passar o mouse
          boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)', // Sombra mais pronunciada no hover
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={produto.imagem}
        alt={produto.nome}
        sx={{
          borderBottom: '1px solid #ddd', // Borda sutil abaixo da imagem
        }}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 'bold',
            mb: 1, // Margem inferior
          }}
        >
          {produto.nome}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2, // Margem inferior
          }}
        >
          R${produto.preco.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddToCart}
          sx={{
            width: '100%', // Faz o botão ocupar toda a largura do CardContent
          }}
        >
          Adicionar ao Carrinho
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
