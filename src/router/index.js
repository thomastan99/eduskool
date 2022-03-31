import { createRouter, createWebHistory } from "vue-router"
import Homepage from '@/views/Homepage.vue'
import LeaderboardMath from '@/views/LeaderboardMath.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import TeachersHome from '@/views/TeachersHome.vue'
import TeachersScoreboard from '@/views/TeachersScoreboard.vue'
import TeachersCS from '@/views/TeachersCS.vue'
import Quiz from '@/views/Quiz.vue'
import Ready from '@/views/Ready.vue'
import Profile from '@/views/Profile.vue'
import TopicsView from '@/views/TopicsView.vue'
import TeachersAnnouncements from '@/views/TeachersAnnouncements.vue'
import P5Maths from '@/views/P5Maths.vue'
import P5English from '@/views/P5English.vue'
import P5Science from '@/views/P5Science.vue'
import P6Maths from '@/views/P6Maths.vue'
import P6English from '@/views/P6English.vue'
import P6Science from '@/views/P6Science.vue'
import AchievementsPage from '@/views/AchievementsPage.vue'
import Classes from '@/views/Classes.vue'
import StudentAnnouncemnets from '@/views/StudentAnnouncements.vue'
import ViewStats from '@/views/ViewStats.vue'
import EditProfile from '@/views/EditProfile.vue'
import EditPic from '@/views/EditPic.vue'

const routes = [
    {   path: '/home',
    name: 'Homepage',
    component: Homepage
    },
    {
        path: "/ready",
        name: "Ready",
        component: Ready
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
        component: TeachersCS,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },{
        path: '/topicsView',
        name: 'TopicsView',
        component: TopicsView,
    },
    {
        path: '/p5maths',
        name: 'P5Maths',
        component: P5Maths,
    },
    {
        path: '/p5english',
        name: 'P5English',
        component: P5English,
    },
    {
        path: '/p5science',
        name: 'P5Science',
        component: P5Science,
    },
    {
        path: '/p6maths',
        name: 'P6Maths',
        component: P6Maths,
    },
    {
        path: '/p6english',
        name: 'P6English',
        component: P6English,
    },
    {
        path: '/p6science',
        name: 'P6Science',
        component: P6Science,
    },
    {
        path: '/achievements',
        name: 'AchievementsPage',
        component: AchievementsPage,
    },
    {
        path: '/classes',
        name: 'Classes',
        component: Classes,
    },
    {

        path: '/teachersannouncements',
        name: 'TeachersAnnouncements',
        component: TeachersAnnouncements
    },
    {
        path: '/studentsannouncements',
        name: 'StudentsAnnouncements',
        component: StudentAnnouncemnets
    },
    {
        path: '/viewstats',
        name: 'ViewStats',
        component: ViewStats
    },
    {
        path: '/editprofile',
        name: 'EditProfile',
        component: EditProfile,
    },
    {
        path: '/editPic',
        name: 'EditPic',
        component: EditPic,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 