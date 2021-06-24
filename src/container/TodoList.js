import { connect } from 'react-redux';
import BodyList from '../components/BodyList/BodyList';

// 将state映射为当前组件的属性
const mapStateToProps = (state) => ({
  todolist: state.todo.todolist,
});

const Todolist = connect(mapStateToProps)(BodyList);
export default Todolist;
