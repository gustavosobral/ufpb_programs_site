var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

require('es6-promise').polyfill();

module.exports = {
  entry: path.join(__dirname, 'app', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build')
  },
  resolve: {
    root: [
      path.resolve('./app')
    ],
    moduleDirectories: [
      'node_modules'
    ]
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['ng-annotate'] },
      { test: /\.html$/, loaders: ['ngtemplate', 'html?root=true&interpolate'] },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.(jpg|png)$/, loader: 'url-loader' },
      { test: /\.svg$/, loader: 'file-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'app', 'index.template.ejs')
    })
  ]
};
