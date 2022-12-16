// import Cookies from 'js-cookie'

import router from '@/router'
import layout from '@/store/layout'

const TokenKey = 'nToken'
const PhoneKey = 'nPhone'

export function getToken(): string {
  return localStorage.getItem(TokenKey) || ''
  // return Cookies.get(TokenKey) || ''
}

export function setToken(token: string): void {
  localStorage.setItem(TokenKey, token)
  // Cookies.set(TokenKey, token)
}

export function removeToken(): void {
  localStorage.removeItem(TokenKey)
  // Cookies.remove(TokenKey)
}

export function setPhone(phone: string): void {
  localStorage.setItem(PhoneKey, phone)
}

export function getPhone(): string {
  return localStorage.getItem(PhoneKey) || ''
}

/** 退出登录 */
export function exitLogin() {
  localStorage.clear()
  sessionStorage.clear()
  removeToken()
  try {
    layout.state.tagsList = []
    layout.mutations.updateTagsNameList(layout.state, '')
  } catch (_) { null }
  router.push('/login')
}