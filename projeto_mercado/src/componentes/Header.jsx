import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
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
