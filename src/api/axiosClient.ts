import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
});

// axiosClient.interceptors.request.use(async (config) => {
//     // Handle token here ...
//     return config;
// });

export default axiosClient;
