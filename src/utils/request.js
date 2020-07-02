import axios from 'axios'
import NProgress from 'nprogress'
// axios.defaults.baseURL = 'http://192.168.1.10:27788'

// 请求头拦截
axios.interceptors.request.use(config => {
  NProgress.start()
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})

export default axios
