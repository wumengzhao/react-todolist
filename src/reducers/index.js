import todo from './todo';
import my from './myReducer'
import { combineReducers } from 'redux';

const reducers = combineReducers({
  todo,
  my
});

export default reducers;