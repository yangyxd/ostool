import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import { messages } from './components/common/i18n';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
//import './assets/css/theme-green/index.css'; // 浅绿色主题
import './assets/css/icon.css';
import './components/common/directives';
import 'babel-polyfill';
import request from './utils/request';
import moment from "miment";
// import eCharts from 'echarts';
import _ from 'lodash';
import plugin from './api/plugin';
import base64 from './api/base64';
import md5 from 'js-md5';
import _const from './utils/consts';
import VueClipboard from 'vue-clipboard2'
// import Highlight from './components/common/highlight';

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(ElementUI, {
    size: 'small'
});
const i18n = new VueI18n({
    locale: 'zh',
    messages
});

Vue.prototype.isMobile = () => {
    let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    return flag;
};

Vue.prototype.$const = _const;
Vue.prototype.$http = request;
Vue.prototype.$md5 = md5;
// Vue.prototype.$echarts = eCharts;
Vue.prototype.$moment = moment;  // 其实是 miment
Vue.prototype._ = _;

Vue.use(plugin);
Vue.use(base64);

// 调试标志，正式打包时需要设置为 false
Vue.prototype.isDebug = false;
console.log("debug: " + Vue.prototype.isDebug);

VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)

// highlight.js代码高亮插件
// Vue.use(Highlight);

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');

