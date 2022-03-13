import styled from 'styled-components';
import { IconUserAdd } from '../assets/IconUserAdd';
import { PermissionIcon } from '../assets/PermissionIcon';
import { TimeIcon } from '../assets/TimeIcon';
import { UserAvatar } from '../assets/UserAvatar';

export function Menu() {
  return (
    <MenuContainer>
      <UserLoguedContainer>
        <UserAvatar />
        <span>Fulano de Tal</span>
      </UserLoguedContainer>
      <StyledLink>
        <IconUserAdd />
        <a href="#">Chamar Senha</a>
      </StyledLink>
      <StyledLink>
        <PermissionIcon />
        <a href="#">Permissões</a>
      </StyledLink>
      <StyledLink>
        <TimeIcon />
        <a href="#">Cadastro</a>
      </StyledLink>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  width: 20%;
  height: 100vh;
  background: #108bcf;
`;

const UserLoguedContainer = styled.div`
  width: 100%;
  height: 4rem;
  padding: 0 5px 0 5px;
  border-bottom: 1px solid #f6f4f4;
  display: flex;
  align-items: center;

  span {
    color: #f6f4f4;
    font-size: 24px;
    margin-left: 10px;
  }
`;

const StyledLink = styled.div`
  width: 100%;
  height: 2.5rem;
  margin-top: 20px;
  padding: 0 1.25rem 0 1.25rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    border-right: 4px solid #f6f4f4;
    filter: brightness(0.9);
  }

  a {
    text-decoration: none;
    color: #f6f4f4;
    font-size: 24px;
    margin-left: 10px;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
