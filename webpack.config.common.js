const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'bundle')
const APP_DIR = path.resolve(__dirname, 'src')

const config = {
  entry: `${APP_DIR}/app.jsx`,
  output: {
    path: BUILD_DIR,
    chunkFilename: '[name].bundle.js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
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
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

module.exports = config
