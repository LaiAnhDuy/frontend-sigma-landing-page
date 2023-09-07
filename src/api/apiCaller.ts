import { AxiosResponse } from 'axios';
import { RRError } from 'src/types/Api';

export default async function apiCaller<R>({
  request,
  errorHandler = defaultErrorHandler,
}: {
  request: () => Promise<AxiosResponse<R>>;
  errorHandler?: (error: RRError) => void;
}) {
  try {
    const response = await request();
    return response;
  } catch (error) {
    errorHandler(error as RRError);
  }
  return null;
}

function defaultErrorHandler(error: RRError) {
  console.error('An error occurred:', error);
  
}
