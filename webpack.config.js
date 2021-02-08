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
      filename: 'index.html',
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    })
  ]
}
module.exports = config;