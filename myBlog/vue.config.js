module.exports = {
    devServer: {
        host: 'localhost',
        open: true,
        port: 9000,
        https: false,
        proxy: {
            '/':{
                target: 'http://localhost/blogsApi/',
                ws: false,
                changeOrigin:true,
                pathRewrite: {
                    '^/':''
                }
            }
        }
    },
    pages: {
        index: {
            entry: 'src/pages/index/index.js',
            template: 'src/pages/index/index.html',
            filename: 'index.html',
            title: '首页'
        },
        admin: {
            entry: 'src/pages/admin/admin.js',
            template: 'src/pages/admin/admin.html',
            filename: 'admin.html',
            title: '后台'
        }
    },
    assetsDir: './static',
    publicPath: './'
}