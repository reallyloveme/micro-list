<!--
 * @Author: songjun
 * @Date: 2021-05-02 13:46:48
 * @LastEditTime: 2021-05-04 18:09:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /micro-list/main-micro/src/App.vue
-->
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import microApps from './hk-single-config'
export default {
  name: 'App',
  data() {
    return {
      microApps,
      current: ''
    }
  },
  components: {
  },
  created() {
    this.bindCurrent()
  },
  methods: {
     bindCurrent () {
      const path = window.location.pathname
      // console.log('path', path)
      // console.log('path', path.split('/')[1])
      if (this.microApps.findIndex(item => item.activeRule === path) >= 0) {
        console.log('123')
        this.current = path
      }
    },
    listenRouterChange () {
      const _wr = function (type) {
        const orig = history[type]
        return function () {
          const rv = orig.apply(this, arguments)
          const e = new Event(type)
          e.arguments = arguments
          window.dispatchEvent(e)
          return rv
        }
      }
      history.pushState = _wr('pushState')
      window.addEventListener('pushState', this.bindCurrent)
      window.addEventListener('popstate', this.bindCurrent)
      this.$once('hook:beforeDestroy', () => {
        window.removeEventListener('pushState', this.bindCurrent)
        window.removeEventListener('popstate', this.bindCurrent)
      })
    }
  },
  mounted () {
    this.listenRouterChange()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
