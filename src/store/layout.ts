import { nextTick } from 'vue'
import router from '@/router';

interface LayoutState {
  isCollapse: boolean
  isRefresh: boolean
  showPath: boolean
  tagsList: any[]
  tagsName: string[]
}

const state: LayoutState = {
  // 导航栏菜单是否隐藏
  isCollapse: true,
  // 是否正在刷新页面
  isRefresh: false,
  // 是否显示菜单路径
  showPath: true,
  // 打开的页面
  tagsList: [] as string[],
  // 打开页面的路径列表
  tagsName: [] as string[]
}

const mutations = {
  // 更新二级导航显示隐藏
  updateCollapse(state, payload) {
    state.isCollapse = payload
  },
  // 更新 tagsName
  updateTagsNameList(state, excludeName) {
    const arr: string[] = []
    const data = state.tagsList
    for (let i = 0, len = data.length; i < len; i++) {
      data[i].path && data[i].name !== excludeName && arr.push(data[i].name)
    }
    // console.log('updateTagsNameList', data, arr)
    state.tagsName = arr
  },
  // 刷新页面
  reloadPage(state: LayoutState) {
    const route = router.currentRoute.value
    const name = route.matched.length >= 2 ? route.matched[1].components.default.name : undefined
    const i = name ? state.tagsName.findIndex((e) => e === name) : -1
    if (i >= 0) {
      mutations.updateTagsNameList(state, name)
    }
    state.isRefresh = true
    nextTick(() => {
      if (i >= 0 && name) {
        state.tagsName.push(name)
      }
      setTimeout(() => state.isRefresh = false, 1)
    })
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
