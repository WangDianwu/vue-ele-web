import axios from '../utils/request'

export const userlogin = param => {
  return axios.get('/api/user/getUser')
}
