const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'lib', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'react-github-calendar.js',
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
  },
  devServer: {
    contentBase: path.join(__dirname, 'example')
  },
  plugins: [
		new webpack.EnvironmentPlugin({
		  NODE_ENV: 'production',
		  access_token: 'f096866b34da0bea4eab0483465e9a9f20dfc3d5',
		  DEBUG: false,
		}),
  	]
};