export const addTodo = (() => {
  type: 'SELECT_ALL'
});
export const deleteTodo = (() => {
  type: 'SELECT_ALL_CANCEL'
  taskname
});
export const completeTodo = ((taskname) => {
  type: 'SELECT_ONE'
  taskname
});
export const completeTodo = ((taskname) => {
  type: 'DELETE_SELECTED'
  taskname
});