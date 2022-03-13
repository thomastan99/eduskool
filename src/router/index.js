import { createRouter, createWebHistory } from "vue-router"
import LeaderboardMath from '@/views/LeaderboardMath.vue'
import LeaderboardEng from '@/views/LeaderboardEng.vue'
import LeaderboardSci from '@/views/LeaderboardSci.vue'

const routes = [
    {
        path: '/LeaderboardMath',
        name: "LeaderboardMath",
        component: LeaderboardMath
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