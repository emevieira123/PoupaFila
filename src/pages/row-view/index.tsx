import { Attendance } from './components/Attendance';
import { Header } from '../../components/Header';
import { Hours } from './components/Hours';
import { NewPassword } from './components/NewPassword';
import { OldPassword } from './components/OldPassword';
import { ContentContainer } from './styles';
import styled from 'styled-components';

export default function RowView() {
  return (
    <>
      <Header>Sistema de Controle de Filas</Header>
      <ContentContainer>
        <OldPassword />
        <NewPassword />
        <FotterContainer>
          <Hours />
          <Attendance />
        </FotterContainer>
      </ContentContainer>
    </>
  );
}

const FotterContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: grid;
  grid-template-columns: 36vw 1fr;
  gap: 0.6rem;
`;
