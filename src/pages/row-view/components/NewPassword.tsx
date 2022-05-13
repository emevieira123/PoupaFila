import styled from 'styled-components';
import { PassIMG } from '../../../assets/PassIMG';
import useGetSenhaNormal from '../../../hooks/useGetListPass';
import { NewPasswordContainer } from '../styles';

export function NewPassword() {
  const { data } = useGetSenhaNormal();

  const senhaDeExibicao = data?.filter(
    (exibeSenha) => exibeSenha.atual === true,
  );

  return (
    <NewPasswordContainer>
      <ImgContainer>
        <PassIMG />
      </ImgContainer>
      {senhaDeExibicao?.map((item) => {
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
