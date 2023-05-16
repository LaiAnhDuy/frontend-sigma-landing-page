import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer1 from './reducer/resourceReducer/reducer'
import reducer2 from './reducer/productReducer/reducer'

const rootReducer = combineReducers({
  reducer1,
  reducer2,
  // Thêm các reducer khác vào đây
})
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store
