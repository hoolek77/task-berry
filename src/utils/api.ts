import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://web-production-d582.up.railway.app/',
});
