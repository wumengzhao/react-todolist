import './BodyList.css';
import ListItem from './ListItem';
import { connect } from 'react-redux';

function BodyList(props){
  const noDoneList = props.todolist.filter((item) => { return !item.is_done });
  const isDoneList = props.todolist.filter((item) => { return item.is_done });
  return (
    <div className="bodylist">
      <ul>
        <h3>待办事项</h3>
        {noDoneList.length ? noDoneList.map((item) => { return <ListItem item={item} key={item.task_id} />} ) : '暂无...'}
      </ul>
      <ul>
        <h3>已办事项</h3>
        {isDoneList.length ? isDoneList.map((item) => { return <ListItem item={item} key={item.task_id} /> }) : '暂无...'}
      </ul>
    </div>
  );
}

// 将state映射为当前组件的属性
const mapStateToProps = (state) => ({
  todolist: state.todo.todolist
});

BodyList = connect(mapStateToProps)(BodyList);
export default BodyList;