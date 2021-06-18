import './BodyList.css'
import List from '../List'
import { connect } from 'react-redux'

function BodyList(props){
  console.log('BodyList props', props);
  const noDoneList = props.todolist.filter((item) => { return !item.isDone });
  const isDoneList = props.todolist.filter((item) => { return item.isDone });
  return (
    <div className="bodylist">
      <List list={ noDoneList } title="待办事项"></List>
      <List list={ isDoneList } title="已办事项"></List>
    </div>
  );
}
const mapStateToProps = (state) => ({
  todolist: state.todo.todolist
});

BodyList = connect(mapStateToProps)(BodyList);
export default BodyList;