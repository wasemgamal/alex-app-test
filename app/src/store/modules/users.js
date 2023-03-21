import Api from "@/apis/users";

export const state = {
    users: [],
};

export const mutations = {
    SET_USERS_LIST(state, list) {
        state.users = list
    },
};

export const actions = {
    async getUsersList({ commit }) {
        await Api.getUsersList().then(response => {
            if (response.status === 200) {
                commit('SET_USERS_LIST', response.data);
            }
        })
    },
};

export const getters = {
    users: (state) => {
        return state.users
    },
};
