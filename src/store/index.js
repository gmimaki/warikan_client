import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userId: 0,
    },
    mutations: {
        updateUserId(state, userId) {
            state.userId = userId;
        }
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    },
    plugins: [createPersistedState({
        key: "userId",
        storage: window.localStorage,
    })]
});