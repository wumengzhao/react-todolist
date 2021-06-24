import PropTypes from 'prop-types';
import { Button, Input, message } from 'antd';
import React, { useState } from 'react';
import './Header.css';
import { addOneAPI } from '../../api/todo';

const Header = ({ getTodolist }) => {
  // 绑定输入框的值
  const [val, setVal] = useState('');
  function handleChange(e) {
    setVal(e.target.value);
  }
  function handleAddItem() {
    addOneAPI(val).then((res) => {
      console.log('addOne res', res);
      getTodolist();
      setVal('');
      message.success(res.msg);
    }).catch((err) => {
      message.err(err);
    });
  }
  return (
    <div className="header">
      <div className="header-left"><Input placeholder="请输入待办事项" className="header-left" onChange={handleChange} value={val} /></div>
      <div className="header-right"><Button type="primary" className="header-right" onClick={handleAddItem}>添加</Button></div>
    </div>
  );
};
// 用于类型检查
Header.propTypes = {
  getTodolist: PropTypes.func.isRequired,
};

export default Header;
