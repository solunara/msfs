const Layout = ()=> import('../views/layout/Layout.vue')

const userRoutes = {
    name: 'user',
    path:'/user',
    component: Layout,
    redirect: '/user/list',
    children: [
        {
            path: 'add',
            component: ()=> import('../views/user/Add.vue')
        },
        {
            path: 'list',
            component: ()=> import('../views/user/List.vue')
        }
    ],
}

export default userRoutes