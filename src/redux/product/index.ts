// reducer1.ts

import { Reducer } from 'redux'
import { AddProductProps, ProductActionTypes } from './actions'

interface State1 {
  // Trạng thái của reducer 1
}

const initialState: State1 = {
  count: 0,
}

const productReducer: Reducer<State1, AddProductProps> = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ProductActionTypes.ADD_PRODUCT:
      // Xử lý action 1 và cập nhật trạng thái
      return state
    // Xử lý các action khác nếu có
    default:
      return state
  }
}

export default productReducer
