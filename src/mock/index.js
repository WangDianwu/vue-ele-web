import Mock from 'mockjs'
import user from './mockdata/usermock'

function _handerApi(apis) {
  Object.keys(apis).forEach(key => {
    const api = apis[key]
    Mock.mock(api.path, api.method, api.success)
  })
}

export default {
  startMock() {
    // Mock.setup({
    //   timeout: 0 - 300
    // })
    _handerApi(user)
  }
}
