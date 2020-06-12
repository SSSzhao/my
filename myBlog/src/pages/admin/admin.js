import Vue from 'vue'
import Admin from './Admin.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './script/router'
import ElementUI from 'element-ui';
import {Loading, Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'babel-polyfill'
import './script/directive'

Vue.use(ElementUI);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

// axios.defaults.baseURL = 'http://localhost/blogApi/';
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true
// axios拦截器
// 添加请求拦截器
let loadingInstance;
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  loadingInstance = Loading.service({});
  return config;
}, function (error) {
  // 对请求错误做些什么
  Message({
    message: error.message,
    type: 'error',
    dangerouslyUseHTMLString: true
  });
  // loadingInstance.close();
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  loadingInstance.close();
  return response;
}, function (error) {
  // 对响应错误做点什么
  Message({
    message: error.message,
    type: 'error',
    dangerouslyUseHTMLString: true
  });
  loadingInstance.close();
  return Promise.reject(error);
});


new Vue({
  render: h => h(Admin),
  router
}).$mount('#admin')