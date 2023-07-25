import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './product';
import authReducer from './auth';
import resourceReducer from './resource';

const rootReducer = combineReducers({
  productReducer,
  authReducer,
  resourceReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
