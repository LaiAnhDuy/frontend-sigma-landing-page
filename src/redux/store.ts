import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import productReducer from './product'

const rootReducer = combineReducers({
  productReducer,
  // Thêm các reducer khác vào đây
})
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store
