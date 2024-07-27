// src/components/ProductList.js
import React from 'react';
import { Grid, CircularProgress, Alert, Typography, Box } from '@mui/material';
import ProductCard from './ProductCard';

function ProductList({ produtos, erro }) {
  if (erro) {
    return <Alert severity="error">Erro ao carregar produtos: {erro}</Alert>;
  }

  if (produtos.length === 0) {
    return <CircularProgress />;
  }

  return (
    <Box textAlign="center">
      <Typography variant="h4" gutterBottom>
        Produtos Disponíveis
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          {produtos.map(produto => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductList;
