import { combineReducers } from 'redux';
import todo from './todo';
import my from './myReducer';

const reducers = combineReducers({
  todo,
  my,
});

export default reducers;
