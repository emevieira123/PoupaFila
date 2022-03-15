import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { StyledTable } from '../styles';
import { api } from '../../../services/api';

const columns = [
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Ativo?',
    dataIndex: 'ativo',
    key: 'ativo',
  },
];

export function TableUser() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    api.get('/users').then((resp) => setUser(resp.data));
  }, []);

  return (
    <>
      <StyledTable columns={columns} dataSource={user} />
    </>
  );
}

// const data = [];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     email: `edward${i}@RuleTester.com.br`,
//     phone: `6599999999${i}`,
//     ativo: 'ativo',
//   });
// }
