import { createRouter, createWebHistory } from "vue-router"
import LeaderboardMath from '@/views/LeaderboardMath.vue'
import LeaderboardEng from '@/views/LeaderboardEng.vue'
import LeaderboardSci from '@/views/LeaderboardSci.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'



const routes = [
    {
        path:'/',
        name: "Register",
        component: Register
    },
    {
        path: '/login',
        name: "Login",
        component: Login,
    },
    {
        path: '/LeaderboardMath',
        name: "LeaderboardMath",
        component: LeaderboardMath,
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/LeaderboardEng',
        name: "LeaderboardEng",
        component: LeaderboardEng
    },
    {
        path: '/LeaderboardSci',
        name: "LeaderboardSci",
        component: LeaderboardSci
    }
 
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router 