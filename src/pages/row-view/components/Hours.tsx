import { HoursContainer } from '../styles';
import moment from 'moment';

const Horas = moment().format('LT');

export function Hours() {
  return (
    <HoursContainer>
      <h2>{Horas}</h2>
    </HoursContainer>
  );
}
