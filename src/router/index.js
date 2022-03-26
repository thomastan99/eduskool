import { createRouter, createWebHistory } from "vue-router"
import MathsTopics from '@/views/MathsTopics.vue'
import Homepage from '@/views/Homepage.vue'
import LeaderboardMath from '@/views/LeaderboardMath.vue'
import LeaderboardEng from '@/views/LeaderboardEng.vue'
import LeaderboardSci from '@/views/LeaderboardSci.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import TeachersHome from '@/views/TeachersHome.vue'
import TeachersScoreboard from '@/views/TeachersScoreboard.vue'
import TeachersCS from '@/views/TeachersCS.vue'
import Quiz from '@/views/Quiz.vue'
import TeachersAnnouncements from '@/views/TeachersAnnouncements.vue'

const routes = [
    {   path: '/home',
    name: 'Homepage',
    component: Homepage
    },

    {
        path: '/mathstopics',
        name: 'MathsTopics',
        component: MathsTopics
    },
    {
        path: '/quiz',
        name: "Quiz",
        component: Quiz
    },
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
    },
    {
        path: '/TeachersHome',
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
    {
        path: '/teachersannouncements',
        name: 'TeachersAnnouncements',
        component: TeachersAnnouncements
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 