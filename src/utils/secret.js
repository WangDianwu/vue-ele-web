import AES from 'crypto-js/aes'
import MD5 from 'crypto-js/md5'
import Utf8 from 'crypto-js/enc-utf8'
import Base64 from 'crypto-js/enc-base64'
import ECB from 'crypto-js/mode-ecb'
import Pkcs7 from 'crypto-js/pad-pkcs7'

// 加密,解密key
const CRYPTO_KEY = 'vlfVWaWAiV0PknHi'
// 加密
export const encrypt = (word, keyStr) => {
  keyStr = keyStr || CRYPTO_KEY
  const key = Utf8.parse(keyStr) // Latin1 w8m31+Yy/Nw6thPsMpO5fg==
  const srcs = Utf8.parse(word)
  const encrypted = AES.encrypt(srcs, key, {
    mode: ECB,
    padding: Pkcs7
  })
  return encrypted.toString()
}
// 解密
export const decrypt = (word, keyStr) => {
  keyStr = keyStr || CRYPTO_KEY
  const key = Utf8.parse(keyStr)// Latin1 w8m31+Yy/Nw6thPsMpO5fg==
  const decryptText = AES.decrypt(word, key, {
    mode: ECB,
    padding: Pkcs7
  })
  return Utf8.stringify(decryptText).toString()
}

// md5
export const md5 = (word) => {
  return MD5(word).toString()
}

// base64 加密
export const convertToBase64 = (word) => {
  return Base64.stringify(word)
}

// base64 解密
export const convertFromBase64 = (base64) => {
  return Base64.parse(base64)
}
