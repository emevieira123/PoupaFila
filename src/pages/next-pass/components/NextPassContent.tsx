import {
  ContainerOldPass,
  SelectContainer,
  StyledBody,
  StyledContent,
  StyledTabsContent,
  StyledButtonNextPass,
  BtnNextPass,
} from '../styles';
import { SelectGuiche } from './SelectGuiche';
import { TabList } from './TabList';
import { Tabs, Select } from 'antd';
import { api } from '../../../services/api';
import { useEffect, useState } from 'react';
const { TabPane } = Tabs;
const { Option } = Select;

function handleChange(value) {
  console.log(value);
}

export function PassContent() {
  const [pref, setPref] = useState([]);
  const [esp, setEsp] = useState([]);
  const [nor, setNor] = useState([]);

  useEffect(() => {
    api.get('/preferencial').then((response) => setPref(response.data));
    api.get('/especial').then((response) => setEsp(response.data));
    api.get('/normal').then((response) => setNor(response.data));
  }, []);

  return (
    <StyledBody>
      <ContainerOldPass>
        <span>Ultima senha chamada</span>
        <b>N0001</b>
        <label>
          Guichê
          <strong>02</strong>
        </label>
      </ContainerOldPass>
      <SelectContainer>
        <SelectGuiche handleChange={handleChange} value="g01">
          <Option value="g01">Guichê 01</Option>
          <Option value="g02">Guichê 02</Option>
          <Option value="g03">Guichê 03</Option>
        </SelectGuiche>
        <div>
          <h2>Lista de espera</h2>
        </div>
      </SelectContainer>

      <StyledContent>
        <StyledButtonNextPass>
          <BtnNextPass>Atendimento Preferencial</BtnNextPass>
          <BtnNextPass>Atendimento Especial</BtnNextPass>
          <BtnNextPass>Atendimento Normal</BtnNextPass>
        </StyledButtonNextPass>
        <TabList>
          <TabPane tab="Preferencial" key="01">
            {pref.map((preferencial) => {
              return (
                <StyledTabsContent key={preferencial.pass}>
                  <span>Senha:</span>
                  <strong>P{preferencial.pass}</strong>
                </StyledTabsContent>
              );
            })}
          </TabPane>
          <TabPane tab="Especial" key="02">
            {esp.map((especial) => {
              return (
                <StyledTabsContent key={especial.pass}>
                  <span>Senha:</span>
                  <strong>E{especial.pass}</strong>
                </StyledTabsContent>
              );
            })}
          </TabPane>
          <TabPane tab="Normal" key="03">
            {nor.map((normal) => {
              return (
                <StyledTabsContent key={normal.pass}>
                  <span>Senha:</span>
                  <strong>N{normal.pass}</strong>
                </StyledTabsContent>
              );
            })}
          </TabPane>
        </TabList>
      </StyledContent>
    </StyledBody>
  );
}
