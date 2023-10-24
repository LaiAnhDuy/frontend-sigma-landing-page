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
  createResource: (data: any) => (): Promise<AxiosResponse<any, any>> => {
    return axiosClient.post(ENDPOINTS.RESOURCE, data);
  },
  updateBlog: (id: any, data: any) => (): Promise<AxiosResponse<any, any>> => {
    return axiosClient.put(
      ENDPOINTS.BLOG.replace(':id', id),

      data,
    );
  },
  upFile: (data: any) => (): Promise<AxiosResponse<any, any>> => {
    return axiosClient.post(ENDPOINTS.FILE.replace('/:fileName', ' '), data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  deleteFile: (fileName: any) => (): Promise<AxiosResponse<any, any>> => {
    return axiosClient.delete(ENDPOINTS.FILE.replace(':fileName', fileName));
  },
};
