/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from './axiosClient';

export const authApi = {
  login: (data: any) => {
    const url = '/login';
    return axiosClient.post(url, data);
  },
};
