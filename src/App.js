import React, { useEffect } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { setTodolist } from './actions/todoAction';
import { getAllAPI } from './api/todo';
import AddTodo from './container/AddTodo';
import Todolist from './container/Todolist';
import Footer from './container/Footer';
import reducer from './reducers';
import initialState from './initialState';
import './App.css';

// 从本地缓存中获取state，这样可以保存状态
function usePersistedState(state, key) {
  const persistedContext = localStorage.getItem(key);
  return persistedContext ? JSON.parse(persistedContext) : state;
}

function App() {
  const state = usePersistedState(initialState, 'state');
  const ns = { todo: { todolist: state }, my: state };
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
