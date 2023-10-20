import { useState } from 'react';
import { CssBaseline, Container, Typography } from '@mui/material';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const [doacoesRecentes, setDoacoesRecentes] = useState([]);

  return (
    <Container
      style={{
        background: '#f0f0f0',
        padding: '20px',
        borderRadius: '10px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <CssBaseline />
      <Typography
        variant="h3"
        gutterBottom
        style={{
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '20px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        Cadastro de Doações de Medicamentos
      </Typography>
      <Component
        {...pageProps}
        doacoesRecentes={doacoesRecentes}
        setDoacoesRecentes={setDoacoesRecentes}
      />
    </Container>
  );
}

export default MyApp;
