import styled from 'styled-components';
import { Col, Row, Button, Table } from 'antd';

const UserContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #f6f4f4;
  display: flex;
`;

const StyledBody = styled.div`
  width: 80%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledHeaderRow = styled(Row)`
  width: 97%;
  height: auto;
`;

const StyledHeaderCol = styled(Col)`
  padding-top: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
      font-weight: bold;
    }
  }
`;

const StyledButton = styled(Button)`
  color: #f6f6f6;
  background: #108bcf;
  font-size: 20px;
  border-radius: 5px;
  padding: 20px 10px 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTable = styled(Table)`
  width: 97%;

  .ant-table-content {
    color: #818181;
    font-size: 16px;
  }
`;

export {
  UserContainer,
  StyledBody,
  StyledHeaderRow,
  StyledHeaderCol,
  StyledButton,
  StyledTable,
};
