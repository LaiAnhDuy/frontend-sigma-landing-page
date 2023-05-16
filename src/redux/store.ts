import { createStore } from 'redux';
import { counterReducer } from './reducer/reducer';

const store = createStore(counterReducer);

export default store;
