import { Button, Input, message } from 'antd';
import { useState } from 'react';
import { connect } from 'react-redux'
import { addTodo} from '../../actions/todoAction'
import './Header.css'
import PropTypes from 'prop-types';
import { addOneAPI } from '../../api/todo'

function Header(props) {
  // 绑定输入框的值
  const [val, setVal] = useState('');
  function handleChange(e) {
    setVal(e.target.value);
  }
  function handleAddItem() {
    addOneAPI(val).then((res)=>{
      console.log('addOne res', res);
      props.addTodo(val);
      setVal('');
      message.success(res.msg);
    }).catch((err) => {
      message.err(err);
    })
  }
  return (
    <div className="header">
      <div className="header-left"><Input placeholder="请输入待办事项" className="header-left" onChange={ handleChange } value={val}/></div>
      <div className="header-right"><Button type="primary" className="header-right" onClick={ handleAddItem }>添加</Button></div>
    </div>
  );
}
// 用于类型检查
Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (taskname) => dispatch(addTodo(taskname))
});

Header = connect(null, mapDispatchToProps)(Header);
export default Header;