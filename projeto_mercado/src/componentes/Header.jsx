import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: '100%',
        backgroundColor: '#1976d2', // Cor de fundo da AppBar
        padding: '10px 20px', // Espaçamento interno ajustado
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Sombra leve para destacar
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center', // Alinha ícones e texto no centro verticalmente
          justifyContent: 'space-between', // Distribui espaço entre os itens
        }}
      >
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              color: '#fff', // Cor do texto branca
              textDecoration: 'none',
              fontFamily: 'Oswald, sans-serif',
              fontWeight: 'bold',
              letterSpacing: '0.5px', // Espaçamento entre letras
              display: 'block', // Faz com que o texto ocupe a largura total do Box
            }}
          >
            Meu Mercado
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" component={Link} to="/">
            <HomeOutlinedIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/carrinho" sx={{ ml: 2 }}>
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
