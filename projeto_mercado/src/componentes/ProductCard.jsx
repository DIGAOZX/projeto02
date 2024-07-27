// src/components/ProductCard.js
import React from 'react';
import { Card, CardContent, CardMedia, CardActions, Button, Typography } from '@mui/material';

function ProductCard({ produto }) {
  return (
    <Card style={{ marginBottom: 16 }}>
      <CardMedia
        component="img"
        height="140"
        image={produto.imagem} // Adiciona a imagem do produto
        alt={produto.nome}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {produto.nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Preço: R${produto.preco} <br />
          Quantidade: {produto.quantidade}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
        <Button size="small">Detalhes</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
