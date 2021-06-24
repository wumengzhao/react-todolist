import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, message } from 'antd';
import { deleteOneAPI, completeOneAPI, selectOneAPI, cancelSelectOneAPI } from '../../api/todo';

function ListItem({ id, taskname, isDone, checked, selectOneClick, deleteTodoClick, completeTodoClick }) {
  // console.log(id, taskname, isDone, checked, selectOneClick, deleteTodoClick, completeTodoClick);
  // 完成某个待办事项
  function completeItem(tid) {
    completeOneAPI(tid).then((res) => {
      console.log('completeOne', res);
      completeTodoClick(tid);
      message.success(res.msg);
    }).catch((err) => {
      message.err(err);
    });
  }
  // 删除某个事项
  function deleteItem(tid) {
    deleteOneAPI(tid).then((res) => {
      console.log('deleteOne', res);
      deleteTodoClick(tid);
      message.success(res.msg);
    }).catch((err) => {
      message.err(err);
    });
  }
  function selectOneItem(tid, tchecked) {
    if (!tchecked) {
      selectOneAPI(tid).then((res) => {
        console.log('selectOneAPI', res);
        selectOneClick(tid);
      });
    } else {
      cancelSelectOneAPI(id).then((res) => {
        console.log('cancelSelectOneAPI', res);
        selectOneClick(tid);
      });
    }
  }
  return (
    <li>
      <div>{id}</div>
      <div onClick={() => selectOneItem(id, checked)}><Input type="checkbox" checked={checked} /></div>
      <div>{ taskname }</div>
      <div>{ isDone ? '已完成' : '待办' }</div>
      <div>
        <Button danger style={{ marginRight: '13px' }} onClick={() => { deleteItem(id); }}>删除</Button>
        {!isDone && <Button type="primary" onClick={() => { completeItem(id); }}>完成</Button> }
      </div>
    </li>
  );
}

// 用于类型检查
ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  taskname: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired,
  selectOneClick: PropTypes.func.isRequired,
  deleteTodoClick: PropTypes.func.isRequired,
  completeTodoClick: PropTypes.func.isRequired,
};
export default ListItem;
