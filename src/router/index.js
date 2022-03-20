import { createRouter, createWebHistory } from "vue-router"
import MathsTopics from '@/views/MathsTopics.vue'
import Homepage from '@/views/Homepage.vue'
const routes = [
    {   path: '/',
    name: 'Homepage',
    component: Homepage
    },

    {
        path: '/mathstopics',
        name: 'MathsTopics',
        component: MathsTopics
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 