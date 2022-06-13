// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';
import { api } from '../services/api';
import { URLS } from '../services/URLS';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function postChamarSenha() {
  return await api
    .put(URLS.POST_CHAMAR_SENHA)
    .then((resp) => {
      console.log(resp);
      // toast.success('Usuário criado com sucesso!!');
    })
    .catch((err) => {
      console.log(err.response);
      console.log(err.request);
      // toast.error('Erro: todos os campos devem ser preenchidos!');
    });
}
