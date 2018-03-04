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
  mode: 'development',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      access_token: 'f096866b34da0bea4eab0483465e9a9f20dfc3d5',
      DEBUG: false,
    }),
  ]
};
