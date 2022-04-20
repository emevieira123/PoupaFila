import { Menu } from '../../components/Menu';
import { GetServerSideProps } from 'next';
import { HeaderUsers } from './components/HeaderUsers';
import { TableUser } from './components/TableUser';
import { StyledBody, UserContainer } from './styles';
import { parseCookies } from 'nookies';
import { URLS } from '../../services/URLS';

import 'antd/dist/antd.css';
import { Spin } from 'antd';
import { useEffect, useState } from 'react';

export default function Users() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return (
    <Spin size="large" spinning={loading}>
      <UserContainer>
        <Menu />
        <StyledBody>
          <HeaderUsers />
          <TableUser />
        </StyledBody>
      </UserContainer>
    </Spin>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['nextauth.token']: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: URLS.LOGIN,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
