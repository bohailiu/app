const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  assetsDir: 'static',
  parallel: false,
  publicPath: './',

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/api':''},//去掉api
        ws: true,
        changeOrigin: true//控制请求头的host值
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''},
        ws: true,
        changeOrigin: true//控制请求头的host值
      }
    }
  }
})
