import { createStore } from 'vuex'
import layout from './layout'

export default createStore({
  state: {
    // 网站名称
    siteName: ''
  } as any,
  getters: {
  },
  mutations: {
  },
  actions: {
    setSiteName: (state, name) => {
      state.state.siteName = name
    }
  },
  modules: {
    ...{layout},
  }
})
