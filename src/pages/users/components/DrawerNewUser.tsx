import React from 'react';
import 'antd/dist/antd.css';
import { Drawer, Form, Button, Col, Row, Input, Space } from 'antd';
import { NewUserImg } from '../../../assets/NewUserIMG';

interface DrawerNewUserProps {
  title: string | React.ReactElement;
  width: string;
  onClose: () => void;
  saveAndClose: () => void;
  visible: boolean;
}

export function DrawerNewUser({
  title,
  width,
  visible,
  onClose,
  saveAndClose,
}: DrawerNewUserProps) {
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
            <Button onClick={saveAndClose} type="primary">
              Salvar
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row>
            <Col
              span={24}
              style={{
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: '1.5rem',
              }}
            >
              <NewUserImg />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  { required: true, message: 'Por favor informe seu nome!' },
                ]}
              >
                <Input placeholder="Informe seu nome" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="cpf"
                label="CPF"
                rules={[
                  { required: true, message: 'Por favor informe seu CPF' },
                ]}
              >
                <Input placeholder="Informe seu cpf" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  { required: true, message: 'Por favor informe seu e-mail!' },
                ]}
              >
                <Input placeholder="Informe seu e-mail" type="email" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="Telefone"
                rules={[
                  { required: true, message: 'Por favor informe seu telefone' },
                ]}
              >
                <Input placeholder="Informe seu telefone" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="password"
                label="Senha"
                rules={[
                  { required: true, message: 'Por favor informe uma senha!' },
                ]}
              >
                <Input placeholder="Insira uma senha" type="password" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="confirm-password"
                label="Confirmar Senha"
                rules={[
                  { required: true, message: 'Por favor confirme sua senha!' },
                ]}
              >
                <Input placeholder="Repita sua senha" type="password" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
}
