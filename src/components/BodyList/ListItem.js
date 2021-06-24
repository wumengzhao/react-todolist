import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, message } from 'antd';
import { deleteTodo, completeTodo, selectOne } from '../../actions/todoAction';
import { deleteOneAPI, completeOneAPI, selectOneAPI, cancelSelectOneAPI } from '../../api/todo'

function ListItem({ id, taskname, isDone, checked, selectOne, deleteTodo, completeTodo}) {
  // 完成某个待办事项
  function completeItem(id) {
    completeOneAPI(id).then((res) => {
      console.log('completeOne', res);
      completeTodo(id);
      message.success(res.msg);
    }).catch((err) => {
      message.err(err);
    });
  }
  // 删除某个事项
  function deleteItem(id) {
    deleteOneAPI(id).then((res) => {
      console.log('deleteOne', res);
      deleteTodo(id);
      message.success(res.msg);
    }).catch((err) => {
      message.err(err);
    });
  }
  function selectOneItem(id, checked) {
    if (!checked) {
      selectOneAPI(id).then((res) => {
        console.log('selectOneAPI', res);
        selectOne(id);
      });
    } else {
      cancelSelectOneAPI(id).then((res) => {
        console.log('cancelSelectOneAPI', res);
        props.selectOne(id);
      });
    }
  }
  return (
    <li>
      <div onClick={() => selectOneItem(props.id, props.checked)}><Input type="checkbox" checked={props.checked}/></div>
      <div>{ taskname }</div>
      <div>{ isDone ? '已完成' : '待办' }</div>
      <div>
        <Button danger style={{ 'marginRight': '13px' }} onClick={() => { deleteItem(props.id) } }>删除</Button>
        {!props.isDone && <Button type="primary" onClick={ ()=> { completeItem(props.id)} }>完成</Button>}
      </div>
    </li>
  );
}

// 用于类型检查
ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  taskname: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired,
  selectOne: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
}
// 将store state映射为组件的属性，第二个参数是组件本身自己的属性，在此可以进行处理然后再传入
const mapStateToProps = (state, ownprops) => ({
  id: ownprops.item.task_id,
  taskname: ownprops.item.task_name,
  isDone: ownprops.item.is_done,
  checked: ownprops.item.checked
});
// 将store dispatch映射成组件的属性
const mapDispatchToProps = (dispatch) => ({
  selectOne: (taskname) => dispatch(selectOne(taskname)),
  deleteTodo: (taskname) => dispatch(deleteTodo(taskname)) ,
  completeTodo: (taskname) => dispatch(completeTodo(taskname))
});

// bindActionCreators

const ListItemNew = connect(mapStateToProps, mapDispatchToProps) (ListItem);
export default ListItemNew;