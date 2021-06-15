import { useContext } from 'react';
import Store from '../store'
import './BodyList.css'
import { Input, Button, Popconfirm, message } from 'antd';

function List(props) {
  const dispatch = useContext(Store).dispatch;
  function confirm() {
     message.info('删除成功');
  }
  return (
    <div>
      <h3>{props.title}</h3>
      { props.list.length === 0 ? <p>暂无...</p> : ''}
      <ul>
        {props.list.map((item) => {
          return (
            <li key={item.taskname}>
              <div onClick={() => dispatch({ type: 'SELECT_ONE', taskname: item.taskname })}><Input type="checkbox" checked={item.checked}/></div>
              <div>{item.taskname}</div>
              <div>{item.isDone ? '已完成' : '待办'}</div>
              <div>
                   <Button danger style={{ 'marginRight': '13px' }} onClick={() => dispatch({ type: 'DELETE_TODO', taskname: item.taskname })}>删除</Button>
                { !item.isDone && <Button type="primary" onClick={() => dispatch({ type: 'COMPLETE_TODO', taskname: item.taskname })}>完成</Button>}
              </div>
            </li>)
        })}
      </ul>
    </div>
  );
}

function BodyList() {
  const todolist = useContext(Store).state;
  const isDoneList = todolist.filter((item) => { return item.isDone; })
  const noDoneList = todolist.filter((item) => { return !item.isDone; })
  return (
    <div className="bodylist">
      <List list={noDoneList} title="待办事项"></List>
      <List list={isDoneList} title="已办事项"></List>
    </div>
  );
}
export default BodyList;