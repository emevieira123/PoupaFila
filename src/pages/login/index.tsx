import { LoginIMG } from '../../assets/LoginIMG';
import {
  LoginContainer,
  LeftContainer,
  RightContainer,
  InputLogin,
  LabelLogin,
} from './styles';

export default function Login() {
  return (
    <LoginContainer>
      <LeftContainer>
        <h2>LOGIN</h2>
        <LoginIMG />
      </LeftContainer>
      <RightContainer>
        <form action="#">
          <LabelLogin htmlFor="">
            E-mail
            <InputLogin type="text" style={{ marginBottom: '19px' }} />
          </LabelLogin>
          <LabelLogin htmlFor="">
            Senha
            <InputLogin type="password" />
          </LabelLogin>
          <div>
            <label htmlFor="">
              <input type="checkbox" id="horns" name="Lembrar-se" />
              Lembrar-se
            </label>
            <a href="#">Recuperar senha?</a>
          </div>
          <button>Entrar</button>
        </form>
      </RightContainer>
    </LoginContainer>
  );
}
