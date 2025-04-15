import Index from "../views/layout/Index.vue";

export const MENU_CONFIG = [
    // 用户菜单
    {
        title: "用户管理",
        index: '/user',
        icon: '',
        items: [
            // 添加用户
            {
                title: "添加用户",
                index: '/user/add',
            },
            // 查看用户
            {
                title: "查看用户",
                index: '/user/list',
            },
        ],
    },
]