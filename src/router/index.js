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
                    meta: { title: 'JSON在线解析', multiple: true }
                },
                {
                    path: '/jsonformat',
                    component: () => import(/* webpackChunkName: "jsonFormat" */ '../components/page/jsonFormat.vue'),
                    meta: { title: 'JSON格式化校验', multiple: true }
                },
                {
                    path: '/regexp',
                    component: () => import(/* webpackChunkName: "regexp" */ '../components/page/regexp.vue'),
                    meta: { title: '正则表达式测试', multiple: true }
                },
                {
                    path: '/base64',
                    component: () => import(/* webpackChunkName: "base64" */ '../components/page/base64.vue'),
                    meta: { title: 'Base64编码转换', multiple: true }
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
