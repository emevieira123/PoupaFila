import styled from 'styled-components';
import { PassIMG } from '../../../assets/PassIMG';
import { NewPasswordContainer } from '../styles';

export function NewPassword() {
  return (
    <NewPasswordContainer>
      <ImgContainer>
        <PassIMG />
      </ImgContainer>
      <ContentContainer>
        <span>Senha</span>
        <PassNumber>N001</PassNumber>
        <span>
          Guichê:
          <b> 01</b>
        </span>
      </ContentContainer>
    </NewPasswordContainer>
  );
}

const ImgContainer = styled.div`
  width: 100%;
  border-radius: 0 0 0 18px;
  display: flex;
  align-items: center;
  justify-content: end;
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
