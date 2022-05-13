/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from 'react-query';
import { queryClient } from '../pages/_app';
import postCreateUser from '../queries/postCreateUser';
import { URLS } from '../services/URLS';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function useCreateUser(onSuccess: () => void) {
  return useMutation(postCreateUser, {
    onSuccess() {
      queryClient.invalidateQueries(URLS.USUARIOS);

      toast.success('Usuário criado com sucesso!!');

      onSuccess();
    },
    onError(err: any) {
      console.log(err.message);
      // const serverSubtitle: string[] = [];
      // try {
      //   for (const key in err.response.data.errors) {
      //     if (
      //       Object.prototype.hasOwnProperty.call(err.response.data.errors, key)
      //     ) {
      //       const element = err.response.data.errors[key];
      //       if (typeof element === 'object') {
      //         element.forEach((error: string) => serverSubtitle.push(error));
      //       } else if (typeof element === 'string') {
      //         serverSubtitle.push(element);
      //       }
      //     }
      //   }
      // } catch (error) {
      //   console.log(error);
      // }
    },
  });
}
