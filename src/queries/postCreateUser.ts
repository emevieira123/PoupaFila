import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { api } from '../services/api';
import { URLS } from '../services/URLS';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function postCreateUser(value: any) {
  return await api
    .post(URLS.USUARIOS, value)
    // .then((resp) => {
    //   console.log(resp);
    //   toast.success('Usuário criado com sucesso!!');
    // })
    .catch((err) => {
      console.log(err.response);
      console.log(err.request);
      if (!value.email || !value.password) {
        toast.error('Erro: E-mail ou Senha não foram preenchidos!');
      } else {
        toast.error('Erro: todos os campos devem ser preenchidos!');
      }
    });
}
