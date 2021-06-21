function todo(state = null, action) {
  // 有多个reducer时，这个地方的state就是自己对应的state
  console.log('reducer state', state);
  switch (action.type) {
    // 添加待办事项
    case "ADD_TODO":
      if (!action.taskname) {
        return {todolist: [...state.todolist]};
      }
      if (state.todolist.find((item) => { return item.taskname === action.taskname })) {
        return { todolist: [...state.todolist] };
      }
      let newTodolist = [{ taskname: action.taskname, isDone: false, checked: false }, ...state.todolist];
      console.log('newTodolist', newTodolist);
      return {todolist: [...newTodolist]};
    // 删除待办事项
    case "DELETE_TODO":
      let res = state.todolist.filter((item) => { return item.taskname !== action.taskname });
      return {todolist: [...res]};
    // 完成待办事项
    case "COMPLETE_TODO":
      console.log('state', state);
      let delindex = state.todolist.findIndex((item) => { return item.taskname === action.taskname });
      let completeState = { todolist: [...state.todolist] };
      completeState.todolist[delindex].isDone = true;
      return completeState;
    // 全选
    case "SELECT_ALL":
      let selectall_state = state.todolist.map((item) => { item.checked = true; return item; });
      return { todolist: [...selectall_state] };
    // 取消全选
    case "SELECT_ALL_CANCEL":
      let selectall_cancel_state = state.todolist.map((item) => { item.checked = false; return item; });
      return { todolist: [...selectall_cancel_state] };
    // 选择其中一个事项
    case "SELECT_ONE":
      let selectIndex = state.todolist.findIndex((item) => { return item.taskname === action.taskname });
      let OneSelectedState = { todolist: [...state.todolist] }
      OneSelectedState.todolist[selectIndex].checked = !state.todolist[selectIndex].checked;
      return OneSelectedState;
    // 取消选择的事项
    case "DELETE_SELECTED":
      let CancelOneSelectedState = { todolist: [...state.todolist] };
      CancelOneSelectedState.todolist = CancelOneSelectedState.todolist.filter((item) => { return !item.checked });
      return CancelOneSelectedState;
    default:
      return state;
  }
}
export default todo;