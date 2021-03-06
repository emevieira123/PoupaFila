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
import useGetSenhaNormal from '../../../hooks/useGetListPass';
import useChamarSenha from '../../../hooks/useChamarSenha';

const { TabPane } = Tabs;
const { Option } = Select;

function handleChange(value) {
  console.log(value);
}

export function PassContent() {
  const { data } = useGetSenhaNormal();
  const pref = data;
  const esp = data;

  const filaNormal = data?.filter((senha) => senha.fila === true);
  const UltimaSenhaChamada = data?.filter((senha) => senha.atual === true);

  const { mutate: ChamarSenha } = useChamarSenha(() => void 0);

  function handleChamarSenha() {
    ChamarSenha();
  }

  return (
    <StyledBody>
      {UltimaSenhaChamada?.map((ultimaChamada) => {
        return (
          <ContainerOldPass key={ultimaChamada.id}>
            <span>Ultima senha chamada</span>
            <b>N{String(ultimaChamada.senha).padStart(3, '0')}</b>
            <label>
              Guichê
              <strong>01</strong>
            </label>
          </ContainerOldPass>
        );
      })}

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
          <BtnNextPass onClick={handleChamarSenha}>
            Atendimento Normal
          </BtnNextPass>
        </StyledButtonNextPass>
        <TabList>
          <TabPane tab="Preferencial" key="01">
            {pref?.map((preferencial) => {
              return (
                <StyledTabsContent key={preferencial.id}>
                  <span>Senha:</span>
                  <strong>
                    P{String(preferencial.senha).padStart(3, '0')}
                  </strong>
                </StyledTabsContent>
              );
            })}
          </TabPane>
          <TabPane tab="Especial" key="02">
            {esp?.map((especial) => {
              return (
                <StyledTabsContent key={especial.id}>
                  <span>Senha:</span>
                  <strong>E{String(especial.senha).padStart(3, '0')}</strong>
                </StyledTabsContent>
              );
            })}
          </TabPane>
          <TabPane tab="Normal" key="03">
            {filaNormal?.map((normal) => {
              return (
                <StyledTabsContent key={normal.id}>
                  <span>Senha:</span>
                  <strong>N{String(normal.senha).padStart(3, '0')}</strong>
                </StyledTabsContent>
              );
            })}
          </TabPane>
        </TabList>
      </StyledContent>
    </StyledBody>
  );
}
