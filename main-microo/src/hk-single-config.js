/*
 * @Author: your name
 * @Date: 2021-05-02 13:48:23
 * @LastEditTime: 2021-05-07 17:41:50
 * @LastEditors: songjun8
 * @Description: In User Settings Edit
 * @FilePath: \micro-list\main-microo\src\hk-single-config.js
 */
import {registerMicroApps, start} from 'qiankun'
import modules from './modules'

console.log('modules', modules)

const microApps = [
    {
        name: 'vue',
        entry: '//localhost:8082/',
        container: '#app',
        activeRule: '/app-vue',
        props: {

        }
    }
]
registerMicroApps(microApps)

start()

export default microApps
