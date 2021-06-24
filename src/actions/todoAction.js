import { getAllAPI } from '../api/todo';

export const setTodolist = ((todolist) => ({
  type: 'SET_TODOLIST',
  todolist,
}));
export const addTodo = ((taskname) => ({
  type: 'ADD_TODO',
  taskname,
}));
export const deleteTodo = ((id) => ({
  type: 'DELETE_TODO',
  id,
}));
export const completeTodo = ((id) => ({
  type: 'COMPLETE_TODO',
  id,
}));
export const selectAll = (() => ({
  type: 'SELECT_ALL',
}));
export const selectAllCancel = (() => ({
  type: 'SELECT_ALL_CANCEL',
}));
export const selectOne = ((id) => ({
  type: 'SELECT_ONE',
  id,
}));
export const deleteSelected = (() => ({
  type: 'DELETE_SELECTED',
}));
// 异步action
export function getTodolistByAxios() {
  return (dispatch) => {
    getAllAPI().then((res) => {
      console.log('res.data', res.data);
      dispatch(setTodolist(res.data));
    }).catch((err) => {
      console.log('err', err);
    });
  };
}
