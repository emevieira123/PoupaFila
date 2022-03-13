import { Menu } from '../../components/Menu';
import { PassContent } from './components/NextPassContent';
import { NextPassContainer } from './styles';

export default function NextPass() {
  return (
    <NextPassContainer>
      <Menu />
      <PassContent />
    </NextPassContainer>
  );
}
