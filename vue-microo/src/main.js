/*
 * @Author: your name
 * @Date: 2021-05-02 13:53:19
 * @LastEditTime: 2021-05-04 16:41:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /micro-list/vue-micro/src/main.js
 */
import './public-path'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import actions from './utils/communication'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.use(VueRouter)

let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  if (props) {
    actions.setActions(props)
  }
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',
    mode: 'history',
    routes,
  });
  instance = new Vue({
    router,
    // store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
