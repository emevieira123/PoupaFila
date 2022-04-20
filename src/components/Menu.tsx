import Link from 'next/link';
import styled from 'styled-components';
// import { IconUserAdd } from '../assets/IconUserAdd';
import { PermissionIcon } from '../assets/PermissionIcon';
import { TimeIcon } from '../assets/TimeIcon';
import { UserAvatar } from '../assets/UserAvatar';
import { LogoutIcon } from '../assets/LogoutIcon';
import { destroyCookie } from 'nookies';
import Router from 'next/router';
import { URLS } from '../services/URLS';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Logout = () => {
  destroyCookie({}, 'nextauth.token');
  destroyCookie({}, 'idUser');

  setTimeout(() => {
    Router.push(URLS.LOGIN);
  }, 1000);
};

export function Menu() {
  const { user } = useContext(AuthContext);

  return (
    <StyledMenu>
      <MenuContainer>
        <UserLoguedContainer>
          <UserAvatar />
          <span>{user?.name}</span>
        </UserLoguedContainer>
        <StyledLink>
          <TimeIcon />
          <Link href="/next-pass">Chamar Senha</Link>
        </StyledLink>
        <StyledLink>
          <PermissionIcon />
          <Link href="/users">Permissões</Link>
        </StyledLink>
        {/* <StyledLink>
          <IconUserAdd />
          <Link href="#">Cadastro</Link>
        </StyledLink> */}

        <StyledLogoutButton>
          <LogoutIcon />
          <button onClick={Logout}>
            <Link href="#">Logout</Link>
          </button>
        </StyledLogoutButton>
      </MenuContainer>
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
  width: 20%;
`;

const MenuContainer = styled.div`
  width: 20%;
  height: 100vh;
  background: #108bcf;
  position: fixed;
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

const StyledLogoutButton = styled.div`
  width: 20%;
  height: 2.5rem;
  margin-top: 20px;
  padding: 0 1.25rem 0 1.25rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  bottom: 3px;
  position: fixed;

  &:hover {
    border-right: 4px solid #f6f4f4;
    filter: brightness(0.9);
  }

  a {
    color: #f6f4f4;
    font-size: 24px;
    margin-left: 10px;
  }

  button {
    border: 0;
    background: transparent;
  }
`;
