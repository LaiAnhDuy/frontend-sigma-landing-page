/* eslint-disable @typescript-eslint/no-explicit-any */
import ENDPOINTS from 'src/constants/endpoints';
import axiosClient from './axiosClient';
export const authApi = {
  login: (data: any) => {
    return axiosClient.post(ENDPOINTS.LOGIN, data);
  },
};