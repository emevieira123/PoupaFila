import { HoursContainer } from '../styles';

const Horas = new Intl.DateTimeFormat('pt-BR', {
  timeStyle: 'short',
}).format(new Date());

export function Hours() {
  return (
    <HoursContainer>
      <h2>{Horas}</h2>
    </HoursContainer>
  );
}
