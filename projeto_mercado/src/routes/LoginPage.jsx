import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Verificar se o e-mail e a senha são iguais aos valores específicos
    if (email === 'admin@gmail.com' && password === 'admin123') {
      navigate('/repositorio');
    } else {
      // Caso as credenciais sejam inválidas, exibe uma mensagem de erro (opcional)
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 13 }}> {/* Ajusta a margem superior para mover os campos para baixo */}
        <Typography variant="h5" gutterBottom>
             Área Exclusiva para Credenciados
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            margin="normal"
            label="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Entrar
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default LoginPage;
