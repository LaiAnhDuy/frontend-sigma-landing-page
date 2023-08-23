/* eslint-disable @typescript-eslint/no-explicit-any */
import ENDPOINTS from 'src/constants/endpoints';
import axiosClient from './axiosClient';
import { AxiosResponse } from 'axios';
export const authApi = {
  login: (data: any) => (): Promise<AxiosResponse<any, any>> => {
    return axiosClient.post(ENDPOINTS.LOGIN, data);
  },
  register: (data: any) => (): Promise<AxiosResponse<any, any>> => {
    return axiosClient.post(ENDPOINTS.REGISTER, data);
  },
};
