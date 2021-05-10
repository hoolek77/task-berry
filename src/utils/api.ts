import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://task-berry.herokuapp.com/',
});
