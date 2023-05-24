// actions2.ts

import { ProductTypes } from 'src/types/Product'

// Action types for product reducer 2
export enum ProductActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
}

// Action interfaces for reducer 2
export interface AddProductProps {
  type: ProductActionTypes.ADD_PRODUCT
  payload: ProductTypes
}

// Action creators for reducer 2
export const addProduct = (
  payload: AddProductProps['payload'],
): AddProductProps => ({
  type: ProductActionTypes.ADD_PRODUCT,
  payload,
})
