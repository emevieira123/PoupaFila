import { Attendance } from './components/Attendance';
import { Header } from '../../components/Header';
import { Hours } from './components/Hours';
import { NewPassword } from './components/NewPassword';
import { OldPassword } from './components/OldPassword';
import { ContentContainer } from './styles';

export default function RowView() {
  return (
    <>
      <Header>Sistema de Controle de Filas</Header>
      <ContentContainer>
        <OldPassword />
        <NewPassword />
        <Hours />
        <Attendance />
      </ContentContainer>
    </>
  );
}
