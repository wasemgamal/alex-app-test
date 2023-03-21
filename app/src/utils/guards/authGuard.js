import store from "@/store";
import router from '@/router'

/**
 * This is Guard for check User is Authentication.
 * @param to
 * @param from
 * @param next
 * @returns {Promise<*>}
 */
export const authGuard = async (to, from, next) => {
    // Check if the user is loggedIn.
    const isLoggedIn = await store.getters["auth/isLoggedIn"];
    if(!isLoggedIn){
        router.push({name: 'Login'})
    }
    return next();    
};

/**
 This is Guard for check User is Guest.
 * @param to
 * @param from
 * @param next
 * @returns {Promise<*>}
 */
export const guestGuard = async (to, from, next) => {
    // If the user is authenticated, continue with the route
    const isLoggedIn = await store.getters["auth/isLoggedIn"];
    if(!isLoggedIn){
        return next();  
    }
    router.push({name:'Todos'})
};
