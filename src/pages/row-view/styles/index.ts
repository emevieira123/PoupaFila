import styled from 'styled-components';

const StyledHeaderView = styled.div`
  width: 100%;
  height: 10vh;
  background: #108bcf;

  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    color: #f6f4f4;
    font-size: 48px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 90vh;

  background: #f6f4f4;

  display: grid;
  grid-template-columns: 1fr 60rem;
  grid-column: 1/2;
  gap: 0.6rem;
`;

const OldPasswordContainer = styled.div`
  width: 100%;
  height: 70vh;
  border-radius: 0 0 18px 0;
  border-bottom: 1px solid rgba(129, 129, 129, 0.4);
  border-right: 1px solid rgba(129, 129, 129, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewPasswordContainer = styled.div`
  width: 100%;
  height: 70vh;
  border-radius: 0 0 0 18px;
  border-bottom: 1px solid rgba(129, 129, 129, 0.4);
  border-left: 1px solid rgba(129, 129, 129, 0.4);
  display: grid;
  grid-template-columns: 1fr 35rem;
`;

const HoursContainer = styled.div`
  width: 100%;
  height: 18.4vh;
  border-radius: 0 18px 0 0;
  background: #818181;

  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    color: #f6f4f4;
    font-size: 96px;
  }
`;

const AttendanceContainer = styled.div`
  width: 100%;
  height: 18.4vh;
  border-radius: 18px 0 0 0;
  background: #108bcf;

  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    color: #f6f4f4;
    font-size: 48px;
  }
`;

export {
  StyledHeaderView,
  ContentContainer,
  OldPasswordContainer,
  NewPasswordContainer,
  HoursContainer,
  AttendanceContainer,
};