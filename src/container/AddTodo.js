import { connect } from 'react-redux';
import { setTodolist } from '../actions/todoAction';
import Header from '../components/Header/Header';

const mapDispatchToProps = (dispatch) => ({
  setTodolist: (taskname) => dispatch(setTodolist(taskname)),
});

const AddTodo = connect(null, mapDispatchToProps)(Header);
export default AddTodo;
