import Api from "./api";

const END_POINT = 'userManagement/user';

export default {
    async loginUser(payload) {
        try {
            return await Api().post(`${END_POINT}/Login?Username=${payload.Username}&Password=${payload.Password}`, payload);
        } catch (error) {
            return Promise.reject(error);
        }
    },
};