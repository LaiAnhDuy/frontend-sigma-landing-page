import {
  AddTokenProps,
  AuthActionTypes,
  RemoveTokenProps,
} from './auth-action';
// reducer1.ts

import { Reducer } from 'redux';

interface State1 {
  token: string;
  firstName: string;
}

const initialState: State1 = {
  token: '',
  firstName: '',
};

const productReducer: Reducer<State1, AddTokenProps | RemoveTokenProps> = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action,
) => {
  switch (action.type) {
    case AuthActionTypes.ADD_TOKEN:
      return {
        ...state,
        token: action.payload.token,
        firstName: action.payload.firstName,
      };
    case AuthActionTypes.REMOVE_TOKEN:
      return {
        ...state,
        token: '',
        firstName: '',
      };
    default:
      return state;
  }
};

export default productReducer;
