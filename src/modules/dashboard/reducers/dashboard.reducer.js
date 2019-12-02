import { combineReducers } from 'redux';
import home from './home.reducer';

const createRootReducer = combineReducers({
  home,
});

export default createRootReducer;
