import Api from "@/apis/todos";
import { helperMixin } from "@/mixins/helper";

export const state = {
    userTodos: [],
};

export const mutations = {
    SET_USER_TODOS(state, list) {
        state.userTodos = list
    },
};

export const actions = {
    async getUserTodos({ commit }) {
        await Api.getUserTodos().then(response => {
            if (response.status === 200) {
                commit('SET_USER_TODOS', response.data);
            }
        })
    },
    async createUserTodo({ commit, getters }, payload) {
        await Api.createUserTodo(payload).then(response => {
            if (response.status === 200) {
                commit('SET_USER_TODOS', [...getters.userTodos, response.data]);
            }
        })
    },
    async updateTodoCompletion({ commit }, id) {
        await Api.updateTodoCompletion(id).then(response => {
            if (response.status === 200) {
                // commit('SET_USER_TODOS', response.data);
            }
        })
    },
    async deleteTodo({ commit, getters }, {id,index}) {
        await Api.deleteTodo(id).then(response => {
            if (response.status === 200) {
                commit('SET_USER_TODOS', helperMixin.methods.removeArrayItemByIndex(JSON.parse(JSON.stringify(getters.userTodos)),index));
            }
        })
    },
};

export const getters = {
    userTodos: (state) => {
        return state.userTodos
    },
};
