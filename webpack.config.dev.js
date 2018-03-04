const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'lib', 'index.jsx'),
  output: {
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /(\.less|\.css)$/,
      use: ['css-loader', 'less-loader'],
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_module/,
      loader: 'babel-loader',
    }],
  },
  mode: 'development'
};
