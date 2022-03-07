import styled from 'styled-components';

const LoginContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const LeftContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    color: #108bcf;
    font-size: 30px;
  }
`;

const RightContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #108bcf;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    width: 20rem;
    height: 2.3rem;
    font-size: 20px;
    border-radius: 5px;
    color: #f6f4f4;
    border: 1px solid #f6f4f4;
    background: #108bcf;

    &:hover {
      filter: brightness(0.9);
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    margin: 4px 0 22px 0;

    label {
      color: #f6f4f4;
      display: flex;
      align-items: center;
    }

    input {
      width: 15px;
      height: 15px;
      margin-right: 5px;
      border: 0;
    }

    a {
      color: #f6f4f4;
    }
  }
`;

const LabelLogin = styled.label`
  color: #f6f4f4;
  font-size: 20px;
`;

const InputLogin = styled.input`
  width: 20rem;
  height: 2.3rem;
  margin: 3px 0 0 0;
  border: 0;
  border-radius: 5px;
  font-size: 24px;
  color: #818181;
  padding: 0 5px 0 5px;
  display: block;
`;

export {
  LoginContainer,
  LeftContainer,
  RightContainer,
  InputLogin,
  LabelLogin,
};
