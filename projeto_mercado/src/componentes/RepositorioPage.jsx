import React, { useState, useEffect } from 'react';
import { Container, Button, TextField, Typography, Box, IconButton, Grid, Card, CardContent, CardActions } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

const API_URL = 'http://localhost:3000/produtos';
const APP_BAR_HEIGHT = 64;

function RepositorioPage() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    nome: '',
    quantidade: '',
    imagem: '',
    categoria: '',
    preco: '',
  });
  const [editProduct, setEditProduct] = useState({
    id: null,
    nome: '',
    quantidade: '',
    imagem: '',
    categoria: '',
    preco: '',
  });

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  const addProduct = () => {
    const precoConvertido = parseFloat(newProduct.preco);

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...newProduct, preco: precoConvertido }),
    })
      .then(response => response.json())
      .then(data => {
        setProducts([...products, data]);
        setNewProduct({ nome: '', quantidade: '', imagem: '', categoria: '', preco: '' });
      })
      .catch(error => console.error('Erro ao adicionar produto:', error));
  };

  const updateProduct = () => {
    const precoConvertido = parseFloat(editProduct.preco);

    fetch(`${API_URL}/${editProduct.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...editProduct, preco: precoConvertido }),
    })
      .then(response => response.json())
      .then(data => {
        setProducts(products.map(product => (product.id === data.id ? data : product)));
        setEditProduct({ id: null, nome: '', quantidade: '', imagem: '', categoria: '', preco: '' });
      })
      .catch(error => console.error('Erro ao atualizar produto:', error));
  };

  const deleteProduct = (id) => {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      .then(() => setProducts(products.filter(product => product.id !== id)))
      .catch(error => console.error('Erro ao remover produto:', error));
  };

  const textFieldStyles = {
    input: {
      color: 'white',
    },
  };

  return (
    <Container sx={{ pt: APP_BAR_HEIGHT + 2 }}>
      <Typography variant="h5" gutterBottom>
        Repositório
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Adicionar Novo Produto</Typography>
          <TextField
            fullWidth
            label="Nome"
            value={newProduct.nome}
            onChange={(e) => setNewProduct({ ...newProduct, nome: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
            InputProps={{ style: textFieldStyles.input }}
          />
          <TextField
            fullWidth
            label="Quantidade"
            value={newProduct.quantidade}
            onChange={(e) => setNewProduct({ ...newProduct, quantidade: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
            InputProps={{ style: textFieldStyles.input }}
          />
          <TextField
            fullWidth
            label="Imagem URL"
            value={newProduct.imagem}
            onChange={(e) => setNewProduct({ ...newProduct, imagem: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
            InputProps={{ style: textFieldStyles.input }}
          />
          <TextField
            fullWidth
            label="Categoria"
            value={newProduct.categoria}
            onChange={(e) => setNewProduct({ ...newProduct, categoria: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
            InputProps={{ style: textFieldStyles.input }}
          />
          <TextField
            fullWidth
            label="Preço"
            value={newProduct.preco}
            onChange={(e) => setNewProduct({ ...newProduct, preco: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
            InputProps={{ style: textFieldStyles.input }}
          />
          <Button fullWidth onClick={addProduct} variant="contained" color="primary">
            Adicionar
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6">Editar Produto</Typography>
          <TextField
            fullWidth
            label="Nome"
            value={editProduct.nome}
            onChange={(e) => setEditProduct({ ...editProduct, nome: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
            InputProps={{ style: textFieldStyles.input }}
          />
          <TextField
            fullWidth
            label="Quantidade"
            value={editProduct.quantidade}
            onChange={(e) => setEditProduct({ ...editProduct, quantidade: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
            InputProps={{ style: textFieldStyles.input }}
          />
          <TextField
            fullWidth
            label="Imagem URL"
            value={editProduct.imagem}
            onChange={(e) => setEditProduct({ ...editProduct, imagem: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
            InputProps={{ style: textFieldStyles.input }}
          />
          <TextField
            fullWidth
            label="Categoria"
            value={editProduct.categoria}
            onChange={(e) => setEditProduct({ ...editProduct, categoria: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
            InputProps={{ style: textFieldStyles.input }}
          />
          <TextField
            fullWidth
            label="Preço"
            value={editProduct.preco}
            onChange={(e) => setEditProduct({ ...editProduct, preco: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
            InputProps={{ style: textFieldStyles.input }}
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

      <Box mt={4}>
        <Typography variant="h6">Produtos</Typography>
        <Grid container spacing={3}>
          {products.map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {product.nome}
                  </Typography>
                  <Typography variant="body2">
                    Categoria: {product.categoria}
                  </Typography>
                  <Typography variant="body2">
                    Quantidade: {product.quantidade}
                  </Typography>
                  <Typography variant="body2">
                    Preço: R${product.preco}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    onClick={() =>
                      setEditProduct({
                        id: product.id,
                        nome: product.nome,
                        quantidade: product.quantidade,
                        imagem: product.imagem,
                        categoria: product.categoria,
                        preco: product.preco,
                      })
                    }
                    color="primary"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => deleteProduct(product.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default RepositorioPage;
