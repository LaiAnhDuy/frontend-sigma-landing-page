import { AuthTypes, User } from 'src/types/Auth';
import {
  AddUserProps,
  AuthActionTypes,
  RemoveUserProps,
  UpdateLoginStateProps,
  AddListUserProps,
  TokenProps,
  LoadingProps,
  HideStateProps,
  ShowStateProps,
} from './action';

import { Reducer } from 'redux';

interface AuthState {
  authData: AuthTypes;
  userData: User;
}

const initialState: AuthState = {
  authData: {
    token: '',
    user: [],
    logIn: false,
    tokenExpired: false,
  },
  userData: {
    listUser: [],
    modalOpen: false,
  },
};

const authReducer: Reducer<
  AuthState,
  | AddUserProps
  | RemoveUserProps
  | UpdateLoginStateProps
  | AddListUserProps
  | TokenProps
  | LoadingProps
  | HideStateProps
  | ShowStateProps
> = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action,
) => {
  switch (action.type) {
    case AuthActionTypes.ADD_USER:
      return {
        ...state,
        authData: {
          ...state.authData,
          token: action.payload.token,
          user: action.payload.user,
        },
      };
    case AuthActionTypes.REMOVE_USER:
      return {
        ...state,
        authData: {
          ...state.authData,
          token: '',
          user: [],
          role: '',
        },
      };
    case AuthActionTypes.UPDATE_LOGIN_STATE:
      return {
        ...state,
        authData: {
          ...state.authData,
          logIn: action.payload,
        },
      };
    case AuthActionTypes.ADD_LIST_USER:
      return {
        ...state,
        userData: {
          ...state.userData,
          listUser: action.payload,
        },
      };
    case AuthActionTypes.TOKEN:
      return {
        ...state,
        authData: {
          ...state.authData,
          tokenExpired: action.payload,
        },
      };
    case AuthActionTypes.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case AuthActionTypes.SHOW_MODAL:
      return {
        ...state,
        userData: {
          ...state.userData,
          modalOpen: true,
        },
      };
    case AuthActionTypes.HIDE_MODAL:
      return {
        ...state,
        userData: {
          ...state.userData,
          modalOpen: false,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
