/*
 * @Author: your name
 * @Date: 2021-05-02 13:48:23
 * @LastEditTime: 2021-05-04 17:37:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /micro-list/main-micro/src/hk-single-config.js
 */
import {registerMicroApps, start} from 'qiankun'

const microApps = [
    {
        name: 'vue',
        entry: '//localhost:8081/',
        container: '#app',
        activeRule: '/app-vue',
    }
]
registerMicroApps(microApps)

start()

export default microApps
