/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import {
  loadingHandler,
  removeUser,
  tokenHandler,
  updateLoginState,
} from 'src/redux/auth/action';
import store from 'src/redux/store';
import { RRError } from 'src/types/Api';

export default async function apiCaller<R>({
  request,
  errorHandler = defaultErrorHandler,
}: {
  request: () => Promise<AxiosResponse<R>>;
  errorHandler?: (error: RRError) => void;
}) {
  try {
    store.dispatch(loadingHandler(true));
    const response = await request();
    return response;
  } catch (error: RRError | any) {
    if (error.ec === 419 || error.ec === 420) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('role');
      store.dispatch(removeUser());
      store.dispatch(updateLoginState(false));
      store.dispatch(tokenHandler(true));
    }
    errorHandler(error as RRError);
  } finally {
    store.dispatch(loadingHandler(false));
  }
  return null;
}

function defaultErrorHandler(error: RRError) {
  console.error('An error occurred:', error);
}
