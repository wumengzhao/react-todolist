import { connect } from 'react-redux'
import { selectAll, selectAllCancel, deleteSelected } from '../../actions/todoAction'
import { selectAllAPI, cancelSelectAllAPI, deleteSelectedAPI } from '../../api/todo'
import PropTypes from 'prop-types';

function Footer(props) {
  let count = 0;
  props.todolist.forEach((item) => { if(item.checked) count++; })
  function selectAllItems(){
    selectAllAPI().then((res) => {
      console.log('selectAllAPI', res);
      props.selectAll();
    })
  }
  function selectAllItemsCancel(){
    cancelSelectAllAPI().then((res) => {
      console.log('cancelSelectAllAPI', res);
      props.selectAllCancel();
    })
  }
  function deleteSelectedItems(){
    deleteSelectedAPI().then((res) => {
      console.log('deleteSelectedAPI', res);
      props.deleteSelected();
    })
  }
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div>
        <a onClick={ selectAllItems }>全选</a>
        /<span onClick={ selectAllItemsCancel }>取消</span>
      </div>
      <div onClick={ deleteSelectedItems } style={{ color: '#ff4d4f'}}>删除</div>
      <div>已选择{count}条 /共{ props.todolist.length }条</div>
    </div>
  );
}
// 用于类型检查
Footer.propTypes = {
  selectAll: PropTypes.func.isRequired,
  selectAllCancel: PropTypes.func.isRequired,
  deleteSelected: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  todolist: state.todo.todolist
})

const mapDispatchToProps = (dispatch) => ({
  selectAll: () => dispatch(selectAll()),
  selectAllCancel: () => dispatch(selectAllCancel()),
  deleteSelected: () => dispatch(deleteSelected())
});

Footer = connect(mapStateToProps, mapDispatchToProps)(Footer);
export default Footer;