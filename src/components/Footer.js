import Store from '../store'
import { useContext } from "react";

function Footer() {
  const todolist = useContext(Store).state;
  const dispatch = useContext(Store).dispatch;
  let count = 0;
  todolist.forEach((item) => { if(item.checked) count++; })
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div>
        <a onClick={() => { dispatch({ type: 'SELECT_ALL'}) }}>全选</a>
        /<span onClick={() => { dispatch({ type: 'SELECT_ALL_CANCEL' }) }}>取消</span>
      </div>
      <div onClick={() => { dispatch({ type: 'DELETE_SELECTED' }) }} style={{ color: '#ff4d4f'}}>删除</div>
      <div>已选择{count}条 /共{todolist.length}条</div>
    </div>
  );
}
export default Footer;