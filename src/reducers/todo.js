function todo(state, action) {
  // 有多个reducer时，这个地方的state就是自己对应的state
  console.log('reducer state', state);
  switch (action.type) {
    // 添加待办事项
    case "ADD_TODO":
      if (!action.taskname) {
        return state;
      }
      if (state.todolist.find((item) => { return item.taskname === action.taskname })) {
        return state;
      }
      let newTodolist = [{ taskname: action.taskname, isDone: false, checked: false }, ...state.todolist];
      return {todolist: newTodolist};
    // 删除待办事项
    case "DELETE_TODO":
      let res = state.filter((item) => { return item.taskname !== action.taskname });
      return res;
    // 完成待办事项
    case "COMPLETE_TODO":
      let delindex = state.findIndex((item) => { return item.taskname === action.taskname });
      state[delindex].isDone = true;
      return [...state];
    // 全选
    case "SELECT_ALL":
      let selectall_state = state.map((item) => { item.checked = true; return item; });
      return selectall_state;
    // 取消全选
    case "SELECT_ALL_CANCEL":
      let selectall_cancel_state = state.map((item) => { item.checked = false; return item; });
      return selectall_cancel_state;
    // 选择其中一个事项
    case "SELECT_ONE":
      let selectIndex = state.todolist.findIndex((item) => { return item.taskname === action.taskname });
      state.todolist[selectIndex].checked = !state.todolist[selectIndex].checked;
      return {todolist: [...state.todolist]};
    // 取消选择的事项
    case "DELETE_SELECTED":
      state = state.filter((item) => { return !item.checked });
      return state;
    default:
      return {...state};
  }
}
export default todo;