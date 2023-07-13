/* eslint-disable @typescript-eslint/no-explicit-any */
import ENDPOINTS from 'src/constants/endpoints';
import axiosClient from './axiosClient';

export const freeTrialApi = {
  freeTrial: (data: any) => {
    return axiosClient.post(ENDPOINTS.FREE_TRIAL, data);
  },
};