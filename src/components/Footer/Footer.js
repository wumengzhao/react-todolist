import PropTypes from 'prop-types';
import React from 'react';
import { selectAllAPI, cancelSelectAllAPI, deleteSelectedAPI } from '../../api/todo';

const Footer = ({ todolist, getTodolist }) => {
  let count = 0;
  todolist.forEach((item) => { if (item.checked) count += 1; });
  function selectAllItems() {
    selectAllAPI().then((res) => {
      console.log('selectAllAPI', res);
      getTodolist();
    });
  }
  function selectAllItemsCancel() {
    cancelSelectAllAPI().then((res) => {
      console.log('cancelSelectAllAPI', res);
      getTodolist();
    });
  }
  function deleteSelectedItems() {
    deleteSelectedAPI().then((res) => {
      console.log('deleteSelectedAPI', res);
      getTodolist();
    });
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <a onClick={selectAllItems}>
          全选
        </a>
        /
        <span onClick={selectAllItemsCancel}>取消</span>
      </div>
      <div onClick={deleteSelectedItems} style={{ color: '#ff4d4f' }}>删除</div>
      <div>
        已选择
        {count}
        条/共
        { todolist.length }
        条
      </div>
    </div>
  );
};
// 用于类型检查
Footer.propTypes = {
  getTodolist: PropTypes.func.isRequired,
};

export default Footer;
