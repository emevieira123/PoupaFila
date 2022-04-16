import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Drawer, Button, Space } from 'antd';
import { FormNewUser } from './FormNewUser';
import { CreateUser } from '../service/CreateUser';

interface DrawerNewUserProps {
  title: string | React.ReactElement;
  width: string;
  onClose: () => void;
  saveAndClose: () => void;
  visible: boolean;
}

const initialValue = {
  name: '',
  key: '',
  email: '',
  phone: '',
  password: '',
  ativo: 'true',
};

export function DrawerNewUser({
  title,
  width,
  visible,
  onClose,
  saveAndClose,
}: DrawerNewUserProps) {
  const [values, setValues] = useState(initialValue);
  console.log(values);

  function onChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function onSubmit(e) {
    CreateUser(values);
    const { name, value } = e.target;
    setValues({ ...initialValue, [name]: value });
    saveAndClose();
  }

  return (
    <>
      <Drawer
        title={title}
        width={width}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancelar</Button>
            <Button type="primary" onClick={onSubmit}>
              Salvar
            </Button>
          </Space>
        }
      >
        <FormNewUser
          name={values.name}
          cpf={values.key}
          email={values.email}
          phone={values.phone}
          password={values.password}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </Drawer>
    </>
  );
}
