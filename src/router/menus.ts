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
    icon: 'icon-now_widgets',
    children: {
      json: {
        name: 'JSON在线解析',
        icon: 'icon-print',
        path: '/json-tools/json',
        data: {  icon: 'Json', txt: '#ff0', bg: '#009688', desc: 'JSON 在线解析工具' },
        component: () => import('@/views/pages/json/json.vue'),
      },
      jsonformat: {
        name: 'JSON格式化校验',
        icon: 'icon-print',
        path: '/json-tools/jsonformat',
        data: {  icon: 'Json', txt: '#fff', bg: '#3280fc', desc: 'JSON 格式化校验工具' },
        component: () => import('@/views/pages/json/jsonFormat.vue'),
      },
    }
  },
  regexp: {
    name: '正则表达式测试',
    icon: 'icon-offline_bolt',
    path: '/regexp',
    data: { icon: 'RegExp', txt: '#fff', bg: '#ff6000', desc: '在线正则表达式测试工具' },
    component: () => import('@/views/pages/regexp.vue'),
  },
  base64: {
    name: 'Base64编码转换',
    icon: 'icon-bolt',
    path: '/base64',
    data: { icon: 'Base64', txt: '#fff', bg: '#08998c', desc: '将任意字节数据编码成ASCII字符串' },
    component: () => import('@/views/pages/base64.vue'),
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
