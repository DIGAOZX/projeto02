// src/routes/RepositorioPage.js
import React, { useState, useEffect } from 'react';
import { Container, Button, TextField, Typography, Box, IconButton, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

const API_URL = 'http://localhost:3000/produtos';
const APP_BAR_HEIGHT = 64; // Deve corresponder à altura da AppBar

function RepositorioPage() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    nome: '',
    quantidade: '',
    imagem: '',
    categoria: '',
    preco: '', // Adicionado campo de preço
  });
  const [editProduct, setEditProduct] = useState({
    id: null,
    nome: '',
    quantidade: '',
    imagem: '',
    categoria: '',
    preco: '', // Adicionado campo de preço
  });

  useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  const addProduct = () => {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts([...products, data]);
        setNewProduct({
          nome: '',
          quantidade: '',
          imagem: '',
          categoria: '',
          preco: '', // Limpar o campo de preço
        });
      })
      .catch(error => console.error('Erro ao adicionar produto:', error));
  };

  const updateProduct = () => {
    fetch(`${API_URL}/${editProduct.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editProduct),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(products.map(product => (product.id === data.id ? data : product)));
        setEditProduct({
          id: null,
          nome: '',
          quantidade: '',
          imagem: '',
          categoria: '',
          preco: '', // Limpar o campo de preço
        });
      })
      .catch(error => console.error('Erro ao atualizar produto:', error));
  };

  const deleteProduct = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(error => console.error('Erro ao remover produto:', error));
  };

  return (
    <Container sx={{ pt: APP_BAR_HEIGHT + 2 }}>
      <Typography variant="h5" gutterBottom>
        Repositório
      </Typography>
      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            fullWidth
            label="Nome"
            value={newProduct.nome}
            onChange={(e) => setNewProduct({ ...newProduct, nome: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Quantidade"
            value={newProduct.quantidade}
            onChange={(e) => setNewProduct({ ...newProduct, quantidade: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Imagem URL"
            value={newProduct.imagem}
            onChange={(e) => setNewProduct({ ...newProduct, imagem: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Categoria"
            value={newProduct.categoria}
            onChange={(e) => setNewProduct({ ...newProduct, categoria: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Preço"
            value={newProduct.preco}
            onChange={(e) => setNewProduct({ ...newProduct, preco: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Button fullWidth onClick={addProduct} variant="contained" color="primary">
            Adicionar
          </Button>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            fullWidth
            label="Nome"
            value={editProduct.nome}
            onChange={(e) => setEditProduct({ ...editProduct, nome: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Quantidade"
            value={editProduct.quantidade}
            onChange={(e) => setEditProduct({ ...editProduct, quantidade: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Imagem URL"
            value={editProduct.imagem}
            onChange={(e) => setEditProduct({ ...editProduct, imagem: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Categoria"
            value={editProduct.categoria}
            onChange={(e) => setEditProduct({ ...editProduct, categoria: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Preço"
            value={editProduct.preco}
            onChange={(e) => setEditProduct({ ...editProduct, preco: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Button
            fullWidth
            onClick={updateProduct}
            variant="contained"
            color="secondary"
            disabled={!editProduct.id}
          >
            <SaveIcon sx={{ mr: 1 }} />
            Salvar
          </Button>
        </Grid>
      </Grid>
      <Box>
        {products.map(product => (
          <Box key={product.id} mb={1} display="flex" alignItems="center" border={1} borderColor="divider" p={2} borderRadius={1}>
            <Typography variant="body1" sx={{ flexGrow: 1 }}>
              {product.nome} - R${product.preco} {/* Exibir o preço */}
            </Typography>
            <IconButton onClick={() => setEditProduct({
              id: product.id,
              nome: product.nome,
              quantidade: product.quantidade,
              imagem: product.imagem,
              categoria: product.categoria,
              preco: product.preco, // Adicionado campo de preço
            })} color="primary">
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => deleteProduct(product.id)} color="error">
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default RepositorioPage;
