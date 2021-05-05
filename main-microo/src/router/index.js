import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home/home.vue'
import Login from '../page/login/login.vue'
import NotFound from '../page/notFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/404',
        name: '404',
        component: NotFound
      },
      // {
      //   path: '*',    // 此处需特别注意至于最底部
      //   redirect: '/404'
      // }
  ]
})