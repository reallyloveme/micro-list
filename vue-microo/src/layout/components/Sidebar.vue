<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      style="width: 200px;text-align: left;"
      router
      active-text-color="#ffd04b">
      <el-submenu :index="item.path" v-for="(item, index) in routes" :key="index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item :index="item.path + itemChild.path" v-for="(itemChild, indexChild) in item.children" :key="indexChild">
            <i class="el-icon-document"></i>
            <span slot="title">{{itemChild.name}}</span>
        </el-menu-item>
        <!-- <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
    </el-menu>
</template>

<script>
  export default {
    computed: {
        routes() {
            return this.$router.options.routes
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>