// actions2.ts

import { AuthTypes } from "src/types/Auth"


// Action types for product reducer 2
export enum AuthActionTypes {
  REMOVE_TOKEN='REMOVE_TOKEN',
  ADD_TOKEN='ADD_TOKEN',

}

// Action interfaces for reducer 2
export interface RemoveTokenProps {
  type: AuthActionTypes.REMOVE_TOKEN
  payload: AuthTypes
}
export interface AddTokenProps {
  type: AuthActionTypes.ADD_TOKEN
  payload: AuthTypes
}


// Action creators for reducer 2
export const removeToken = (
  payload: RemoveTokenProps['payload'],
): RemoveTokenProps => ({
  type: AuthActionTypes.REMOVE_TOKEN,
  payload,
})

export const addToken = (
  payload: AddTokenProps['payload'],
): AddTokenProps => ({
  type: AuthActionTypes.ADD_TOKEN,
  payload,
})

