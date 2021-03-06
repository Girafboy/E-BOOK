/* eslint-disable no-extend-native */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './element.js'
import axios from 'axios'
import global from './components/GLOBAL'

axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.withCredentials = false
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.GLOBAL = global

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 参数格式转换
  // if (config.method === 'post') {
  //   config.params = qs.parse(config.data)
  // }
  // if (config.method === 'put') {
  //   config.params = qs.parse(config.data)
  // }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Date.prototype.format = function (format) {
  var date = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'q+': Math.floor((this.getMonth() + 3) / 3),
    'S+': this.getMilliseconds()
  }
  if (/(y+)/i.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in date) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1
        ? date[k] : ('00' + date[k]).substr(('' + date[k]).length))
    }
  }
  return format
}
