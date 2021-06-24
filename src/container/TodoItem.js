import { connect } from 'react-redux';
import { deleteTodo, completeTodo, selectOne } from '../actions/todoAction';
import ListItem from '../components/BodyList/ListItem';

// 将store state映射为组件的属性，第二个参数是组件本身自己的属性，在此可以进行处理然后再传入
const mapStateToProps = (state, ownprops) => ({
  id: ownprops.item.task_id,
  taskname: ownprops.item.task_name,
  isDone: ownprops.item.is_done,
  checked: ownprops.item.checked,
});
// 将store dispatch映射成组件的属性
const mapDispatchToProps = (dispatch) => ({
  selectOneClick: (taskname) => dispatch(selectOne(taskname)),
  deleteTodoClick: (taskname) => dispatch(deleteTodo(taskname)),
  completeTodoClick: (taskname) => dispatch(completeTodo(taskname)),
});

// bindActionCreators

const ListItemNew = connect(mapStateToProps, mapDispatchToProps)(ListItem);
export default ListItemNew;
