import { Attendance } from './components/Attendance';
import { HeaderView } from './components/HeaderView';
import { Hours } from './components/Hours';
import { NewPassword } from './components/NewPassword';
import { OldPassword } from './components/OldPassword';
import { ContentContainer } from './styles';

export default function RowView() {
  return (
    <>
      <HeaderView />
      <ContentContainer>
        <OldPassword />
        <NewPassword />
        <Hours />
        <Attendance />
      </ContentContainer>
    </>
  );
}
