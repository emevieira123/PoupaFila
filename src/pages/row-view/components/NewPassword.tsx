import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PassIMG } from '../../../assets/PassIMG';
import { api } from '../../../services/api';
import { URLS } from '../../../services/URLS';
import { NewPasswordContainer } from '../styles';

export function NewPassword() {
  const [exibe, setExibe] = useState([]);
  const senhaDeExibicao = exibe.filter(
    (exibeSenha) => exibeSenha.atual === true,
  );
  console.log(senhaDeExibicao);

  useEffect(() => {
    api.get(URLS.LISTAR_SENHAS).then((response) => {
      setExibe(response.data);
    });
  }, []);

  useEffect(() => {
    senhaDeExibicao;
  }, [senhaDeExibicao]);

  return (
    <NewPasswordContainer>
      <ImgContainer>
        <PassIMG />
      </ImgContainer>
      {senhaDeExibicao.map((item) => {
        return (
          <ContentContainer key={item.id}>
            <span>Senha</span>
            <PassNumber>N{String(item.senha).padStart(3, '0')}</PassNumber>
            <span>
              Guichê:
              <b> 01</b>
            </span>
          </ContentContainer>
        );
      })}
    </NewPasswordContainer>
  );
}

const ImgContainer = styled.div`
  width: 100%;
  border-radius: 0 0 0 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    font-size: 40px;
  }

  b {
    color: #108bcf;
  }
`;

const PassNumber = styled.label`
  color: #ff0000;
  font-size: 144px;
  font-weight: bold;
`;
