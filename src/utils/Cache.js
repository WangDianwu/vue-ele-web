import {
  encrypt,
  decrypt
} from './secret'

// 设置缓存
export const setCache = (key, data, expires = 0) => {
  const now = new Date()
  localStorage.setItem(
    key,
    encrypt(
      JSON.stringify({
        data: data,
        expires: expires === 0 ? 0 : new Date(now.getTime() + expires)
      })
    )
  )
}

// 获取缓存
export const getCache = (key, defaultValue = {}) => {
  const now = new Date()
  let returnObj = localStorage.getItem(key)
  if (returnObj) {
    returnObj = JSON.parse(decrypt(returnObj))
    if (returnObj.expires !== 0 && now.getTime() > returnObj.expires.getTime()) {
      returnObj.data = defaultValue
    }
    return returnObj.data
  }
  return defaultValue
}

//  删除缓存
export const removeCache = (key) => {
  localStorage.removeItem(key)
}
// 清空全部
export const clearAll = () => {
  localStorage.clear()
}
