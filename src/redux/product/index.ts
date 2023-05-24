// reducer1.ts

import { Reducer } from 'redux'
import { ActionTypes2 } from './actions'
import { ProductTypes } from 'src/types/Product'

interface State1 {
  // Trạng thái của reducer 1
}

const initialState: State1 = {
  // Trạng thái khởi tạo của reducer 1
}

// eslint-disable-next-line @typescript-eslint/default-param-last
const reducer2: Reducer<State1, ProductTypes> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionTypes2.ADD_PRODUCT:
      // Xử lý action 1 và cập nhật trạng thái
      return state
    // Xử lý các action khác nếu có
    default:
      return state
  }
}

export default reducer2
