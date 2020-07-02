import {
  COMMON_ERROR as error,
  COMMON_SUCCESS as success
} from '../../constants/index'
export default {
  login: {
    path: '/api/user/login',
    method: 'get',
    success() {
      const res = success
      success.data = {
        username: '管理员',
        usertoken: 'usertoken',
        phone: '150****7168'
      }
      return res
    },
    error() {
      const res = error
      return res
    }
  }
}
