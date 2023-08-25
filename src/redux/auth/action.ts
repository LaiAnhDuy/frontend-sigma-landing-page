// actions2.ts

import { AuthTypes } from 'src/types/Auth';

// Action types for product reducer 2
export enum AuthActionTypes {
  REMOVE_USER = 'REMOVE_USER',
  ADD_USER = 'ADD_USER',
  UPDATE_LOGIN_STATE = 'UPDATE_LOGIN_STATE',
}

// Action interfaces for reducer 2
export interface RemoveUserProps {
  type: AuthActionTypes.REMOVE_USER;
}
export interface AddUserProps {
  type: AuthActionTypes.ADD_USER;
  payload: AuthTypes;
}

export interface UpdateLoginStateProps {
  type: AuthActionTypes.UPDATE_LOGIN_STATE;
  payload: boolean;
}

// Action creators for reducer 2
export const removeUser = (): RemoveUserProps => ({
  type: AuthActionTypes.REMOVE_USER,
});

export const addUser = (payload: AuthTypes): AddUserProps => ({
  type: AuthActionTypes.ADD_USER,
  payload,
});

export const updateLoginState = (
  payload: boolean,
): UpdateLoginStateProps => ({
  type: AuthActionTypes.UPDATE_LOGIN_STATE,
  payload,
});
