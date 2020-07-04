import {
  get,
  post
} from '../utils/request'

// 用户登录
export const userlogin = param => {
  return post({
    url: '/api/user/login',
    data: param
  })
}

// 获取菜单
export const getmenu = param => {
  return get({
    url: '/api/user/getmenu'
  })
}

// 获取动态路由
export const getroutes = param => {
  return post({
    url: '/api/user/getroutes',
    data: param
  })
}
