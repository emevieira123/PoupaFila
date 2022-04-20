import { LoginIMG } from '../../assets/LoginIMG';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {
  LoginContainer,
  LeftContainer,
  RightContainer,
  InputLogin,
  LabelLogin,
} from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  // e: SyntheticEvent
  async function handleSignIn(data) {
    console.log(data);
    try {
      await signIn(data);
    } catch (e) {
      toast.error('Erro: E-mail ou Senha Inválidos!');
    }
  }

  return (
    <LoginContainer>
      <LeftContainer>
        <h2>LOGIN</h2>
        <LoginIMG />
      </LeftContainer>
      <RightContainer>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <LabelLogin htmlFor="">
            E-mail
            <InputLogin
              type="text"
              id="email"
              name="email"
              {...register('email')}
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
              {...register('password')}
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

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </LoginContainer>
  );
}
