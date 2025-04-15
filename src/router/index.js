import { createRouter, createWebHashHistory } from 'vue-router'
import { CONFIG } from '../config/index.js'

const Index = ()=> import('../views/Index.vue')
const Login = () => import('../views/Login.vue')

const routes = [
    {
        name: 'login',
        path:'/login',
        component: Login,
    },
    {
        name: 'index',
        path:'/',
        component: Index,
    },
    {
        path: '/home',
        redirect: '/',
    },
]

// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// 全局前置路由守卫
router.beforeEach((to, from, next)=>{
    const toLogin = to.path.indexOf('/login')
    const tokenVal = window.localStorage.getItem(CONFIG.TOKEN_NAME)
    console.log(toLogin);
    console.log(tokenVal);
    if (toLogin == 0 && tokenVal){
        next('/')
    }else if(toLogin == 0 && !tokenVal) {
        next()
    }else if( tokenVal ){
        next()
    }else {
        next('/login')
    }
})

// 导出路由实例
export default router