import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import * as S from './styled'

function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        // eslint-disable-next-line 
        repositories.map(repository => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        localStorage.setItem('user', usuario);
        setErro(false);
        history.push('/repositories');
      })
      .catch(err => {
        setErro(true);
      })
  }

  return (
    <S.HomeConatainer>
      <S.Title>Busca por repositório</S.Title>
      <S.Container>
        <S.Input type="text" name="usuario" value={usuario} className="usuarioInput"
          placeholder="Entre com o usuário" onChange={e => setUsuario(e.target.value)}
        />
        <S.Button type="button" onClick={handlePesquisa} >Pesquisar</S.Button>
      </S.Container>
      { erro ? <S.Error>Usuário ${usuario} não encontrado. Tente outro</S.Error> : ''} 
    </S.HomeConatainer>
  );
}

export default App;