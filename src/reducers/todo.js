function todo(state = { todolist: [] }, action) {
  // 有多个reducer时，这个地方的state就是自己对应的state
  console.log('reducer更新-----------------------');
  switch (action.type) {
    case 'SET_TODOLIST':
      return { todolist: action.todolist };
    // 添加待办事项
    case "ADD_TODO": {
      if (!action.taskname) {
        return { todolist: [...state.todolist] };
      }
      if (state.todolist.find((item) => item.taskname === action.taskname)) {
        return { todolist: [...state.todolist] };
      }
      const newTodolist = [{ task_name: action.taskname, is_done: false, checked: false }, ...state.todolist];
      console.log('newTodolist', newTodolist);
      return { todolist: [...newTodolist] };
    }
    // 删除待办事项
    case "DELETE_TODO": {
      const res = state.todolist.filter((item) => item.task_id !== action.id);
      return { todolist: [...res] };
    }
    // 完成待办事项
    case "COMPLETE_TODO": {
      const delindex = state.todolist.findIndex((item) => item.task_id === action.id);
      const completeState = { todolist: [...state.todolist] };
      completeState.todolist[delindex].is_done = true;
      return completeState;
    }
    // 全选
    case "SELECT_ALL": {
      const selectAllState = state.todolist.map((item) => { item.checked = true; return item; });
      return { todolist: [...selectAllState] };
    }
    // 取消全选
    case "SELECT_ALL_CANCEL": {
      const selectAllCancelState = state.todolist.map((item) => { item.checked = false; return item; });
      return { todolist: [...selectAllCancelState] };
    }
    // 选择或者其中一个事项
    case "SELECT_ONE": {
      const selectIndex = state.todolist.findIndex((item) => item.task_id === action.id);
      const OneSelectedState = { todolist: [...state.todolist] };
      OneSelectedState.todolist[selectIndex].checked = !state.todolist[selectIndex].checked;
      return OneSelectedState;
    }
    // 删除选择的事项
    case "DELETE_SELECTED": {
      const deleteSelectedState = { todolist: [...state.todolist] };
      deleteSelectedState.todolist = deleteSelectedState.todolist.filter((item) => !item.checked);
      return deleteSelectedState;
    }
    default:
      return state;
  }
}
export default todo;
