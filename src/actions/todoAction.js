export const addTodo = ((taskname) => ({
  type: 'ADD_TODO',
  taskname
}) );
export const deleteTodo = ((taskname) => ({
  type: 'DELETE_TODO',
  taskname
}) );
export const completeTodo = ((taskname) => ({
  type: 'COMPLETE_TODO',
  taskname
}) );
export const selectAll = (() => ({
  type: 'SELECT_ALL'
}));
export const selectAllCancel = (() => ({
  type: 'SELECT_ALL_CANCEL'
}));
export const selectOne = ((taskname) => ({
  type: 'SELECT_ONE',
  taskname
}));
export const deleteSelected = (() => ({
  type: 'DELETE_SELECTED'
}));