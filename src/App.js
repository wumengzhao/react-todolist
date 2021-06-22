import BodyList from './components/BodyList/BodyList'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.css';
import { useEffect } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers';
import initialState from './initialState';

// 从本地缓存中获取state，这样可以保存状态
function usePersistedState(state, key) {
  const persistedContext = localStorage.getItem(key);
  return persistedContext ? JSON.parse(persistedContext) : state;
}
// 每次调用dispatch更新state都会更新本地存储,但这个里面不会被执行到
function usePersistedReducer(store, key = "state"){
  console.log('reducer 更新');
  useEffect(() => localStorage.setItem(key, JSON.stringify(store.getState().todo.todolist)));
  return store;
}

function App() {
  const state = usePersistedState(initialState, 'state');
  const ns = { todo: { todolist: state }, my: state};
  console.log('ns', ns);
  // 每次不更新父组件，只更新子组件，此处不会重新执行
  const store = usePersistedReducer(createStore(reducer,ns), 'state');
  console.log('store', store.getState());
  return (
    <div className="app">
      <Provider store={ store }>
        <Header />
        <BodyList />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
