import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        navIndex: '1',
        blogs: [
            {
                id: 1,
                title: '掘千亿车载导航市场',
                img: require("../assets/01.webp"),
                date: '2019-12-17',
                writer: '网站管理员',
                num: 10
            },
            {
                id: 2,
                title: '全面采用云服务器',
                img: require("../assets/02.webp"),
                date: '2019-12-17',
                writer: '网站管理员',
                num: 12
            },
            {
                id: 3,
                title: '双面屏连接微信大生态',
                img: require("../assets/03.webp"),
                date: '2019-12-17',
                writer: '网站管理员',
                num: 8
            },
            {
                id: 4,
                title: '新消费智慧营销峰会',
                img: require("../assets/04.webp"),
                date: '2019-12-17',
                writer: '网站管理员',
                num: 20
            },
            {
                id: 5,
                title: '千岛湖启用睿沃智能',
                img: require("../assets/05.webp"),
                date: '2019-12-17',
                writer: '网站管理员',
                num: 15
            },
            {
                id: 6,
                title: '怎么用数据思维做设计',
                img: require("../assets/06.webp"),
                date: '2019-12-17',
                writer: '网站管理员',
                num: 18
            },
        ]
    },
    getters: {
        getNavIndex: state => state.navIndex,
        getBlogs: state => state.blogs
    },
    mutations: {
        setNavIndex(state, index) {
            state.navIndex = index
        }
    }
})

export default store