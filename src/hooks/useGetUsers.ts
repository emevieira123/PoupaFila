import { useQuery } from 'react-query';
import getUsers from '../queries/getUsers';
import { URLS } from '../services/URLS';

export default function useGetUsers() {
  const resultQuery = useQuery([URLS.USUARIOS], getUsers, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return resultQuery;
}
