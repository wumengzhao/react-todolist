function todoChecked(state, action) {
  switch (action.type) {
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
      let selectIndex = state.findIndex((item) => { return item.taskname === action.taskname });
      state[selectIndex].checked = !state[selectIndex].checked;
      return [...state];
    // 取消选择的事项
    case "DELETE_SELECTED":
      state = state.filter((item) => { return !item.checked });
      return state;
    default:
      return state;
  }
}
export default todoChecked;