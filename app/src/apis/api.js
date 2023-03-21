import axios from "axios";
import store from "@/store";


// Create General Axios Request..
const BaseApi = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 50000, // request timeout
});

const Api = function () {
    BaseApi.defaults.headers.common["Accept"] = `application/json`;
    return BaseApi;
};

BaseApi.interceptors.request.use(async (config) => {
    const checkLogged = await store.getters['auth/isLoggedIn'];
	const loggedUser = await store.getters['auth/loggedUser'];

    if (checkLogged && loggedUser) {
        config.headers['Authorization'] = `Basic enVja2VyOjEyMzQ1Ng==`;
        config.auth = loggedUser;
    }

    return config;

}, (error) => {
    return Promise.reject(error);
});

export default Api;

