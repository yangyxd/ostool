import { createRouter, createWebHashHistory, createWebHistory, Router } from 'vue-router'
import routes from './routes'
import { MenuItem, menusMap } from './menus'

const routeMap: Record<string, any> = {}

// 根据 menus 动态补齐 route 设置
const initRoute = (routes: any[]) => {
  routes.forEach((e) => {
    // route 的名称，与 menus 中的层级相对应
    const menu = menusMap[e.name]
    if (menu) {
      if (!e.path) { e.path = menu.path }
      if (!e.component) { e.component = menu.component }
      if (!e.meta) { e.meta = {} }
      const meta = e.meta
      if (!meta.title) { meta.title = menu.name }
      if (!meta.activePath) { meta.activePath = menu.path }
      if (!meta.icon) { meta.icon = menu.icon }
      routeMap[e.path] = e
    }
  })
}

const bodyRoutes = routes[0].children || routes[1].children
export const routerFlagMap: Record<string, {key: string, menu: MenuItem}> = {}

// 根据菜单设置，补充 router
initRoute(bodyRoutes)

/** 根据 MenuItem 初始化 Route */
export const initRouteFromMenuItem = (v: MenuItem, name: string) => {
  if (v.path && v.component && !routeMap[v.path]) {
    const item = {
      path: v.path,
      component: v.component,
      name: name,
      meta: { title: v.name, icon: v.icon, activePath: v.path, power: v.power }
    }
    routeMap[v.path] = item
    bodyRoutes.push(item)
  }
}

// 将菜单中已经设置， router 中未指定的路径加入
for (const e in menusMap) {
  const v = menusMap[e]
  initRouteFromMenuItem(v, e)
  if (v.id !== undefined && v.id !== null && v.id !== '') {
    routerFlagMap[v.id.toString()] = {key: e, menu: v}
  }
}

// console.log('routes', routes)
const routerData = {
  router: undefined as (Router | undefined)
}

/** 获取 router */
const router = (newRouuter?: boolean) => {
  if (!routerData.router || newRouuter === true) {
    routerData.router = createRouter({
      // history: createWebHistory(),
      history: createWebHashHistory(),
      routes
    })
  }
  return routerData.router
}

export default router