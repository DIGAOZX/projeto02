// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { Link } from 'react-router-dom';

const APP_BAR_HEIGHT = 64; // Ajuste conforme necessário

function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: '100%',
        height: APP_BAR_HEIGHT,
        backgroundColor: '#1976d2',
        padding: '10px 20px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" component={Link} to="/login">
            <LockOpenOutlinedIcon />
          </IconButton>
        </Box>
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              color: '#fff',
              textDecoration: 'none',
              fontFamily: 'Oswald, sans-serif',
              fontWeight: 'bold',
              letterSpacing: '0.5px',
              display: 'block',
            }}
          >
            Quitanda do seu Zé
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
