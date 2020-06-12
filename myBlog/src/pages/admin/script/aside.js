const routes = [
    {
        path: '/',
        name: 'index',
        component: ()=>import('../views/Index'),
        redirect: '/userAdd',
        children: [
            {
                path: "/user",
                name: "user",
                component: ()=>import('../views/User'),
                meta: {
                    name: "用户管理",
                    icon: 'el-icon-user'
                },
                children: [
                    {
                        path: '/userAdd',
                        name: "userAdd",
                        component: ()=>import('../views/UserAdd'),
                        meta: {
                            name: "用户添加"
                        }
                    },
                    {
                        path: '/userList',
                        name: "userList",
                        component: ()=>import('../views/UserList'),
                        meta: {
                            name: "用户列表"
                        }
                    }
                ]
            },
            {
                path: '/goods',
                name: 'goods',
                component: ()=>import('../views/News'),
                meta: {
                    name: "新闻管理",
                    icon: 'el-icon-news'
                },
                children: [
                    {
                        path: '/newsAdd',
                        name: "newsAdd",
                        component: ()=>import('../views/NewsAdd'),
                        meta: {
                            name: "新闻添加"
                        }
                    },
                    {
                        path: '/newsList',
                        name: "newsList",
                        component: ()=>import('../views/NewsList'),
                        meta: {
                            name: "新闻列表"
                        }
                    }
                ]
            }
        ]
    },
    {
        path: '/Login',
        component: ()=>import('../views/Login')
    }
]

export default routes