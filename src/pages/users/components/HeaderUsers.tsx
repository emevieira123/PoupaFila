import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { IconUsers } from '../../../assets/IconUsers';
import { StyledHeaderRow, StyledHeaderCol, StyledButton } from '../styles';
import { DrawerNewUser } from './DrawerNewUser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export function HeaderUsers() {
  const message = () => toast.success('Usuário criado com sucesso!!');
  const [visible, setVisible] = useState(false);

  const handleDrawerNewUserIsOpen = () => {
    setVisible(true);
  };

  const handleDrawerNewUserClose = () => {
    setVisible(false);
  };

  const handleDrawerNewUserSaveAndClose = () => {
    setVisible(false);
    setTimeout(() => {
      message();
    }, 1000);
  };

  return (
    <>
      <StyledHeaderRow>
        <StyledHeaderCol span={8}></StyledHeaderCol>
        <StyledHeaderCol span={8}>
          <div>
            <IconUsers />
            <h2>Usuários</h2>
          </div>
        </StyledHeaderCol>
        <StyledHeaderCol span={8}>
          <StyledButton type="primary" onClick={handleDrawerNewUserIsOpen}>
            + Novo Usuário
          </StyledButton>
        </StyledHeaderCol>
      </StyledHeaderRow>

      <DrawerNewUser
        title="Novo Usuário"
        width="45vw"
        visible={visible}
        onClose={handleDrawerNewUserClose}
        saveAndClose={handleDrawerNewUserSaveAndClose}
      />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
