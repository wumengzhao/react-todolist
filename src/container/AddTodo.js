import { connect } from 'react-redux';
import { getTodolistByAxios } from '../actions/todoAction';
import Header from '../components/Header/Header';

const mapDispatchToProps = (dispatch) => ({
  getTodolist: () => dispatch(getTodolistByAxios()),
});

const AddTodo = connect(null, mapDispatchToProps)(Header);
export default AddTodo;
