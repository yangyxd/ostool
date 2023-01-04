import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import routes from './routes'
import { menusMap } from './menus'

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

const bodyRoutes = routes[0].children

// 根据菜单设置，补充 router
initRoute(bodyRoutes)

// 将菜单中已经设置， router 中未指定的路径加入
for (const e in menusMap) {
  const v = menusMap[e]
  if (v.path && v.component && !routeMap[v.path]) {
    bodyRoutes.push({
      path: v.path,
      component: v.component,
      name: e,
      meta: { title: v.name, icon: v.icon, activePath: v.path, power: v.power }
    })
  }
}

// console.log('routes', routes)

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes
})

export default router
