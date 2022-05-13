import React from 'react';
import 'antd/dist/antd.css';
import { StyledTable } from '../styles';
import useGetUsers from '../../../hooks/useGetUsers';

const columns = [
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    // render: (text) => <a>{text}</a>,
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
  const { data: users } = useGetUsers();

  return (
    <>
      <StyledTable columns={columns} dataSource={users} bordered />
    </>
  );
}
