import axios from 'axios';

import { API_URL } from '@env';
import { AppError } from '../common/utils/AppError';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.response.use(
  response => response,
  error => {
    //internal error
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    }

    //axios error
    return Promise.reject(error);
  },
);
export { api };
