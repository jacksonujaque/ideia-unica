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
} from '@mui/material';
import { Delete } from '@mui/icons-material';

const style = {
  container: {
    backgroundColor: '#FFFFFF',
    padding: '2rem',
    borderTop: '5px solid #4CAF50', // Faixa verde na parte superior
  },
  title: {
    color: '#4CAF50', // Cor verde para o título
  },
  textField: {
    marginBottom: '1rem',
  },
  button: {
    background: '#4CAF50', // Cor de fundo verde para o botão
    color: '#FFFFFF',
  },
  introduction: {
    color: '#333333', // Cor escura para o texto de introdução
    fontSize: '1.5rem', // Tamanho maior para o texto de introdução
    lineHeight: '1.6', // Espaçamento entre linhas
  },
  mission: {
    color: '#4CAF50', // Cor verde para a missão
    fontSize: '2rem', // Tamanho maior para a missão
    fontWeight: 'bold', // Texto em negrito
    marginTop: '2rem',
  },
};

export default function Home() {
  const [medicamento, setMedicamento] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [doacoesRecentes, setDoacoesRecentes] = useState([]);

  const handleMedicamentoChange = (e) => {
    setMedicamento(e.target.value);
  };

  const handleQuantidadeChange = (e) => {
    setQuantidade(e.target.value);
  };

  const handleCadastroDonation = () => {
    if (medicamento.trim() !== '' && quantidade > 0) {
      const novaDoacao = {
        medicamento,
        quantidade,
      };

      setDoacoesRecentes([novaDoacao, ...doacoesRecentes]);
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
    <Container style={style.container}>
      <Typography variant="h3" gutterBottom style={style.title}>
        Bem-vindo ao <span style={style.title}>Doar é Cuidar</span>
      </Typography>
      <Typography variant="body1" style={style.introduction}>
        Doar é mais do que simplesmente compartilhar; é um ato de cuidado genuíno. No nosso espaço online, estamos comprometidos em fazer a diferença na saúde pública, transformando medicamentos não utilizados em fontes de esperança.
      </Typography>
      <Typography variant="h4" style={style.mission}>
        A Nossa Missão
      </Typography>
      <Typography variant="body1" style={style.introduction}>
        O <span style={style.title}>Doar é Cuidar</span> é um projeto pioneiro desenvolvido por um grupo de jovens determinados a enfrentar o desperdício de medicamentos. Nosso objetivo é simples e impactante: garantir que medicamentos em boas condições de uso não se percam. Estendemos nossas mãos para você, para aqueles que têm medicamentos não utilizados e para as instituições de saúde que muitas vezes recebem mais do que necessitam.
      </Typography>
      <TextField
        label="Nome do Medicamento"
        variant="outlined"
        fullWidth
        value={medicamento}
        onChange={handleMedicamentoChange}
        style={style.textField}
      />
      <TextField
        label="Quantidade"
        variant="outlined"
        fullWidth
        type="number"
        value={quantidade}
        onChange={handleQuantidadeChange}
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
      <List style={{ marginTop: '2rem' }}>
        {doacoesRecentes.map((doacao, index) => (
          <ListItem key={index} button>
            <ListItemText
              primary={`Medicamento: ${doacao.medicamento}`}
              secondary={`Quantidade: ${doacao.quantidade}`}
            />
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleExcluirDoacao(index)}
            >
              <Delete />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
