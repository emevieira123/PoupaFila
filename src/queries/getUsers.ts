import { api } from '../services/api';
import { URLS } from '../services/URLS';

export default function getUsers() {
  return api.get(URLS.USUARIOS).then((resp) => resp.data);
}
