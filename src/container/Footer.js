import { connect } from 'react-redux';
import { selectAll, selectAllCancel, deleteSelected } from '../actions/todoAction';
import Footer from '../components/Footer/Footer';

const mapStateToProps = (state) => ({
  todolist: state.todo.todolist,
});

const mapDispatchToProps = (dispatch) => ({
  selectAllClick: () => dispatch(selectAll()),
  selectAllCancelClick: () => dispatch(selectAllCancel()),
  deleteSelectedClick: () => dispatch(deleteSelected()),
});

const FooterNew = connect(mapStateToProps, mapDispatchToProps)(Footer);
export default FooterNew;
