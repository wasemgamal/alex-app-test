import store from '@/store';
export default class Auth {
    constructor() { }
    userLocal = 'user';
    storeUser(user) {
        localStorage.setItem(this.userLocal, JSON.stringify(user));
    }
    getUserLocal() {
        let user = localStorage.getItem(this.userLocal);
        return (user ? JSON.parse(user) : null);
    }
    removeUser() {
        localStorage.removeItem(this.userLocal);
    }
    logout() {
        this.removeUser();
        store.dispatch('auth/logout', { root: true });
    }
}
