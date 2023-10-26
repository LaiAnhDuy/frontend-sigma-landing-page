// actions2.ts

import { AuthTypes } from 'src/types/Auth';

// Action types for product reducer 2
export enum AuthActionTypes {
  REMOVE_USER = 'REMOVE_USER',
  ADD_USER = 'ADD_USER',
  UPDATE_LOGIN_STATE = 'UPDATE_LOGIN_STATE',
  ADD_LIST_USER = 'ADD_LIST_USER',
  TOKEN = 'TOKEN',
  LOADING = 'LOADING',
  HIDE_MODAL = 'HIDE_MODAL',
  SHOW_MODAL = 'SHOW_MODAL',
}

// Action interfaces for reducer 2
export interface RemoveUserProps {
  type: AuthActionTypes.REMOVE_USER;
}
export interface TokenProps {
  type: AuthActionTypes.TOKEN;
  payload: boolean;
}
export interface AddUserProps {
  type: AuthActionTypes.ADD_USER;
  payload: AuthTypes;
}

export interface AddListUserProps {
  type: AuthActionTypes.ADD_LIST_USER;
  payload: string[];
}
export interface UpdateLoginStateProps {
  type: AuthActionTypes.UPDATE_LOGIN_STATE;
  payload: boolean;
}

export interface LoadingProps {
  type: AuthActionTypes.LOADING;
  payload: boolean;
}

export interface HideStateProps {
  type: AuthActionTypes.HIDE_MODAL;
}

export interface ShowStateProps {
  type: AuthActionTypes.SHOW_MODAL;
}
// Action creators for reducer 2
export const removeUser = (): RemoveUserProps => ({
  type: AuthActionTypes.REMOVE_USER,
});

export const addUser = (payload: AuthTypes): AddUserProps => ({
  type: AuthActionTypes.ADD_USER,
  payload,
});
export const addListUser = (payload: string[]): AddListUserProps => ({
  type: AuthActionTypes.ADD_LIST_USER,
  payload,
});
export const updateLoginState = (payload: boolean): UpdateLoginStateProps => ({
  type: AuthActionTypes.UPDATE_LOGIN_STATE,
  payload,
});

export const tokenHandler = (payload: boolean): TokenProps => ({
  type: AuthActionTypes.TOKEN,
  payload,
});

export const loadingHandler = (payload: boolean): LoadingProps => ({
  type: AuthActionTypes.LOADING,
  payload,
});
export const hideModal = (): HideStateProps => ({
  type: AuthActionTypes.HIDE_MODAL,
});
export const showModal = (): ShowStateProps => ({
  type: AuthActionTypes.SHOW_MODAL,
});
