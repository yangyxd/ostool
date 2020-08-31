import axios from 'axios';
import consts from './consts';
import {
    Message,
    MessageBox
} from 'element-ui';
import router from '../router';
let Base64 = require('js-base64').Base64;
const _config = config;

const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // easy-mock服务挂了，暂时不使用了
    // baseURL: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
    timeout: 60000,
    // 服务器地址
    // baseURL: config.sServiceHost,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
});

const exSvr = axios.create({
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
});

service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200 || response.status === 201 || response.status === 202 || response.status === 203) {
            if (response.data && response.data.code === 0)
                return response.data;
            return response.data;
        } else if (response.data) {
            // 拦截错误， 显示错误信息
            Message.error(`${response.data.msg}(${response.data.code})`);
            return Promise.reject(response.data);
        } else if (response.error) {
            let _msg = response.error;
            Message.error(`${_msg}(${response.status})`);
            return Promise.reject(response);
        }
    },
    error => {
        if (!error.response && error.message.indexOf("Network Error") !== -1){
            Message.error("呀，网络出了问题");
        } else if(!error.response && error.message.indexOf("timeout") !== -1){
            Message.error("连接服务器超时");
        } else if (error.response) {
            if (error.response.data) {
                if (error.response.data.error) {
                    let _msg = _getErrMsg(error.response.data.error);
                    Message.error(`${_msg}(${error.response.data.status})`);
                } else {
                    Message.error(`${error.response.data.msg}(${error.response.data.code})`);
                }
            } else
                Message.error(`未知错误(${error.response.status})：${error.response.statusText}`);
        }
        return Promise.reject(error);
    }
);

exSvr.interceptors.response.use(
    response => {
        if (response.status === 200) {  //  && response.data && response.data.__result === 0
            return response.data;
        } else {
            // 拦截错误， 显示错误信息
            // Message.error(`${response.data.__msg}(${response.data.__result})`);
            return Promise.reject(response.data);
        }
    },
    error => {
        return Promise.reject(error);
    }
);

// export default service;

export default {
    updateBaseUrl() {
        service.defaults.baseURL = _config.sServiceHost == _config.sProxyBaseUrl ? '' : _config.sServiceHost;
    },

    // http get
    get(api, params) {
        return service.get(api, params ? {params} : null);
    },

    // http post
    post(api, params, data) {
        return service.post(api, data, params == null ? null : {
            params
        });
    },

    // http post
    put(api, params, data) {
        return service.put(api, data, params == null ? null : {
            params
        });
    },

    // http delete
    delete(api, params) {
        return service.delete(api, params ? {params} : null);
    },

    // get
    getEx(url, params) {
        return exSvr.get(url, params ? {params} : null);
    }
};