export const addTodo = ((taskname) => {
  type: 'ADD_TODO'
  taskname
});
export const deleteTodo = ((taskname) => {
  type: 'DELETE_TODO'
  taskname
});
export const completeTodo = ((taskname) => {
  type: 'COMPLETE_TODO'
  taskname
});