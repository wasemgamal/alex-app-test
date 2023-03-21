import router from '@/router';
export const helperMixin = {
    methods: {
        removeArrayItemByIndex(array, index) {
            array.splice(index, 1);
            return array
        }, 
        async unAuthRedirect(route) {
            let appState = {
                name: route.name,
                fullPath: route.fullPath,
                path: route.path,
                query: route.query,
                params: route.params
            };
            await router.push({
                name: 'Login',
                query: {
                    state: btoa(unescape(encodeURIComponent(JSON.stringify(appState))))
                }
            });
        },
        async authRedirect(route){
            const currentUrl = route.currentRoute.value
            let state = currentUrl.query.state;
            let url = JSON.parse(atob(state));
            await router.push({
                name: url.name
            });
        },
    },
}