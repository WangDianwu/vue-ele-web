import axios from 'axios'
import NProgress from 'nprogress'
// axios.defaults.baseURL = 'http://192.168.1.10:27788'

const service = axios.create({
  // baseURL: '',
  timeout: 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  }
})
// 请求头拦截
service.interceptors.request.use(config => {
  NProgress.start()
  config.headers.token = window.sessionStorage.getItem('token')
  return config
})

service.interceptors.response.use(config => {
  NProgress.done()
  return config
})

export default service
