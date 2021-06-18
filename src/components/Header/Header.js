import { Button, Input } from 'antd';
import { useState } from 'react';
import { connect } from 'react-redux'
import { addTodo} from '../../actions/todoAction'
import './Header.css'

function Header(props) {
  // 绑定输入框的值
  const [val, setVal] = useState('');
  function handleChange(e) {
    setVal(e.target.value);
  }
  function handleAddItem() {
    props.addTodo(val);
    setVal('');
  }
  return (
    <div className="header">
      <div className="header-left"><Input placeholder="请输入待办事项" className="header-left" onChange={ handleChange } value={val}/></div>
      <div className="header-right"><Button type="primary" className="header-right" onClick={ handleAddItem }>添加</Button></div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  addTodo: (taskname) => dispatch(addTodo(taskname))
});

Header = connect(null, mapDispatchToProps)(Header);
export default Header;