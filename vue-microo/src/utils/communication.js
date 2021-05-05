/*
 * @Author: songjun
 * @Date: 2021-05-04 16:31:54
 * @LastEditTime: 2021-05-04 16:39:13
 * @LastEditors: Please set LastEditors
 * @Description: 子应用通信
 * @FilePath: /micro-list/vue-micro/src/utils/communication.js
 */
const emptyAction = function() {
    console.warn('Current execute action is empty!')
}

class Actions {
    actions = {
        onGlobalStateChange: emptyAction,
        setGlobalState: emptyAction
    }
    /**
     * 设置actions
     */

    setActions (actions) { 
        this.actions = actions
    }

    /**
     * 映射
     */
    onGlobalStateChange(...args) {
        return this.actions.onGlobalStateChange(...args);
    }

    /**
     * 映射
     */
    setGlobalState(...args) {
        return this.actions.setGlobalState(...args)
    }
}

const actions = new Actions()

export default actions
