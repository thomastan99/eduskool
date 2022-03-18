import { createRouter, createWebHistory } from "vue-router"
import TeachersHome from '@/views/TeachersHome.vue'
import TeachersScoreboard from '@/views/TeachersScoreboard.vue'
import TeachersCS from '@/views/TeachersCS.vue'

const routes = [
    {
        path: '/',
        name: 'TeachersHome',
        component: TeachersHome,
    },
    {
        path: '/teachersscoreboard',
        name: 'TeachersScoreboard',
        component: TeachersScoreboard,
    },
    {
        path: '/teacherscs',
        name: 'TeachersCS',
        component: TeachersCS
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router 