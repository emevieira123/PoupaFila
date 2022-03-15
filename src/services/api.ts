import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:4000',
  // baseURL: 'https://my-json-server.typicode.com/emevieira/fake-api',
});
