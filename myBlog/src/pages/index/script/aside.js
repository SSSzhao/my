const routes = [
    {
        path: '/',
        name: 'indexMain',
        component: ()=>import('../views/IndexMain'),
        meta: {
            index: '1',
            name: '首页',
            icon: 'el-icon-s-home',
            leftNav: true
        }
    },
    {
        path: '/about',
        name: 'about',
        component: ()=>import('../views/About'),
        meta: {
            index: '2',
            name: '关于',
            icon: 'el-icon-user-solid',
            leftNav: true
        }
    },
    {
        path: '/works',
        name: 'works',
        component: ()=>import('../views/Works'),
        meta: {
            index: '3',
            name: '作品集',
            icon: 'el-icon-s-cooperation',
            leftNav: true
        }
    },
    {
        path: '/blog',
        name: 'blog',
        component: ()=>import('../views/Blog'),
        meta: {
            index: '4',
            name: '博客',
            icon: 'el-icon-message',
            leftNav: true
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: ()=>import('../views/Contact'),
        meta: {
            index: '5',
            name: '联系',
            icon: 'el-icon-phone',
            leftNav: true
        }
    },
    {
        path: '/blogDetails/:id',
        name: 'blogDetails',
        component: ()=>import('../views/BlogDetails'),
        props: true
    }
]

export default routes