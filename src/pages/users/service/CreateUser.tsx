import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CreateUser(value: any) {
  api
    .post('/users/', value)
    .then((resp) => {
      console.log(resp);
      toast.success('Usuário criado com sucesso!!');
    })
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
