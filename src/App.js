import React, { useEffect } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { setTodolist } from './actions/todoAction';
import { getAllAPI } from './api/todo';
import AddTodo from './container/AddTodo';
import Todolist from './container/TodoList';
import Footer from './container/Footer';
import reducer from './reducers';
import './App.css';

function App() {
  // 使用react-thunk实现异步action，异步action是一个函数，不是一个对象。
  const store = createStore(reducer, applyMiddleware(thunk));
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
