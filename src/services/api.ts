import axios from 'axios';
import { parseCookies } from 'nookies';

const { 'nextauth.token': accessToken } = parseCookies();

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  // baseURL: 'https://my-json-server.typicode.com/emevieira/fake-api',
});

// api.interceptors.request.use((config) => {
//   console.log(config);
//   return config;
// });

if (accessToken) {
  api.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
}
