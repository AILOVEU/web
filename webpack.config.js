const path = require('path');
const config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname+'/dist'),
    filename: '[name].build.js'
  }
}
module.exports = config;