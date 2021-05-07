<!--
 * @Author: songjun
 * @Date: 2021-05-02 15:11:38
 * @LastEditTime: 2021-05-07 15:37:53
 * @LastEditors: songjun8
 * @Description: In User Settings Edit
 * @FilePath: \micro-list\main-microo\src\page\login\login.vue
-->
<template>
    <div class="login">
        <el-card shadow="always">
            <p>微前端登陆</p>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="text-align: center; width: 340px;">
                <el-form-item label="账号" prop="name">
                    <el-input type="name" v-model="ruleForm.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import actions from '../../utils/communication'
  export default {
    name: 'login',
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          name: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          name: [
            { validator: validateName, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      ...mapActions(['changeLoginState']),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.changeLoginState()
            // 跳转到子应用
            this.$router.replace('/app-vue')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },

    mounted() {
      /**
       * @description: 注册观察者函数
       * @state：变更够状态
       * @ prevState：变更前状态
       * @return {*}
       */
      actions.onGlobalStateChange((state, prevState) => {
        console.log('主应用观察者：hasLogin 改变前的值为', prevState.hasLogin)
        console.log('主应用观察者：hasLogin 改变后的值为', state.hasLogin)
      })
    },
  }
</script>


<style scoped>
    .login {
        width: 500px;
        height: 300px;
        margin: 200px auto 0;
    }
</style>
