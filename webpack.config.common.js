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
    rules:
      [
        {
          test: /\.jsx?/,
          include: APP_DIR,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/react'],
              plugins: [
                '@babel/syntax-dynamic-import',
              ],
            }
          }
        },
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader']
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