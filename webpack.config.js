const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname+'/dist'),
    filename: '[name].build.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // 生成的文件名
      template: 'public/index.html', // 模板html
      favicon: 'public/favicon.ico' // 图标
    })
  ],
  devServer: {
    contentBase: path.join(__dirname,'dist'), // html所在路径
    compress: true, // 是否压缩
    port: 3000, // 端口
    hot: true, // 热部署
    open: true // 打包完成后自动打开网页
  }
}
module.exports = config;