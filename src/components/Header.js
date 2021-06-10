import { Button, Input } from 'antd';
import { useContext, useState } from 'react';
import Store from '../store'
import './Header.css'

function Header() {
  const dispatch = useContext(Store).dispatch;
  // 绑定输入框的值
  const [val, setVal] = useState('');
  function handleChange(e) {
    setVal(e.target.value);
  }
  function handleAddItem() {
    dispatch({type: 'ADD_TODO',taskname: val});
    setVal('');
  }
  return (
    <div className="header">
      <div className="header-left"><Input placeholder="请输入待办事项" className="header-left" onChange={handleChange} value={val}/></div>
      <div className="header-right"><Button type="primary" className="header-right" onClick={handleAddItem}>添加</Button></div>
    </div>
  );
}
export default Header;