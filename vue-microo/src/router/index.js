// import Vue from 'vue'
// import Router from 'vue-router'
import Layout from '../layout'
import Home from '../pages/home/home.vue'
import Table from '../pages/table/index.vue'
// Vue.use(Router)

export const routes = [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      name: '首页',
      children: [{
        path: 'home',
        name: '主页',
        component: Home
      }]
    },
    {
      path: '/table',
      component: Layout,
      name: '数据',
      children: [{
        path: '',
        name: '表格',
        component: Table
      }]
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //     path: '/table',
    //     name: 'table',
    //     component: Table
    //   }
  ]