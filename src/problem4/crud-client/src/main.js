import { createApp } from 'vue'
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import App from './App.vue'


import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import AddNewUserView from './views/AddNewUserView.vue'
import EditUserView from './views/EditUserView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/add', component: AddNewUserView },
    { path: '/edit/:id', component: EditUserView }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
