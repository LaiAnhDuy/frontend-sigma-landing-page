import { AuthTypes } from 'src/types/Auth';
import { AddUserProps, AuthActionTypes, RemoveUserProps } from './action';

import { Reducer } from 'redux';



const initialState: AuthTypes = {
  token: '',
  user: [],
};

const authReducer: Reducer<AuthTypes, AddUserProps | RemoveUserProps> = (
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