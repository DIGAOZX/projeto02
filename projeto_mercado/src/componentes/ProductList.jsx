// src/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';
import { Grid } from '@mui/material';

const ProductList = ({ produtos }) => {
  return (
    <Grid container spacing={4}>
      {produtos.map(produto => (
        <Grid item key={produto.id} xs={12} sm={6} md={4}>
          <ProductCard produto={produto} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
