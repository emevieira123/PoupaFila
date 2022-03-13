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
const { TabPane } = Tabs;
const { Option } = Select;

function handleChange(value) {
  console.log(value);
}

export function PassContent() {
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
            <StyledTabsContent>
              <span>Senha:</span>
              <strong>P001</strong>
            </StyledTabsContent>
          </TabPane>
          <TabPane tab="Especial" key="02">
            <StyledTabsContent>
              <span>Senha:</span>
              <strong>E002</strong>
            </StyledTabsContent>
          </TabPane>
          <TabPane tab="Normal" key="03">
            <StyledTabsContent>
              <span>Senha:</span>
              <strong>N003</strong>
            </StyledTabsContent>
          </TabPane>
        </TabList>
      </StyledContent>
    </StyledBody>
  );
}
