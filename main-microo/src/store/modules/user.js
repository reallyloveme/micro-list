/*
 * @Author: songjun8
 * @Date: 2021-05-07 14:57:59
 * @LastEditors: songjun8
 * @LastEditTime: 2021-05-07 15:31:03
 * @FilePath: \micro-list\main-microo\src\store\modules\user.js
 */
import actions from '../../utils/communication'
const user = {
    state: {
        hasLogin:false
    },
    mutations: {
        CHANGE_LOGIN_STATE: (state, data) => {
            state.hasLogin = data
            actions.setGlobalState({hasLogin: data})
        }
    },
    actions: {
        changeLoginState({ commit }) {
            commit('CHANGE_LOGIN_STATE', true)
        }
    }
}

export default user