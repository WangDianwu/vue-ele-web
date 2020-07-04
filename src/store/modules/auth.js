
// 登陆
export const LOGIN = 'LOGIN'
export const LOGIN_OUT = 'LOGIN_OUT'

// 用户
export const SET_USER = 'SET_USER'

// 菜单
export const GET_MENU = 'GET_MENU'
export const SET_MENU = 'SET_MENU'

const auth = {
  state: {
    user: '',
    menus: []
  },
  mutations: {
    [SET_USER]: (state, payload) => {
      state.user = payload
    }
  },
  actions: {
    [LOGIN]({
      commit
    }, payload) {
      return new Promise((resolve, reject) => {
        const user = {
          userName: payload.username,
          userId: '00000'
        }
        commit(SET_USER, user)
        resolve()
      })
    },
    [LOGIN_OUT]({
      commit
    }, payload) {
      return new Promise((resolve, reject) => {
        commit(SET_USER, {})
        resolve()
      })
    }
  }
}

export default auth
