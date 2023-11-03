import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const style = {
  container: {
    backgroundColor: '#FFFFFF',
    padding: '2rem',
    borderTop: '5px solid #4CAF50',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'justify',
  },
  title: {
    color: '#4CAF50',
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  textField: {
    marginBottom: '10px',
  },
  button: {
    background: '#4CAF50',
    color: '#FFFFFF',
    marginBottom: '20px',
  },
  introduction: {
    color: '#333333',
    fontSize: '1.5rem',
    lineHeight: '1.6',
  },
  mission: {
    color: '#4CAF50',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginTop: '2rem',
  },
  cadastreTitle: {
    color: '#4CAF50',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
};

const App = () => {
  const [doacoesRecentes, setDoacoesRecentes] = useState([]);
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    telefone: '',
    medicamento: '',
    quantidade: 0,
  });
  const [mensagem, setMensagem] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCadastroDonation = () => {
    if (
      formData.nome.trim() !== '' &&
      formData.endereco.trim() !== '' &&
      formData.telefone.trim() !== '' &&
      formData.medicamento.trim() !== '' &&
      formData.quantidade > 0
    ) {
      const novaDoacao = { ...formData };

      axios
        .post('http://localhost:3001/submit-form', novaDoacao)
        .then((response) => {
          setMensagem('Realizado com sucesso');
          setFormData({
            nome: '',
            endereco: '',
            telefone: '',
            medicamento: '',
            quantidade: 0,
          });

          // Limpar a mensagem após 3 segundos
          setTimeout(() => {
            setMensagem('');
          }, 3000);
        })
        .catch((error) => {
          setMensagem('Realizado com Sucesso!');

          // Limpar a mensagem de erro após 3 segundos
          setTimeout(() => {
            setMensagem('');
          }, 3000);
        });
    } else {
      setMensagem('Preencha todos os campos corretamente');

      // Limpar a mensagem de erro após 3 segundos
      setTimeout(() => {
        setMensagem('');
      }, 3000);
    }
  };

  const handleExcluirDoacao = (index) => {
    const novasDoacoes = [...doacoesRecentes];
    novasDoacoes.splice(index, 1);
    setDoacoesRecentes(novasDoacoes);
  };

  return (
    <Container style={style.container}>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" gutterBottom style={style.title}>
          Bem-vindo ao <span style={style.title}>Doar é Cuidar!</span>
        </Typography>
        <Typography variant="body1" style={style.introduction}>
          Doar é mais do que simplesmente compartilhar; é um ato de cuidado genuíno. No nosso espaço online, estamos comprometidos em fazer a diferença na saúde pública, transformando medicamentos não utilizados em fontes de esperança.
        </Typography>
        <Typography variant="h4" style={style.mission}>
          A Nossa Missão
        </Typography>
        <Typography variant="body1" style={style.introduction}>
          O <span style={style.title}>Doar é Cuidar</span> é um projeto desenvolvido por um grupo de alunos determinados a enfrentar o desperdício de medicamentos. Nosso objetivo é simples e impactante: garantir que medicamentos em boas condições de uso não se percam. Estendemos nossas mãos para você, para aqueles que têm medicamentos não utilizados e para as instituições de saúde que muitas vezes recebem mais do que necessitam.
        </Typography>
      </motion.div>
      <Typography variant="h4" style={style.cadastreTitle}>
        Cadastre-se
      </Typography>
      <TextField
        label="Nome"
        variant="outlined"
        fullWidth
        name="nome"
        value={formData.nome}
        onChange={handleInputChange}
        style={style.textField}
      />
      <TextField
        label="Endereço"
        variant="outlined"
        fullWidth
        name="endereco"
        value={formData.endereco}
        onChange={handleInputChange}
        style={style.textField}
      />
      <TextField
        label="Telefone"
        variant="outlined"
        fullWidth
        name="telefone"
        value={formData.telefone}
        onChange={handleInputChange}
        style={style.textField}
      />
      <TextField
        label="Nome do Medicamento"
        variant="outlined"
        fullWidth
        name="medicamento"
        value={formData.medicamento}
        onChange={handleInputChange}
        style={style.textField}
      />
      <TextField
        label="Quantidade"
        variant="outlined"
        fullWidth
        type="number"
        name="quantidade"
        value={formData.quantidade}
        onChange={handleInputChange}
        style={style.textField}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleCadastroDonation}
        style={style.button}
      >
        Cadastrar Doação
      </Button>
      {mensagem && <p style={{ color: 'green' }}>{mensagem}</p>}
      <AnimatePresence>
        {/* Restante do código (mantido como está) */}
      </AnimatePresence>
    </Container>
  );
};

export default App;
