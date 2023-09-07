/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { message } from 'antd';
import axios, { AxiosError } from 'axios';
import { REACT_APP_BASE_URL } from 'src/configs';
import { RRError } from 'src/types/Api';
import CustomError from 'src/utils/CustomError';

const axiosClient = axios.create({
  baseURL: REACT_APP_BASE_URL,
});
axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error: AxiosError) => {
    if (!error.response) {
      console.error('Unknown error:', error.message);
      message.error('Disconnected network !');
      return;
    }

    const { status, data } = error.response;
    if (status >= 500) {
      // TODO: Show server error message
    } else if (400 <= status && status < 500) {
      throw new CustomError(data as RRError);
    }
  },
);
export default axiosClient;
