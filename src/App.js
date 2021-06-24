import React, { useEffect } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { setTodolist } from './actions/todoAction';
import { getAllAPI } from './api/todo';
import AddTodo from './container/AddTodo';
import Todolist from './container/TodoList';
import Footer from './container/Footer';
import reducer from './reducers';
import initialState from './initialState';
import './App.css';

function App() {
  const ns = { todo: { todolist: initialState }, my: state };
  // 调用diapstch父组件不会重新执行，所以这个地方并不能更新本地存储
  const store = createStore(reducer, ns);
  console.log('store', store.getState());
  useEffect(() => {
    getAllAPI().then((res) => {
      store.dispatch(setTodolist(res.data));
    });
  });
  return (
    <div className="app">
      <Provider store={store}>
        <AddTodo />
        <Todolist />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
