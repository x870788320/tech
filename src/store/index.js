import Vue from "vue"
import Vuex from 'vuex'
import { getTest1 } from "@/config/until/interface"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userVipGrade:"",
        displayKeys: [],
        isLogin: true,
        rejectTest: false
    },
    mutations: {
        updateDisplayKeys(state, payload) {
            state.displayKeys = payload
        },
        updateUserVipGrade(state, payload) {
            state.userVipGrade = payload
        }
    },
    actions: {
        async getPowerList({ state, commit }) {
            if (state.displayKeys.length) return;

            //模拟异步拿到数据
            const list = await new Promise((resolve, reject) =>
                setTimeout(() => {
                    //这个判断是为了做异常测试
                    if (state.rejectTest) {
                        reject();
                    }
                    resolve([1, 2, 3, 4, 5])
                }, 10))

            commit("updateDisplayKeys", list)
        },
        async getUserVipGrade({ state, commit }) {
            if (state.userVipGrade) return;
            //模拟异步拿到数据
            const userVipGrade = await new Promise((resolve, reject) =>
                setTimeout(() => {
                    //这个判断是为了做异常测试
                    if (state.rejectTest) {
                        reject();
                    }
                    //模拟用户为vip3
                    resolve("v1")
                }, 10))

            commit("updateUserVipGrade", userVipGrade)
        },
        getTest({ state, commit }, userInfo){
            const { username, password } = userInfo
            return new Promise((resolve, reject) => {
                getTest1({ accountName: username.trim(), accountPwd: password })
                .then(response => {
                    const { data } = response.data
                    // console.log('dd', data)
                    commit('SET_TOKEN', data.token)
                    commit('SET_ID', data.account.accountId)
                    setToken(data.token)
                    setAid(data.account.accountId)
                    resolve({roles:"TEST"})
                }).catch(error => {
                    reject(error)
                })
            })
        }
        //const { roles } = await store.dispatch('user/getTest')
    },
    getters: {
        aas() {
            return "SSSSS"
        }
    },
    modules: {}
})