function todo(state, action) {
  switch (action.type) {
    // 添加待办事项
    case "ADD_TODO":
      if (!action.taskname) {
        return state;
      }
      if (state.find((item) => { return item.taskname === action.taskname })) {
        return state;
      }
      let newState = [{ taskname: action.taskname, isDone: false, checked: false }, ...state];
      console.log('newState', newState);
      return newState;
    // 删除待办事项
    case "DELETE_TODO":
      let res = state.filter((item) => { return item.taskname !== action.taskname });
      return res;
    // 完成待办事项
    case "COMPLETE_TODO":
      let delindex = state.findIndex((item) => { return item.taskname === action.taskname });
      state[delindex].isDone = true;
      return [...state];
    default:
      return state;
  }
}
export default todo;