import React, { useState } from 'react';

export default function Home() {
  const [medicamento, setMedicamento] = useState('');
  const [quantidade, setQuantidade] = useState(0);
  const [doacoesRecentes, setDoacoesRecentes] = useState([]);

  const handleMedicamentoChange = (e) => {
    setMedicamento(e.target.value);
  };

  const handleQuantidadeChange = (e) => {
    setQuantidade(parseInt(e.target.value, 10));
  };

  const handleCadastroDonation = () => {
    if (medicamento.trim() !== '' && quantidade > 0) {
      const novaDoacao = {
        medicamento,
        quantidade,
      };

      setDoacoesRecentes([novaDoacao, ...doacoesRecentes]);
      setMedicamento('');
      setQuantidade(0);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Cadastro de Doações de Medicamentos</h1>
      </header>

      <main>
        <div className="form-container">
          <form>
            <label htmlFor="medicamento">Nome do Medicamento:</label>
            <input
              type="text"
              id="medicamento"
              value={medicamento}
              onChange={handleMedicamentoChange}
              required
            />

            <label htmlFor="quantidade">Quantidade:</label>
            <input
              type="number"
              id="quantidade"
              value={quantidade}
              onChange={handleQuantidadeChange}
              required
            />

            <button type="button" onClick={handleCadastroDonation}>
              Cadastrar Doação
            </button>
          </form>
        </div>

        <div className="recent-donations">
          <h2>Doações Recentes:</h2>
          <ul>
            {doacoesRecentes.map((doacao, index) => (
              <li key={index}>
                Medicamento: {doacao.medicamento}, Quantidade: {doacao.quantidade}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

