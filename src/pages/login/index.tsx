import { SyntheticEvent, useState } from 'react';
import { LoginIMG } from '../../assets/LoginIMG';
import { api } from '../../services/api';
import { URLS } from '../../services/URLS';
import {
  LoginContainer,
  LeftContainer,
  RightContainer,
  InputLogin,
  LabelLogin,
} from './styles';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSignIn = async (e: SyntheticEvent) => {
    e.preventDefault();

    //http://localhost:4000/login
    await api.post(URLS.LOGIN, JSON.stringify({ email, password }), {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    await router.push(URLS.CHAMAR_SENHA);
  };

  return (
    <LoginContainer>
      <LeftContainer>
        <h2>LOGIN</h2>
        <LoginIMG />
      </LeftContainer>
      <RightContainer>
        <form onSubmit={handleSignIn}>
          <LabelLogin htmlFor="">
            E-mail
            <InputLogin
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: '19px' }}
              required={true}
            />
          </LabelLogin>
          <LabelLogin htmlFor="">
            Senha
            <InputLogin
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
          </LabelLogin>
          <div>
            <label htmlFor="">
              <input type="checkbox" id="horns" name="Lembrar-se" />
              Lembrar-se
            </label>
            <a href="#">Recuperar senha?</a>
          </div>
          <button type="submit">Entrar</button>
        </form>
      </RightContainer>
    </LoginContainer>
  );
}
