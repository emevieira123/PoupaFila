import { api } from '../services/api';
import { URLS } from '../services/URLS';

export default function getListPass() {
  return api.get(URLS.LISTAR_SENHAS).then((response) => response.data);
}
