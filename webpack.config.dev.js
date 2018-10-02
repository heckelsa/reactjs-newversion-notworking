const merge = require("webpack-merge");
var path = require('path');

const commonConfig = require("./webpack.config.common")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// use later on when js size matters
var BUILD_DIR = path.resolve(__dirname, 'bundle');


var config = merge(commonConfig, {
  devtool: 'inline-source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'report.html',
      openAnalyzer: false,
      defaultSizes: 'gzip'
    }) // use later on when js size matters
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: BUILD_DIR,
    port: 9000
  }
});

module.exports = config;
