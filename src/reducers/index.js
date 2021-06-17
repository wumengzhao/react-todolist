import todo from './todo';
import todoChecked from './todoChecked'
import { combineReducers } from 'redux';

const reducers = combineReducers({
  todo,
  todoChecked
});

export default reducers;