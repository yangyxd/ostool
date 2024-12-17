function parseLocalData() {
  try {
    return JSON.parse(localStorage.getItem('layout-setting') || '{}')
  } catch (e) {
    return {}
  }
}
  
const storageSetting = parseLocalData()
  
const state = {
  /** 显示右侧设置弹出层 */
  showSettings: false,
  /** 自定义主题颜色 */
  themeColor: storageSetting.themeColor || '',
  /** 主题方案 */
  theme: storageSetting.theme || ''
}
  
const mutations = {
  CHANGE_SETTING(state: any, { key, value }){
    // eslint-disable-next-line no-prototype-builtins
    state[key] = value
    // console.log('settings state', state)
  }
}
  
const actions = {
  // 修改布局设置
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}
  
export default {
  namespaced: true,
  state,
  mutations,
  actions
}