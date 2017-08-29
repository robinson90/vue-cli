import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import api from './api.js'

export default new Vuex.Store({
    state: {
        loginname: localStorage.getItem('loginname')?localStorage.getItem('loginname'):'xxx',
        count: '0',
        token:localStorage.getItem('token')?localStorage.getItem('token'): '',

    },
    mutations: {
        loginOut(state, payload) {
            localStorage.removeItem('loginname');
            localStorage.removeItem('token');
            state.loginname = 'xxx';
            state.accesstoken = '';
        },
        loginIn(state, loginmsg) {
            localStorage.setItem('loginname', loginmsg.loginname);
            localStorage.setItem('token', loginmsg.token);
            state.loginname = loginmsg.loginname;
            state.token = loginmsg.token;
        },
        
    },
    getters: {
            namelen:state=>{ return state.loginname.length;}
    },
    actions: {
        getUnreadMessages({ commit, state }, payload) {
            api.getUnreadMessages({
                accesstoken: payload.accesstoken
            })
                .then((res) => {
                    let result = res['data'];
                    if (result.success) {
                        commit('updateMessage', { messageCount: result.data })
                    }
                })
        }
    }
})
