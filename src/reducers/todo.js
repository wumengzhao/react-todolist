function todo(state = null, action) {
  // 有多个reducer时，这个地方的state就是自己对应的state
  console.log('reducer更新-----------------------');
  switch (action.type) {
    case 'SET_TODOLIST':
       return { todolist: action.todolist };
    // 添加待办事项
    case "ADD_TODO":
      if (!action.taskname) {
        return {todolist: [...state.todolist]};
      }
      if (state.todolist.find((item) => { return item.taskname === action.taskname })) {
        return { todolist: [...state.todolist] };
      }
      let newTodolist = [{ task_name: action.taskname, is_done: false, checked: false }, ...state.todolist];
      console.log('newTodolist', newTodolist);
      return {todolist: [...newTodolist]};
    // 删除待办事项
    case "DELETE_TODO":
      let res = state.todolist.filter((item) => { return item.task_id !== action.id });
      return {todolist: [...res]};
    // 完成待办事项
    case "COMPLETE_TODO":
      let delindex = state.todolist.findIndex((item) => { return item.task_id === action.id });
      let completeState = { todolist: [...state.todolist] };
      completeState.todolist[delindex].is_done = true;
      return completeState;
    // 全选
    case "SELECT_ALL":
      let selectall_state = state.todolist.map((item) => { item.checked = true; return item; });
      return { todolist: [...selectall_state] };
    // 取消全选
    case "SELECT_ALL_CANCEL":
      let selectall_cancel_state = state.todolist.map((item) => { item.checked = false; return item; });
      return { todolist: [...selectall_cancel_state] };
    // 选择或者其中一个事项
    case "SELECT_ONE":
      let selectIndex = state.todolist.findIndex((item) => { return item.task_id === action.id });
      let OneSelectedState = { todolist: [...state.todolist] }
      OneSelectedState.todolist[selectIndex].checked = !state.todolist[selectIndex].checked;
      return OneSelectedState;
    // 删除选择的事项
    case "DELETE_SELECTED":
      let deleteSelectedState = { todolist: [...state.todolist] };
      deleteSelectedState.todolist = deleteSelectedState.todolist.filter((item) => { return !item.checked });
      return deleteSelectedState;
    default:
      return state;
  }
}
export default todo;