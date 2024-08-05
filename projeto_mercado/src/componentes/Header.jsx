import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: '100%', // Garante que a AppBar ocupe toda a largura da tela
        backgroundColor: '#1976d2', // Cor de fundo da AppBar
        padding: '3px 10px', // Espaçamento interno da AppBar
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            color: 'inherit',
            textDecoration: 'none',
            textAlign: 'center',
            fontFamily: 'Oswald, sans-serif', // Fonte personalizada
            fontWeight: 'bold', // Peso da fonte
          }}
        >
          Meu Mercado
        </Typography>
        <IconButton color="inherit" component={Link} to="/">
          <HomeOutlinedIcon />
        </IconButton>
        <IconButton color="inherit" component={Link} to="/carrinho">
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
