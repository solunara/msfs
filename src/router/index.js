import { createRouter, createWebHashHistory } from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import Login from '../views/Login.vue'

const routes = [
    {
        path:'/index',
        component: HelloWorld,
    },
    {
        name: 'login',
        path:'/',
        component: Login,
    },
]

// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// 导出路由实例
export default router