import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { api } from '../../../services/api';
import { URLS } from '../../../services/URLS';
import { OldPasswordContainer } from '../styles';

export function OldPassword() {
  const [anterior, setAnterior] = useState([]);

  const senhaAnterior = anterior.filter((item) => item.anterior === true);

  useEffect(() => {
    api.get(URLS.LISTAR_SENHAS).then((response) => {
      setAnterior(response.data);
    });
  }, []);

  return (
    <OldPasswordContainer>
      <StyledTitle>
        <h2>Senhas Anteriores</h2>
      </StyledTitle>
      {senhaAnterior.map((data) => {
        return (
          <StyledContent key={data.id}>
            <div>
              <span>Senha</span>
              <strong>N{String(data.senha).padStart(3, '0')}</strong>
            </div>
            <div>
              <span>Guichê</span>
              <strong>02</strong>
            </div>
          </StyledContent>
        );
      })}
    </OldPasswordContainer>
  );
}

const StyledTitle = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContent = styled.div`
  width: 90%;
  padding: 11px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid rgba(129, 129, 129, 0.4);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    font-size: 24px;
  }

  strong {
    font-size: 30px;
    margin-right: 10px;
  }
`;
