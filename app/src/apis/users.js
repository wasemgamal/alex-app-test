import Api from "./api";

const END_POINT = '/users';

export default {
    async getUsersList() {
        try {
            return await Api().get(`${END_POINT}`);
        } catch (error) {
            return Promise.reject(error);
        }
    },
};