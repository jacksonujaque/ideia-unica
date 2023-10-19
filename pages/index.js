import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Divider,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function Home() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [medicamento, setMedicamento] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [doacoesRecentes, setDoacoesRecentes] = useState([]);

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleEnderecoChange = (e) => {
    setEndereco(e.target.value);
  };

  const handleTelefoneChange = (e) => {
    setTelefone(e.target.value);
  };

  const handleMedicamentoChange = (e) => {
    setMedicamento(e.target.value);
  };

  const handleQuantidadeChange = (e) => {
    setQuantidade(e.target.value);
  };

  const handleCadastroDonation = () => {
    if (nome.trim() !== '' && endereco.trim() !== '' && telefone.trim() !== '' && medicamento.trim() !== '' && quantidade > 0) {
      const novaDoacao = {
        nome,
        endereco,
        telefone,
        medicamento,
        quantidade,
      };

      setDoacoesRecentes([novaDoacao, ...doacoesRecentes]);
      setNome('');
      setEndereco('');
      setTelefone('');
      setMedicamento('');
      setQuantidade('');
    }
  };

  const handleExcluirDoacao = (index) => {
    const novasDoacoes = [...doacoesRecentes];
    novasDoacoes.splice(index, 1);
    setDoacoesRecentes(novasDoacoes);
  };

  return (
    <Container style={{ background: 'white', padding: '40px', borderRadius: '20px', fontFamily: 'Arial, sans-serif' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" gutterBottom style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px', fontFamily: 'Arial, sans-serif', color: '#4CAF50' }}>
          <strong>Bem-vindo ao Doar é Cuidar</strong>
        </Typography>
        <Typography style={{ fontSize: '22px', marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>
          Doar é mais do que simplesmente compartilhar; é um ato de cuidado genuíno. No nosso espaço online, estamos comprometidos em fazer a diferença na saúde pública, transformando medicamentos não utilizados em fontes de esperança.
        </Typography>
        <Typography variant="h5" style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, sans-serif', color: '#4CAF50' }}>
          <strong>A Nossa Missão</strong>
        </Typography>
        <Typography style={{ fontSize: '22px', fontFamily: 'Arial, sans-serif' }}>
          O Doar é Cuidar é um projeto pioneiro desenvolvido por um grupo de jovens determinados a enfrentar o desperdício de medicamentos. Nosso objetivo é simples e impactante: garantir que medicamentos em boas condições de uso não se percam. Estendemos nossas mãos para você, para aqueles que têm medicamentos não utilizados e para as instituições de saúde que muitas vezes recebem mais do que necessitam.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Divider style={{ marginTop: '40px' }} />
        <Typography variant="h4" style={{ fontSize: '36px', fontWeight: 'bold', marginTop: '20px', fontFamily: 'Arial, sans-serif', color: '#4CAF50' }}>
          <strong>Cadastro de Doações de Medicamentos</strong>
        </Typography>
        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          value={nome}
          onChange={handleNomeChange}
          style={{ marginTop: '20px' }}
        />
        <TextField
          label="Endereço"
          variant="outlined"
          fullWidth
          value={endereco}
          onChange={handleEnderecoChange}
          style={{ marginTop: '20px' }}
        />
        <TextField
          label="Telefone"
          variant="outlined"
          fullWidth
          value={telefone}
          onChange={handleTelefoneChange}
          style={{ marginTop: '20px' }}
        />
        <TextField
          label="Nome do Medicamento"
          variant="outlined"
          fullWidth
          value={medicamento}
          onChange={handleMedicamentoChange}
          style={{ marginTop: '20px' }}
        />
        <TextField
          label="Quantidade"
          variant="outlined"
          fullWidth
          type="number"
          value={quantidade}
          onChange={handleQuantidadeChange}
          style={{ marginTop: '20px' }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleCadastroDonation}
          style={{ marginTop: '20px' }}
        >
          Cadastrar Doação
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <List style={{ marginTop: '40px' }}>
          {doacoesRecentes.map((doacao, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              key={index}
            >
              <ListItem style={{ border: '1px solid #ccc', borderRadius: '10px', marginBottom: '10px' }}>
                <ListItemText
                  primary={`Nome: ${doacao.nome}`}
                  secondary={`Endereço: ${doacao.endereco}, Telefone: ${doacao.telefone}, Medicamento: ${doacao.medicamento}, Quantidade: ${doacao.quantidade}`}
                />
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleExcluirDoacao(index)}
                >
                  <Delete />
                </IconButton>
              </ListItem>
            </motion.div>
          ))}
        </List>
      </motion.div>
    </Container>
  );
}
