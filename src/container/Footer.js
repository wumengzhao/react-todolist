import { connect } from 'react-redux';
import { getTodolistByAxios } from '../actions/todoAction';
import Footer from '../components/Footer/Footer';

const mapStateToProps = (state) => ({
  todolist: state.todo.todolist,
});

const mapDispatchToProps = (dispatch) => ({
  getTodolist: () => dispatch(getTodolistByAxios()),
});

const FooterNew = connect(mapStateToProps, mapDispatchToProps)(Footer);
export default FooterNew;
