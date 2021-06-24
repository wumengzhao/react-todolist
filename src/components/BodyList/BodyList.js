import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../../container/TodoItem';
import './BodyList.css';

const BodyList = ({ todolist }) => {
  const noDoneList = todolist.filter((item) => !item.is_done);
  const isDoneList = todolist.filter((item) => item.is_done);
  return (
    <div className="bodylist">
      <ul>
        <h3>待办事项</h3>
        {noDoneList.length ? noDoneList.map((item) => <ListItem item={item} key={item.task_id} />) : '暂无...' }
      </ul>
      <ul>
        <h3>已办事项</h3>
        {isDoneList.length ? isDoneList.map((item) => <ListItem item={item} key={item.task_id} />) : '暂无...' }
      </ul>
    </div>
  );
};

// 用于类型检查
BodyList.propTypes = {
  todolist: PropTypes.arrayOf(
    PropTypes.shape({
      task_id: PropTypes.number.isRequired,
      task_name: PropTypes.string.isRequired,
      is_done: PropTypes.bool.isRequired,
      checked: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};
export default BodyList;
