import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

createApp(App).use(store).use(router).use(VueChartkick).mount('#app')