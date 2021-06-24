import { connect } from 'react-redux';
import { addTodo } from '../actions/todoAction';
import Header from '../components/Header/Header';

const mapDispatchToProps = (dispatch) => ({
  addTodoClick: (taskname) => dispatch(addTodo(taskname)),
});

const AddTodo = connect(null, mapDispatchToProps)(Header);
export default AddTodo;
