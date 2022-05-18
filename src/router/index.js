import {createRouter, createWebHashHistory}  from 'vue-router'
import AppList from '../views/AppList'
import AppPanel from '../views/AppPanel'
const routes = [
    { name:'index',path: '/', component: AppList },
    { name:'panel',path: '/panel', component: AppPanel },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
