// import { api } from '../services/api';
// import { URLS } from '../services/URLS';

import moment from 'moment';
import 'moment/locale/pt-br';

export const Hora = 'LT';

export default function getHora() {
  moment.locale('pt-br');
  return moment().format(Hora);
}
