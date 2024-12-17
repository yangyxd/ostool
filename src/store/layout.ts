import { nextTick } from 'vue'
import router from '@/router';

interface LayoutState {
  isCollapse: boolean
  isRefresh: boolean
  showPath: boolean
  isMobile: boolean
  singleHeader: boolean
  tagsList: any[]
  tagsName: string[]
}

function getIsMobile() {
  const v = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
  return !!v || (window && window.innerHeight > 0 && (window.innerWidth / window.innerHeight) < 0.65);
}

const state: LayoutState = {
  // 导航栏菜单是否隐藏
  isCollapse: getIsMobile() ? true : false,
  // 是否正在刷新页面
  isRefresh: false,
  // 是否显示菜单路径
  showPath: true,
  // 是否单行头部
  singleHeader: true,
  // 是否使用移动版式
  isMobile: getIsMobile(),
  // 打开的页面
  tagsList: [] as string[],
  // 打开页面的路径列表
  tagsName: [] as string[],
}

const mutations = {
  // 更新二级导航显示隐藏
  updateCollapse(state, payload) {
    state.isMobile = getIsMobile()
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
    const route = router().currentRoute.value
    const name = route.matched.length >= 2 ? route.matched[1]!.components!.default!.name : undefined
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