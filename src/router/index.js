import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    // mode:'hash',  // history, hash
    routes: [
        {
            path: '/',
            redirect: '/root'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '首页' },
            children: [
                {
                    path: '/root',
                    component: () => import(/* webpackChunkName: "root" */ '../components/page/root.vue'),
                    meta: { title: '主页', fixed: true, icon: 'el-icon-lx-main' }
                },
                {
                    path: '/json',
                    component: () => import(/* webpackChunkName: "json" */ '../components/page/json.vue'),
                    meta: { title: 'JSON工具', icon: 'el-icon-lx-main' }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
                {
                    path: '/icon',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
                    meta: { title: '自定义图标' }
                },
            ]
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
