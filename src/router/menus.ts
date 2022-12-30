// base_information; children -> role | mock 对应后台返回菜单的 id
export interface MenuItem {
  /** 菜单名称 */
  name: string
  /** 路由路径，末级菜单必须存在，自动生成 router 时必须设置 */
  path?: string
  /** 图标 */
  icon?: string
  /** 需要的权限 */
  power?: (string)[] | { options: (string)[] } | ((powers: (string)[]) => boolean)
  /** 子菜单项 */
  children?: Record<string, MenuItem>
  /** 是否允许多开 */
  multiple?: boolean
  /** 扩展数据 */
  data?: any
  /** component， 自动生成 router 时必须设置 */
  component?: () => Promise<any>
}

/** 主菜单 */
const menus: Record<string, MenuItem> = {
  home: {
    name: '首页',
    icon: 'icon-home',
    path: '/',
  },
  json_tools: {
    name: 'JSON工具',
    icon: 'icon-file-text',
    children: {
      json: {
        name: 'JSON在线解析',
        icon: 'icon-settings_ethernet',
        path: '/json-tools/json',
        multiple: false,
        data: {  icon: 'Json', txt: '#ff0', bg: '#009688', desc: 'JSON 在线解析工具' },
        component: () => import('@/views/pages/json/json.vue'),
      },
    }
  },
  markdown: {
    name: 'Markdown 编辑器',
    icon: 'icon-monitor1',
    path: '/markdown',
    multiple: false,
    data: { icon: 'Markdown', txt: '#fff', bg: '#444444', desc: '多功能Markdown在线编辑器' },
    component: () => import('@/views/pages/markdown.vue'),
  },
  regexp: {
    name: '正则表达式测试',
    icon: 'icon-padding',
    path: '/regexp',
    data: { icon: 'RegExp', txt: '#fff', bg: '#ff6000', desc: '在线正则表达式测试工具' },
    component: () => import('@/views/pages/regexp.vue'),
  },
  xpath: {
    name: 'XPath/CSS 测试',
    icon: 'icon-layers1',
    path: '/xpath',
    data: { icon: 'XPath/CSS', txt: '#fff', bg: '#c06b26', desc: 'XPath和CSS表达式在线匹配测试工具' },
    component: () => import('@/views/pages/xpath.vue'),
  },
  base64: {
    name: 'Base64编码转换',
    icon: 'icon-folder_open',
    path: '/base64',
    data: { icon: 'Base64', txt: '#fff', bg: '#08998c', desc: '将任意字节数据编码成ASCII字符串' },
    component: () => import('@/views/pages/base64.vue'),
  },
  md5: {
    name: 'MD5加密',
    icon: 'icon-lock-closed',
    path: '/md5',
    data: { icon: 'MD5', txt: '#135201', bg: '#a9ffe0', desc: 'MD5加密工具' },
    component: () => import('@/views/pages/md5.vue'),
  },
  js: {
    name: 'JS/Html压缩格式化',
    icon: 'icon-embed2',
    path: '/js',
    data: { icon: ' - JS - ', txt: '#4d6d09', bg: '#f1f1f1', desc: 'JS/Html压缩格式化' },
    component: () => import('@/views/pages/js.vue'),
  },
  jsrun: {
    name: 'JavaScript在线运行',
    icon: 'icon-bug_report',
    path: '/jsrun',
    data: { icon: 'JavaScript', txt: '#f1f1f1', bg: '#4d6d09', desc: 'JavaScript 在线运行工具' },
    component: () => import('@/views/pages/jsRun.vue'),
  },
  url: {
    name: 'URL编码解码',
    icon: 'icon-sports_soccer',
    path: '/url',
    data: { icon: 'URL', txt: '#3280fc', bg: '#dddddd', desc: 'URL编码/解码' },
    component: () => import('@/views/pages/url.vue'),
  },
  native: {
    name: 'Native编码解码',
    icon: 'icon-web_asset',
    path: '/native',
    data: { icon: 'Native', txt: '#006600', bg: '#66ffff', desc: 'Native编码/解码' },
    component: () => import('@/views/pages/native.vue'),
  },
  timestamp: {
    name: '时间戳',
    icon: 'icon-access_time',
    path: '/timestamp',
    data: { icon: 'Time', txt: '#fff', bg: '#009a61', desc: '在线时间戳转换' },
    component: () => import('@/views/pages/timestamp.vue'),
  },
}

/** 将 menus 配置装入 map 中, 子菜单路径以 "/" 分隔 */
export const menusMap: Record<string, MenuItem> = {}

const initMenusMap = (path: string, menus: Record<string, any>) => {
  for (const e in menus) {
    const item = menus[e]
    const key = path + e
    menusMap[key] = item
    if (item.children) {
      initMenusMap(key + '/', item.children)
    } else if (!item.path) {
      throw Error(`菜单项 "${item.name}" 未设置 "path" 属性，并且没有子菜单`)
    }
  }
}

initMenusMap('', menus)
// console.log('menusMap', menusMap)

export default menus
