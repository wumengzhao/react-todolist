function myReducer(state, action) {
  switch (action.type) {
    case "MY_TODO":
      console.log('MY_TODO');
      return state[0];
    default:
      return {...state};
  }
}
export default myReducer;