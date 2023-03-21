import { createRouter, createWebHashHistory } from 'vue-router'
import { guestGuard, authGuard } from "@/utils/guards/authGuard";

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import("@/views/Auth/Login"),
    beforeEnter: [guestGuard]
  },
  {
    path: '/todos',
    name: 'Todos',
    component: () => import("@/views/Todos"),
    beforeEnter: [authGuard]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
