// 引入封装的axios
import axios from './baseAxios'

export function getAllAPI () {
    return axios({
      url: '/getAll',
      method: 'get'
    })
}

export function addOneAPI (taskname) {
  return axios({
    url: '/addOne',
    method: 'get',
    params: { taskname: taskname }
  })
}

export function deleteOneAPI(id) {
  return axios({
    url: '/deleteOne',
    method: 'get',
    params: { id: id }
  })
}

export function completeOneAPI(id) {
  return axios({
    url: '/completeOne',
    method: 'get',
    params: { id: id }
  })
}

export function deleteSelectedAPI() {
  return axios({
    url: '/deleteSelected',
    method: 'get',
  })
}

export function selectAllAPI() {
  return axios({
    url: '/selectAll',
    method: 'get'
  })
}

export function cancelSelectAllAPI() {
  return axios({
    url: '/cancelSelectAll',
    method: 'get'
  })
}

export function selectOneAPI(id) {
  return axios({
    url: '/selectOne',
    method: 'get',
    params: { id: id }
  })
}

export function cancelSelectOneAPI(id) {
  return axios({
    url: '/cancelSelectOne',
    method: 'get',
    params: { id: id }
  })
}
