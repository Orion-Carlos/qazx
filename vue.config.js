const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  // 选项...
  publicPath: process.env.NODE_ENV === 'production'
    ? 'mobile/'
    : '/',
  outputDir: 'mobile',
  assetsDir: '',
  devServer: {
    open: true,
    proxy: {
      '/api': {
        //本地
        target: 'http://localhost:31001',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''   //需要rewrite重写的,
        }
      }
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    // config.externals(['vue', 'vue-router','vuex','axios'])
  },
  configureWebpack: (config) => {
    // 生产打包配置
    // config.externals = {
    //   'vue': 'Vue',
    //   'vue-router': 'VueRouter',
    //   'vuex': 'Vuex',
    //   'axios': 'axios'
    // }
    let prd_plugins = [
      //删除console插件
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log']
          },
          output: {
            // 去掉注释内容
            comments: false,
          }
        },
        sourceMap: false,
        parallel: true,
      })
    ]
    if (process.env.NODE_ENV == 'production') {
      config.plugins = [...config.plugins, ...prd_plugins]
    }
  }
}