/* eslint-disable @typescript-eslint/no-throw-literal */
import axios from 'axios';
import { REACT_APP_BASE_URL } from 'src/configs';
import { RRError } from 'src/types/Api';
const token = localStorage.getItem('token');
const axiosClient = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    'content-type': 'application/json',
    common: {
      Authorization: `Bearer ${token}`,
    },
  },
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    if (error.response) {
      const { ec, msg } = error.response.data;
      const userError: RRError = { ec, msg };
      throw userError;
    } else if (error.request) {
      console.error('Request error: No response received');
    } else {
      console.error('Unknown error:', error.message);
    }
  },
);
export default axiosClient;
