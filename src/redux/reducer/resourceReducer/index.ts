// reducer1.ts

import { Reducer } from 'redux'
import { Action, ActionTypes } from './actions'

interface State1 {
  // Trạng thái của reducer 1
}

const initialState: State1 = {
  // Trạng thái khởi tạo của reducer 1
}

// eslint-disable-next-line @typescript-eslint/default-param-last
const reducer1: Reducer<State1, Action> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ACTION_1:
      // Xử lý action 1 và cập nhật trạng thái
      return state
    // Xử lý các action khác nếu có
    default:
      return state
  }
}

export default reducer1
