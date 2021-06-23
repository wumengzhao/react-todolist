import axios from 'axios';
// 创建 axios 实例
const baseAxios = axios.create({
  baseURL: '/api', // api base_url
  timeout: 6000 // 请求超时时间
})

// 对响应过来对数据做处理
baseAxios.interceptors.response.use((response) => {
  if (response.request.responseType === 'blob') {
    return response
  }
  return response.data
});
export default baseAxios;

