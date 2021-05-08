import axios from 'axios';
import { COOKIE_TOKEN } from 'constants/api';

import { getCookieValue } from './cookies';

export const api = axios.create({
  baseURL: 'https://task-berry.herokuapp.com/',
  headers: {
    Authorization: `bearer ${getCookieValue(COOKIE_TOKEN)}`,
  },
});
