import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import app from './app.reducer';
import dashboard from '../modules/dashboard/reducers/dashboard.reducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  app,
  dashboard,
});

export default createRootReducer;
