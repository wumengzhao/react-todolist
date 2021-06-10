function reducer(state, action){
  switch (action.type) {
    case "ADD_TODO":
      if (!action.taskname) {
        return state;
      }
      // return current state if duplicate
      if (state.find((item) => { return item.taskname === action.taskname })) {
        return state;
      }
      let newState = [{ taskname: action.taskname, isDone: false, checked: false }, ...state];
      console.log('newState', newState);
      return newState;
    case "DELETE_TODO":
      let res = state.filter((item) => {return item.taskname !== action.taskname});
      return res;
    // 完成待办事项
    case "COMPLETE_TODO":
      let delindex = state.findIndex((item) => { return item.taskname === action.taskname });
      state[delindex].isDone = true;
      return [...state];
    // 全选
    case "SELECT_ALL":
      let selectall_state = state.map((item) => { item.checked = true; return item;});
      return selectall_state;
    // 取消全选
    case "SELECT_ALL_CANCEL":
      let selectall_cancel_state = state.map((item) => { item.checked = false; return item; });
      return selectall_cancel_state;
    // 选择其中一个事项
    case "SELECT_ONE":
      let selectIndex = state.findIndex((item) => { return item.taskname === action.taskname });
      state[selectIndex].checked = !state[selectIndex].checked;
      return [...state];
    case "DELETE_SELECTED":
      state = state.filter((item) => { return !item.checked });
      return [...state];
    default:
      return state;
  } 
}
export default reducer;