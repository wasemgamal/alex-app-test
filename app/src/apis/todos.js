import Api from "./api";

const END_POINT = '/todos';

export default {
    async getUserTodos() {
        try {
            return await Api().get(`${END_POINT}`);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    async createUserTodo(payload) {
        try {
            return await Api().post(`${END_POINT}`, payload);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    async updateTodoCompletion(id) {
        try {
            return await Api().put(`${END_POINT}/${id}`, null);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    async deleteTodo(id) {
        try {
            return await Api().delete(`${END_POINT}/${id}`);
        } catch (error) {
            return Promise.reject(error);
        }
    },
};