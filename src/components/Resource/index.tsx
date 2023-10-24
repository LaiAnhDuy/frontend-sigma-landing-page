/* eslint-disable @typescript-eslint/no-explicit-any */
import apiCaller from 'src/api/apiCaller';
import { resourceApi } from 'src/api/resource-api';
import { categoryMappings } from 'src/constants';
import { RRError } from 'src/types/Api';
import { ResourceProps } from 'src/types/Resource';

export const resourcesRequest = async ({
  page,
  value,
  setTotalPages,
  dispatchAddResource,
  limitPerPage,
}: ResourceProps) => {
  const data = {
    category: categoryMappings[value] || value,
    limitPerPage: limitPerPage,
    page: page,
  };
  const errorHandler = (error: RRError) => {
    console.log('Fail: ', error);
  };
  const response = await apiCaller({
    request: resourceApi.getResource(data),
    errorHandler,
  });
  if (response) {
    dispatchAddResource(response.data);

    setTotalPages(response.data.totalPages);
  }
};
