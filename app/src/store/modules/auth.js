import _Auth from "@/classes/Auth";
import router from "@/router";

export const state = {
    isLoggedIn: false,
    loggedUser: {},
};

export const mutations = {
    SET_LOGGED_IN(state, status) {
        state.isLoggedIn = status
    },
    SET_USER_DATA(state, payload) {
        state.loggedUser = payload
    },
};

export const actions = {
    async login({ commit, dispatch }, payload) {
        const _auth = new _Auth();
        dispatch('setUserLogged');
        dispatch('setUserObject', payload)
        _auth.storeUser(payload)
        router.push({name:'Todos'})
    },
    setUserLogged({ commit }) {
        commit('SET_LOGGED_IN', true);
    },
    setUserObject({ commit }, user) {
        commit('SET_USER_DATA', user);
    },
    logout({ commit }) {
        commit('SET_LOGGED_IN', false);
        window.location.reload();
    },
};

export const getters = {
    isLoggedIn: (state) => {
        return state.isLoggedIn
    },
    loggedUser: (state) => {
        return state.loggedUser
    },
};
