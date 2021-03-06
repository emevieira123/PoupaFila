import React from 'react';
import { useQuery } from 'react-query';
import getListPass from '../queries/getListPass';
import { URLS } from '../services/URLS';

export default function useGetSenhaNormal() {
  const [intervalMs] = React.useState(1000);
  const resultQuery = useQuery([URLS.LISTAR_SENHAS], getListPass, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
    refetchInterval: intervalMs,
  });

  return resultQuery;
}
