export const MENU_CONFIG = [
    // 用户管理
    {
        title: "用户管理",
        index: '/user',
        icon: 'iconfont icon-yonghuguanli',
        items: [
            // 查看用户
            {
                title: "查看用户",
                index: '/user/list',
            },
        ],
    },
    // 产品管理
    {
        title: "产品管理",
        index: '/product',
        icon: 'iconfont icon-base_goodchanpinguanli',
        subMenu: [
            // 水产品
            {
                title: "水产品",
                index: '/product/aquatic',
                icon: 'iconfont icon-yangzhiqujiancejinyong',
                items: [
                    {
                        title: "添加水产品",
                        index: '/product/aquatic/add',
                    },
                    {
                        title: "查看水产品",
                        index: '/product/aquatic/list',
                    },
                ]
            },
            // 水果
            {
                title: "水果",
                index: '/product/fruit',
                icon: 'iconfont icon-shuiguolei',
                items: [
                    {
                        title: "添加水果",
                        index: '/product/fruit/add',
                    },
                    {
                        title: "查看水果",
                        index: '/product/fruit/list',
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
        items: [
            // 查看订单
            {
                title: "查看订单",
                index: '/order/list',
            },
        ],
    },
]