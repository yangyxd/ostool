/**
 * path:'router-name'             跳转地址
 * name:'router-name'             如果用到<keep-alive>，必须设置该属性, 此属性如果需要与菜单适配，名称应当与菜单一致。如果是子菜单中，以"/”分隔菜单层级
 * meta : {
    title: 'title'                用于设置网页标签显示的标题
    activePath: '',               用于记录菜单活动状态
    keepAilve: true               是否缓存，默认 false
    requiresAuth: true            是否需要登录，默认 true
    power?: string[] | ((powers: string[]) => boolean) 需要拥有的权限，默认不需要特别的权限
  }
 */
const routes: any[] = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: () => import('@/components/layout/index.vue'),
    children: [
      {
        name: 'home',
        component: () => import('@/views/home.vue'),
        meta: {
          fixed: true,
        }
      },
      {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('@/components/404.vue'),
        meta: {}
      },
      {
        path: '/403',
        name: '403',
        component: () => import('@/components/403.vue'),
        meta: {}
      },
    ]
  },
]

export default routes
