import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import base64 from './utils/base64'
import md5 from 'js-md5'
import cache from './plugins/cache'
import './assets/styles/index.scss'
import './assets/styles/element-plus.scss'
import './assets/styles/element-theme.scss'

const app = createApp(App)

import {
  ElButton, ElInfiniteScroll, ElLoading, ElMessage, ElMessageBox, ElAlert, ElEmpty, ElTooltip,
  ElDropdown, ElDropdownMenu, ElDropdownItem, ElInput, ElIcon, ElDialog, ElTable, ElTableColumn,
  ElForm, ElFormItem, ElCol, ElRow, ElCheckbox, ElPagination,
  ElRadioGroup, ElRadioButton, ElRadio, ElTag, ElSelect, ElOption
} from 'element-plus'

// element-plus 全局组件
const components = [
  ElDialog,
  ElButton, ElEmpty, ElTooltip, ElInput, ElIcon, ElCheckbox,
  ElDropdown, ElDropdownMenu, ElDropdownItem,
  ElTable, ElTableColumn, ElPagination,
  ElAlert,
  ElForm, ElFormItem,
  ElCol, ElRow,
  ElRadioGroup, ElRadioButton, ElRadio,
  ElTag, ElSelect, ElOption,
]
components.forEach((component) => {
  app.component(component.name, component)
})
const plugins = [ElInfiniteScroll, ElLoading, ElMessage, ElMessageBox]
plugins.forEach((plugin) => {
  app.use(plugin)
})

const siteName = document.title ?? ''
store.dispatch('setSiteName', siteName)

// 统一注册Icon图标
// import * as ElIconModules from '@element-plus/icons-vue'
// import component from './shims-vue';
// for (const iconName in ElIconModules) {
//   if (Reflect.has(ElIconModules, iconName)) {
//     const item = ElIconModules[iconName]
//     app.component(iconName, item)
//   }
// }

app.config.globalProperties.isMobile = () => {
  return store.state.layout.isMobile
  // return !!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
}

// 调试标志，正式打包时需要设置为 false
app.config.globalProperties.isDebug = false

console.log('isMobile: ' + app.config.globalProperties.isMobile())

app.config.globalProperties.$md5 = md5
app.config.globalProperties.$cache = cache

const routerBeforeEach = (to, from, next) => {
  if (to.meta.title && document) {
    document.title = siteName + ' - ' + to.meta.title as string
  }
  next()
}
router(true).beforeEach(routerBeforeEach)
app.use(store)
  .use(router())
  // .use(useVxeTable)
  .use(base64)
  .mount('#app')