const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'lib', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  mode: 'production',
  externals: {
    react: 'react'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }, {
		    test: /\.less$/,
	      use: ['css-loader', 'less-loader'],
        // use: ['style-loader', 'css-loader']
      }
    ]
  }
};