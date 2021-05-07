/*
 * @Author: songjun8
 * @Date: 2021-05-06 10:13:04
 * @LastEditors: songjun8
 * @LastEditTime: 2021-05-07 15:12:29
 * @FilePath: \micro-list\main-microo\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './hk-single-config'

import './utils/components'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
