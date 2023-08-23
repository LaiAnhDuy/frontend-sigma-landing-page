/* eslint-disable @typescript-eslint/no-explicit-any */
import ENDPOINTS from 'src/constants/endpoints';
import axiosClient from './axiosClient';
import { AxiosResponse } from 'axios';

export const resourceApi = {
  getResource: (data: any) => (): Promise<AxiosResponse<any, any>> => {
    return axiosClient.get(ENDPOINTS.RESOURCE, { params: data });
  },
  getBlog: (id: any) => (): Promise<AxiosResponse<any, any>> => {
    return axiosClient.get(ENDPOINTS.BLOG.replace(':id', id));
  },
  removeBlog: (id: any) => (): Promise<AxiosResponse<any, any>> => {
    return axiosClient.delete(ENDPOINTS.BLOG.replace(':id', id));
  },
  postResource: (data: any) => (): Promise<AxiosResponse<any, any>> => {
    return axiosClient.post(ENDPOINTS.RESOURCE, data);
  },
};
