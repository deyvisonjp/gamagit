import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositories() {
  const history = useHistory();
  const [repositories, setRepositories ] = useState([]);
  
  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if (repositoriesName !== null) {
      console.log(repositoriesName);
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.clear();
    } else {
      history.push('/');
    }
  }, []); // vetor vazio -> Só vai monitorar quando o componente for atualizado

  return (
    <S.Container>
      <S.Title>Repositório</S.Title>
      <S.List>
        {
          repositories.map(repository => {
            return (
              <S.ListItem>Nome do repositório: {repository}</S.ListItem>
            )
          })
        }
      </S.List>
      <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
  );
}
