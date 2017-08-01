import { combineReducers } from 'redux';
import appReducer from './app';

const shopReducers =  combineReducers({
  app: appReducer
});

export default shopReducers;
