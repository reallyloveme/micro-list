/*
 * @Author: songjun8
 * @Date: 2021-05-07 14:47:33
 * @LastEditors: songjun8
 * @LastEditTime: 2021-05-07 15:11:41
 * @FilePath: \micro-list\main-microo\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user
    }
})

export default store