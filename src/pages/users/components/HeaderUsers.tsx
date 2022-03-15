import 'antd/dist/antd.css';
import React from 'react';
import { IconUsers } from '../../../assets/IconUsers';
import { StyledHeaderRow, StyledHeaderCol, StyledButton } from '../styles';

export function HeaderUsers() {
  return (
    <StyledHeaderRow>
      <StyledHeaderCol span={8}></StyledHeaderCol>
      <StyledHeaderCol span={8}>
        <div>
          <IconUsers />
          <h2>Usuários</h2>
        </div>
      </StyledHeaderCol>
      <StyledHeaderCol span={8}>
        <StyledButton type="primary">+ Novo Usuário</StyledButton>
      </StyledHeaderCol>
    </StyledHeaderRow>
  );
}
