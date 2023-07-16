import { AddUserProps, AuthActionTypes, RemoveUserProps } from './action';

import { Reducer } from 'redux';

export interface AuthState {
  token: string;
  user: string[];
}

const initialState: AuthState = {
  token: '',
  user: [],
};

const authReducer: Reducer<AuthState, AddUserProps | RemoveUserProps> = (
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
      };
    case AuthActionTypes.REMOVE_USER:
      return {
        ...state,
        token: '',
        user: [],
      };
    default:
      return state;
  }
};

export default  authReducer;
