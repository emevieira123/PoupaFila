import { HoursContainer } from '../styles';
import useGetHora from '../../../hooks/useGetHora';

export function Hours() {
  const { data } = useGetHora();
  console.log(data);
  return (
    <HoursContainer>
      <h2>{data}</h2>
    </HoursContainer>
  );
}
