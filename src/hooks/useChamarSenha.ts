/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from 'react-query';
import { queryClient } from '../pages/_app';
import postChamarSenha from '../queries/postChamarSenha';
import { URLS } from '../services/URLS';

export default function useChamarSenha(onSuccess: () => void) {
  return useMutation(postChamarSenha, {
    onSuccess() {
      queryClient.invalidateQueries(URLS.LISTAR_SENHAS);

      onSuccess();
    },
    onError(err: any) {
      console.log(err.message);
    },
  });
}
