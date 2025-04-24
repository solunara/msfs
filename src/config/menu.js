export const MENU_CONFIG = [
    // 用户管理
    {
        title: "用户管理",
        index: '/user',
        icon: 'iconfont icon-yonghuguanli',
        key: 'userManagement',
        items: [
            // 查看用户
            {
                title: "查看用户",
                index: '/user/list',
                key: 'viewUser',
            },
            // 穿梭框
            {
                title: "穿梭框",
                index: '/user/shuttle',
                key: 'shuttleBox',
            },
            // 轮播图
            {
                title: "轮播图",
                index: '/user/carousel',
                key: 'carousel',
            },
        ],
    },
    // 产品管理
    {
        title: "产品管理",
        index: '/product',
        icon: 'iconfont icon-base_goodchanpinguanli',
        key: 'productManagement',
        subMenu: [
            // 蔬菜
            {
                title: "蔬菜",
                index: '/product/vegetable',
                icon: 'iconfont icon-yangzhiqujiancejinyong',
                key: 'vegetable',
                items: [
                    {
                        title: "添加蔬菜",
                        index: '/product/vegetable/add',
                        key: 'addVegetable',
                    },
                    {
                        title: "查看蔬菜",
                        index: '/product/vegetable/list',
                        key: 'viewVegetable',
                    },
                ]
            },
            // 水果
            {
                title: "水果",
                index: '/product/fruit',
                icon: 'iconfont icon-shuiguolei',
                key: 'fruit',
                items: [
                    {
                        title: "添加水果",
                        index: '/product/fruit/add',
                        key: 'addFruit',
                    },
                    {
                        title: "查看水果",
                        index: '/product/fruit/list',
                        key: 'viewFruit',
                    },
                ]
            },
        ],
    },
    // 订单管理
    {
        title: "订单管理",
        index: '/order',
        icon: 'iconfont icon-dingdanguanli',
        key: 'orderManagement',
        items: [
            // 查看订单
            {
                title: "查看订单",
                index: '/order/list',
                key: 'viewOrder',
            },
        ],
    },
]