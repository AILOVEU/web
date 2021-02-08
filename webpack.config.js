const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].build.js'
  },
  // loaders
  module: {
    rules: [
      {
        // *.vue
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        // `*.vue` 文件中的 `<style>` 块以及普通的`*.css`
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // 生成的文件名
      template: 'public/index.html', // 模板html
      favicon: 'public/favicon.ico' // 图标
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // html所在路径
    compress: true, // 是否压缩
    port: 3000, // 端口
    hot: true, // 热部署
    open: true // 打包完成后自动打开网页
  }
}
module.exports = config;