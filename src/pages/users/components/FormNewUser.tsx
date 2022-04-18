/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import 'antd/dist/antd.css';
import { Form, Col, Row, Input } from 'antd';
import { NewUserImg } from '../../../assets/NewUserIMG';

interface FormNewUserProps {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  setConfirmPassword: any;
  onSubmit: (e: any) => void;
  onChange: (e: any) => void;
}

export function FormNewUser({
  name,
  cpf,
  email,
  phone,
  password,
  onSubmit,
  onChange,
  confirmPassword,
  setConfirmPassword,
}: FormNewUserProps) {
  return (
    <Form layout="vertical" hideRequiredMark onFinish={onSubmit}>
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
            label="Name"
            rules={[{ required: true, message: 'Por favor informe seu nome!' }]}
          >
            <Input
              placeholder="Informe seu nome"
              type="text"
              name="name"
              id="name"
              onChange={onChange}
              value={name}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="CPF"
            rules={[{ required: true, message: 'Por favor informe seu CPF' }]}
          >
            <Input
              placeholder="Informe seu cpf"
              type="text"
              name="key"
              id="key"
              onChange={onChange}
              value={cpf}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="E-mail"
            rules={[
              { required: true, message: 'Por favor informe seu e-mail!' },
            ]}
          >
            <Input
              placeholder="Informe seu e-mail"
              type="email"
              name="email"
              id="email"
              onChange={onChange}
              value={email}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Telefone"
            rules={[
              { required: true, message: 'Por favor informe seu telefone' },
            ]}
          >
            <Input
              placeholder="Informe seu telefone"
              type="text"
              name="phone"
              id="phone"
              onChange={onChange}
              value={phone}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Senha"
            rules={[
              { required: true, message: 'Por favor informe uma senha!' },
            ]}
          >
            <Input
              placeholder="Insira uma senha"
              type="password"
              name="password"
              id="password"
              onChange={onChange}
              value={password}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Confirmar Senha"
            rules={[
              { required: true, message: 'Por favor confirme sua senha!' },
            ]}
          >
            <Input
              placeholder="Repita sua senha"
              type="password"
              id="confirmPassword"
              name={confirmPassword}
              onChange={(e: any) => setConfirmPassword(e.target.value)}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
