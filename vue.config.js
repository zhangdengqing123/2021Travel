const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir) // 配置绝对路径
}

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: { // 路径更改
          '^/api': '/mock' // 指定mock目录下文件
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('pages', resolve('./src/pages'))
      .set('components', resolve('./src/pages/home/components'))
      .set('assets', resolve('./src/assets'))
  }
}