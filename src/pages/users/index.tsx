import { Menu } from '../../components/Menu';
import { HeaderUsers } from './components/HeaderUsers';
import { TableUser } from './components/TableUser';
import { StyledBody, UserContainer } from './styles';

export default function Users() {
  return (
    <UserContainer>
      <Menu />
      <StyledBody>
        <HeaderUsers />
        <TableUser />
      </StyledBody>
    </UserContainer>
  );
}
