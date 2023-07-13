/* eslint-disable @typescript-eslint/no-explicit-any */
import ENDPOINTS from 'src/constants/endpoints';
import axiosClient from './axiosClient';
import { AxiosResponse } from 'axios';
export const authApi = {
  login: (
    data: any,
    errorHandler: (error: any) => void,
  ): Promise<AxiosResponse<any, any>> => {
    try {
      return axiosClient.post(ENDPOINTS.LOGIN, data);
    } catch (error) {
      errorHandler && errorHandler(error);
      return Promise.reject(error);
    }
  },
  register: (
    data: any,
    errorHandler: (error: any) => void,
  ): Promise<AxiosResponse<any, any>> => {
    try {
      return axiosClient.post(ENDPOINTS.REGISTER, data);
    } catch (error) {
      errorHandler && errorHandler(error);
      return Promise.reject(error);
    }
  },


};
