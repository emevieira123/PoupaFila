import styled from 'styled-components';

const NextPassContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #f6f4f4;
  display: flex;
`;

const StyledBody = styled.div`
  width: 80%;
  height: 100vh;
  background: #f6f4f4;

  display: flex;
  align-items: end;
  flex-direction: column;
`;

const ContainerOldPass = styled.div`
  width: 99%;
  height: 17vh;
  background: #f6f4f4;
  border-radius: 0 0 0 18px;
  border-bottom: 1px solid rgba(129, 129, 129, 0.4);
  border-left: 1px solid rgba(129, 129, 129, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  span {
    font-size: 48px;
    font-weight: bold;
  }

  b {
    font-size: 96px;
    color: #ff0000;
  }
  label {
    font-size: 30px;
    font-weight: bold;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  strong {
    font-size: 48px;
    color: #108bcf;
  }
`;

const SelectContainer = styled.div`
  width: 99%;
  height: 3rem;
  margin-top: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 30rem;
    display: flex;
    justify-content: center;
    h2 {
      font-weight: bold;
    }
  }
`;

const StyledContent = styled.div`
  width: 99%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 30rem;
`;

const StyledTabsContent = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(129, 129, 129, 0.4);
  display: flex;
  justify-content: space-evenly;
  padding: 5px;
  span {
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }
  strong {
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    color: #108bcf;
  }
`;

const StyledButtonNextPass = styled.div`
  border: '1px solid black';
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BtnNextPass = styled.button`
  width: 60%;
  padding: 1rem;
  background: #108bcf;
  color: #f6f4f4;
  border: 0;
  border-radius: 5px;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 4rem;
  transition: 0.35s;
  &:hover {
    filter: brightness(0.9);
  }
`;

export {
  NextPassContainer,
  StyledBody,
  ContainerOldPass,
  SelectContainer,
  StyledContent,
  StyledTabsContent,
  StyledButtonNextPass,
  BtnNextPass,
};
