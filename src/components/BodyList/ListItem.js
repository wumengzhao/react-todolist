import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { deleteTodo, completeTodo, selectOne} from '../../actions/todoAction';
import PropTypes from 'prop-types';

function ListItem(props){
  console.log('ListItem props', props);

  // 完成某个待办事项
  function completeItem(taskname) {
    props.completeTodo(taskname);
  }
  // 删除某个事项
  function deleteItem(taskname) {
    props.deleteTodo(taskname);
  }
  return (    
    <li>
      <div onClick={ () => props.selectOne(props.taskname) }><Input type="checkbox" checked={props.checked} /></div>
      <div>{props.taskname}</div>
      <div>{props.isDone ? '已完成' : '待办'}</div>
      <div>
        <Button danger style={{ 'marginRight': '13px' }} onClick={() => { deleteItem(props.taskname) } }>删除</Button>
        {!props.isDone && <Button type="primary" onClick={ ()=> { completeItem(props.taskname)} }>完成</Button>}
      </div>
    </li>
  );
}

// 用于类型检查
ListItem.propTypes = {
    taskname: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    checked: PropTypes.bool.isRequired,
    selectOne: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
}
// 将store state映射为组件的属性，第二个参数是组件本身自己的属性，在此可以进行处理然后再传入
const mapStateToProps = (state, ownprops) => ({
  taskname: ownprops.item.taskname,
  isDone: ownprops.item.isDone,
  checked: ownprops.item.checked
});
// 将store dispatch映射成组件的属性
const mapDispatchToProps = (dispatch) => ({
  selectOne: (taskname) => dispatch(selectOne(taskname)),
  deleteTodo: (taskname) => dispatch(deleteTodo(taskname)) ,
  completeTodo: (taskname) => dispatch(completeTodo(taskname))
});

// bindActionCreators

ListItem = connect(mapStateToProps, mapDispatchToProps) (ListItem);
export default ListItem;