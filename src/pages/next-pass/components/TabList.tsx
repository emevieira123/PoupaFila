import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

function callback(key) {
  console.log(key);
  return key;
}

interface TabListProps {
  children: React.ReactNode;
}

export function TabList({ children }: TabListProps) {
  return (
    <StyledTabs>
      <Tabs onChange={callback} type="card">
        {children}
      </Tabs>
    </StyledTabs>
  );
}

export const StyledTabs = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid rgba(129, 129, 129, 0.4);
  border-left: 1px solid rgba(129, 129, 129, 0.4);
  border-radius: 18px 0 0 0;
  display: flex;
  padding: 5px;
  flex-direction: column;
`;
