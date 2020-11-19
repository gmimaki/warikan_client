import Vue from 'vue';
import Vuex from 'vuex';

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
    }
})