module.exports = {
    runtimeCompiler: true,
    publicPath: './',  //输出的根路径  默认是/ 如果你的网站是app.com/vue 这更改此配置项
    // 设为false打包时不生成.map文件
    productionSourceMap: false,
    // 这就是你需要配置的CSS
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 37.5,
                    }),
                ],
            },
        },
    },
    configureWebpack: {
        resolve: {
            // 配置路径别名
            alias: {
                // "@": "src" 脚手架3.x默认已经配置过了，直接使用这个别名即可
            },
        },
    },
}