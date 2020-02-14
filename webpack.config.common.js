const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'public/bundle')
const APP_DIR = path.resolve(__dirname, 'reactjs/src')

const config = {
  entry: `${APP_DIR}/app.jsx`,
  output: {
    path: BUILD_DIR,
    chunkFilename: '[name].bundle.js',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

module.exports = config
/**
 * loaders: [
 {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
 {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
 ]
 **/