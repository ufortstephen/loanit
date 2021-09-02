import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"


Vue.use(Vuex)


const defaultState = function() {
    return {
        token: "",
        userData: "",
        sidebarShow: 'responsive',
        sidebarMinimize: false
    }
}

export default new Vuex.Store({
    strict: true,
    state: defaultState,
    plugins: [createPersistedState()],
    getters: {
        isLoggedIn: state => {
            return state.token
        },
        getUser: state => {
            return state.userData
        }
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_USER: (state, userData) => {
            state.userData = userData
        },
        RESET: state => {
            Object.assign(state, defaultState())
        },
        toggleSidebarDesktop(state) {
            const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
            state.sidebarShow = sidebarOpened ? false : 'responsive'
        },
        toggleSidebarMobile(state) {
            const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
            state.sidebarShow = sidebarClosed ? true : 'responsive'
        },
        set(state, [variable, value]) {
            state[variable] = value
        }
    },
    actions: {
        login: ({ commit }, { token, userData }) => {
            commit('SET_TOKEN', token);
            commit('SET_USER', userData)
        },
        logout: ({ commit }) => {
            commit('RESET', '')
        }
    },

})