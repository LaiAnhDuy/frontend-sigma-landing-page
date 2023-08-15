import axios from 'axios';
import { REACT_APP_BASE_URL } from 'src/configs';
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

// axiosClient.interceptors.request.use(async (config) => {
//     // Handle token here ...
//     return config;
// });
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  },
);
export default axiosClient;
