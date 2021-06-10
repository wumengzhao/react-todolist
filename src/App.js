import BodyList from './components/BodyList'
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import Store from './store';

// 从本地缓存中获取state，这样可以保存状态
function usePersistedContext(store, key) {
  const persistedContext = localStorage.getItem(key);
  return persistedContext ? JSON.parse(persistedContext) : store;
}
// 每次调用dispatch更新state都会更新本地存储
function usePersistedReducer([state, dispatch], key = "state"){
  useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [state]);
  return [state, dispatch];
}

function App() {
  const store = usePersistedContext(useContext(Store), 'state');
  const [state, dispatch] = usePersistedReducer(useReducer(reducer, store), 'state');
  return (
    <div className="app">
      <Store.Provider value={{ state, dispatch }}>
        <Header />
        <BodyList />
        <Footer />
      </Store.Provider>
    </div>
  );
}

export default App;
