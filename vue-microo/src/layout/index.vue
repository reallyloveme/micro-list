<!--
 * @Author: songjun
 * @Date: 2021-05-02 18:38:06
 * @LastEditTime: 2021-05-04 18:08:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /micro-list/vue-micro/src/layout/index.vue
-->
<template>
    <div class="app-wrapper">
        <el-container>
            <el-header>
              <span class="el-dropdown-link" @click="logOut()">
                  退出
                </span>
            </el-header>
            <el-container>
                <Sidebar />
                <el-container>
                    <el-main>
                        <router-view />
                    </el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import actions from '../utils/communication'
export default {
    components: {
        Sidebar
    },
    computed: {
    },
    methods: {
      // 推出
      logOut() {
        console.log('推出')
        actions.onGlobalStateChange(state => {
          console.log('子应用监听state', state)
          // const {hasLogin} = state
          // if (hasLogin) {
          //   location.href = window.location.origin + '/login'
          // }
          location.href = window.location.origin + '/login'
          // this.$router.replace('/login')
        }, true)
      }
    },
}
</script>
<style scoped>
  .app-wrapper {
      width: 100%;
      height: 100%;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-header, .el-footer {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        line-height: 60px;
        text-align: right;
    }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  .el-container {
    height: 100% !important;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
