import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            id: 0,
            name: "",
        }
    },
    mutations: {
        updateUser(state, user) {
            state.user = user;
        }
    },
    getters: {
        user(state) {
            return state.user;
        }
    },
    plugins: [createPersistedState({
        key: "warikan_gmimaki",
        storage: window.localStorage,
    })]
});