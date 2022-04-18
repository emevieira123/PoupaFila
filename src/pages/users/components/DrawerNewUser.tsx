import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Drawer, Button, Space } from 'antd';
import { FormNewUser } from './FormNewUser';
import { CreateUser } from '../service/CreateUser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

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
  const [confirmPassword, setConfirmPassword] = useState('');
  console.log(values);

  function onChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function onSubmit(e) {
    if (values.password === confirmPassword) {
      CreateUser(values);
      const { name, value } = e.target;
      setValues({ ...initialValue, [name]: value });
      saveAndClose();
    } else {
      toast.error('Erro: As senhas informadas devem ser idênticas!');
    }
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
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </Drawer>
    </>
  );
}
