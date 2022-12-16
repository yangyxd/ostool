/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: false,
  assetsDir: 'assets',
  productionSourceMap: false,
  // 启动命令指定端口： npm run serve -- --port 8081
  // devServer: {
  //   port: 8081,
  // },
  chainWebpack: (config) => {
    config.plugin('html')
      .tap((args) => {
        args[0].title = '在线工具'
        return args
      })
    // console.log('npm_config_report', process.env.npm_config_report)
    if (process.env.npm_config_report) {
      config.plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  }
})
