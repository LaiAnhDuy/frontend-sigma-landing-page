// reducer1.ts

import { Reducer } from 'redux';
import { AddProductProps, ProductActionTypes } from './actions';

interface ProductState {
  // Trạng thái của reducer 1
}

const initialState: ProductState = {};

const productReducer: Reducer<ProductState, AddProductProps> = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ProductActionTypes.ADD_PRODUCT:
      // Xử lý action 1 và cập nhật trạng thái
      return state;
    // Xử lý các action khác nếu có
    default:
      return state;
  }
};

export default productReducer;
