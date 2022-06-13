import React from 'react';
import { useQuery } from 'react-query';
import getHora, { Hora } from '../queries/getHora';

export default function useGetHora() {
  const [intervalMs] = React.useState(1000 * 60);
  const resultQuery = useQuery([Hora], getHora, {
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
