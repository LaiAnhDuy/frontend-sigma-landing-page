import { AuthTypes } from 'src/types/Auth';
import {
  AddUserProps,
  AuthActionTypes,
  RemoveUserProps,
  UpdateLoginStateProps,
} from './action';

import { Reducer } from 'redux';

const initialState: AuthTypes = {
  token: '',
  user: [],
  role: '',
  logIn: false,
};

const authReducer: Reducer<
  AuthTypes,
  AddUserProps | RemoveUserProps | UpdateLoginStateProps
> = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action,
) => {
  switch (action.type) {
    case AuthActionTypes.ADD_USER:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        role: action.payload.role,
      };
    case AuthActionTypes.REMOVE_USER:
      return {
        ...state,
        token: '',
        user: [],
        role: '',
      };
    case AuthActionTypes.UPDATE_LOGIN_STATE:
      return {
        ...state,
        logIn: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
