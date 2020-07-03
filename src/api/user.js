import {
  get,
  post
} from '../utils/request'

export const userlogin = param => {
  return post({
    url: '/api/user/login',
    data: param
  })
}

export const getmenu = param => {
  return get({
    url: '/api/user/getmenu'
  })
}
