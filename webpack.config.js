const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './app/index.js',
  output: {
   path: path.resolve(__dirname, 'dist'),
   filename: 'bundle.js',
   publicPath: '/'
 },
 module: {
   rules: [
     {test: /\.(js|jsx)$/, use: 'babel-loader'},
     // above will look in package.json for babel property
     {test: /\.css$/, use: ['style-loader', 'css-loader']}
   ]
 },
 devServer: {
   historyApiFallback: true
 },
 plugins: [
   new HtmlWebpackPlugin({
     template: 'app/index.html'
   })
 ]
}

module.exports = config;
