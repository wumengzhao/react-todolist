import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { deleteTodo, completeTodo, selectOne} from '../actions/todoAction';

let List = (props) => {
  console.log('List props', props);
  return (
    <div>
      <h3>{ props.title }</h3>
      { props.list.length === 0 ? <p>暂无...</p> : ''}
      <ul>
        { props.list.map((item) => {
          return (
            <li key={item.taskname}>
              <div onClick={ () => props.selectOne(item.taskname) }><Input type="checkbox" checked={item.checked} /></div>
              <div>{item.taskname}</div>
              <div>{item.isDone ? '已完成' : '待办'}</div>
              <div>
                <Button danger style={{ 'marginRight': '13px' }} onClick={() => props.deleteTodo(item.taskname) }>删除</Button>
                {!item.isDone && <Button type="primary" onClick={() => props.completeTodo(item.taskname) }>完成</Button>}
              </div>
            </li>
            )
        })}
      </ul>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  selectOne: (taskname) => dispatch(selectOne(taskname)),
  deleteTodo: (taskname) => dispatch(deleteTodo(taskname)) ,
  completeTodo: (taskname) => dispatch(completeTodo(taskname))
});

// bindActionCreators

List = connect(null,mapDispatchToProps) (List);
export default List;