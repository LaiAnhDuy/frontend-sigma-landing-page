import axios from 'axios';
import { REACT_APP_BASE_URL } from 'src/configs';
const axiosClient = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
});

// axiosClient.interceptors.request.use(async (config) => {
//     // Handle token here ...
//     return config;
// });

export default axiosClient;
