/* eslint-disable @typescript-eslint/no-explicit-any */
import ENDPOINTS from 'src/constants/endpoints';
import axiosClient from './axiosClient';
import { AxiosResponse } from 'axios';

export const resourceApi = {
  getResource: (
    data: any,
    errorHandler: (error: any) => void,
  ): Promise<AxiosResponse<any, any>> => {
    try {
      return axiosClient.get(ENDPOINTS.RESOURCE, { params: data });
    } catch (error) {
      errorHandler && errorHandler(error);
      return Promise.reject(error);
    }
  },
  getBlog: (
    id:any,
    errorHandler: (error: any) => void,
  ): Promise<AxiosResponse<any, any>> => {
    try {
      return axiosClient.get(ENDPOINTS.BLOG.replace(':id', id));
    } catch (error) {
      errorHandler && errorHandler(error);
      return Promise.reject(error);
    }
  },
  removeBlog: (
    id:any,
    errorHandler: (error: any) => void,
  ): Promise<AxiosResponse<any, any>> => {
    try {
      return axiosClient.delete(ENDPOINTS.BLOG.replace(':id', id));
    } catch (error) {
      errorHandler && errorHandler(error);
      return Promise.reject(error);
    }
  },
  postResource: (
    data: any,
    errorHandler: (error: any) => void,
  ): Promise<AxiosResponse<any, any>> => {
    try {
      return axiosClient.post(ENDPOINTS.RESOURCE, data);
    } catch (error) {
      errorHandler && errorHandler(error);
      return Promise.reject(error);
    }
  },
};
