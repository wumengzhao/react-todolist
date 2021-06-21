import './BodyList.css';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';  

function BodyList(props){
  console.log('BodyList props', props);
  const noDoneList = props.todolist.filter((item) => { return !item.isDone });
  const isDoneList = props.todolist.filter((item) => { return item.isDone });
  return (
    <div className="bodylist">
      <ul>
        <h3>待办事项</h3>
        {noDoneList.length ? noDoneList.map((item) => { return <ListItem item={item} key={item.taskname} />} ) : '暂无...'}
      </ul>
      <ul>
        <h3>已办事项</h3>
        {isDoneList.length ? isDoneList.map((item) => { return <ListItem item={item} key={item.taskname} /> }) : '暂无...'}
      </ul>
    </div>
  );
}
// 用于类型检查
BodyList.propTypes = {
  todolist: PropTypes.arrayOf(PropTypes.shape({
      taskname: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
      checked: PropTypes.bool.isRequired
  }).isRequired).isRequired
}

// 将state映射为当前组件的属性
const mapStateToProps = (state) => ({
  todolist: state.todo.todolist
});

BodyList = connect(mapStateToProps)(BodyList);
export default BodyList;