import request from '../utils/request'

export const userlogin = param => {
  return request.get('/api/user/login')
}
