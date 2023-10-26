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
  createUser: (data: any) => (): Promise<AxiosResponse<any, any>> => {
    return axiosClient.post(ENDPOINTS.CREATE_USER, data);
  },
  updateUser: (id: any) => (): Promise<AxiosResponse<any, any>> => {
    return axiosClient.put(ENDPOINTS.UPDATE_USER, id);
  },
  deleteUser: (id: any) => (): Promise<AxiosResponse<any, any>> => {
    return axiosClient.delete(ENDPOINTS.DELETE_USER.replace(':userId', id));
  },
  getListUser: () => (): Promise<AxiosResponse<any, any>> => {
    return axiosClient.get(ENDPOINTS.GET_LIST_USER);
  },
};
