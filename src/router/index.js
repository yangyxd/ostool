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
                    meta: { title: 'JSON在线解析', iframe: true }
                },
                {
                    path: '/jsonformat',
                    component: () => import(/* webpackChunkName: "jsonFormat" */ '../components/page/jsonFormat.vue'),
                    meta: { title: 'JSON格式化校验', iframe: true }
                },
                {
                    path: '/regexp',
                    component: () => import(/* webpackChunkName: "regexp" */ '../components/page/regexp.vue'),
                    meta: { title: '正则表达式测试' }
                },
                {
                    path: '/base64',
                    component: () => import(/* webpackChunkName: "base64" */ '../components/page/base64.vue'),
                    meta: { title: 'Base64编码转换' }
                },
                {
                    path: '/md5',
                    component: () => import(/* webpackChunkName: "md5" */ '../components/page/md5.vue'),
                    meta: { title: 'MD5加密' }
                },
                {
                    path: '/xpath',
                    component: () => import(/* webpackChunkName: "xpath" */ '../components/page/xpath.vue'),
                    meta: { title: 'XPath/CSS测试' }
                },
                {
                    path: '/js',
                    component: () => import(/* webpackChunkName: "js" */ '../components/page/js.vue'),
                    meta: { title: 'Js/Html压缩格式化' }
                },
                {
                    path: '/jsrun',
                    component: () => import(/* webpackChunkName: "jsrun" */ '../components/page/jsRun.vue'),
                    meta: { title: 'Js在线运行工具' }
                },
                {
                    path: '/url',
                    component: () => import(/* webpackChunkName: "url" */ '../components/page/url.vue'),
                    meta: { title: 'URL编码解码' }
                },
                {
                    path: '/native',
                    component: () => import(/* webpackChunkName: "native" */ '../components/page/native.vue'),
                    meta: { title: 'Native编码解码' }
                },
                {
                    path: '/markdown',
                    component: () => import(/* webpackChunkName: "markdown" */ '../components/page/markdown.vue'),
                    meta: { title: 'Markdown' }
                },
                {
                    path: '/timestamp',
                    component: () => import(/* webpackChunkName: "timestamp" */ '../components/page/timestamp.vue'),
                    meta: { title: '时间戳转换' }
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
