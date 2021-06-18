import { connect } from 'react-redux'
import { selectAll, selectAllCancel, deleteSelected} from '../../actions/todoAction'

function Footer(props) {
  let count = 0;
  props.todolist.forEach((item) => { if(item.checked) count++; })
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div>
        <a onClick={() => props.selectAll() }>全选</a>
        /<span onClick={() => props.selectAllCancel() }>取消</span>
      </div>
      <div onClick={() => props.deleteSelected() } style={{ color: '#ff4d4f'}}>删除</div>
      <div>已选择{count}条 /共{ props.todolist.length }条</div>
    </div>
  );
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