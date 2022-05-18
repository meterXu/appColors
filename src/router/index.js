import {createRouter, createWebHashHistory}  from 'vue-router'
import AppList from '../views/AppList'
const routes = [
    { path: '/', component: AppList },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
