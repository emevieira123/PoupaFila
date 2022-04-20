import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { Menu } from '../../components/Menu';
// import { api } from '../../services/api';
import { URLS } from '../../services/URLS';
import { PassContent } from './components/NextPassContent';
import { NextPassContainer } from './styles';
import { parseCookies } from 'nookies';

import 'antd/dist/antd.css';
import { Spin } from 'antd';

export default function NextPass() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return (
    <Spin size="large" spinning={loading}>
      <NextPassContainer>
        <Menu />
        <PassContent />
      </NextPassContainer>
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
