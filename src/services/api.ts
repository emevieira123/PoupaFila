import axios from 'axios';
import { parseCookies } from 'nookies';

const { 'nextauth.token': token } = parseCookies();

export const api = axios.create({
  baseURL: 'http://localhost:4000',
  // baseURL: 'https://my-json-server.typicode.com/emevieira/fake-api',
});

api.interceptors.request.use((config) => {
  console.log(config);
  return config;
});

if (token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`;
}
