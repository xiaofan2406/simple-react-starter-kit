const webpack = require('webpack');
const paths = require('./paths');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getLocalIP = require('./local-ip');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    `${paths.appDir}/index.js`
  ],
  resolve: common.resolve,
  output: {
    // For dev, `path` and `filename` are not important because of using webpack-dev-server
    path: paths.buildDir,
    filename: 'bundle.js',
    // In development, we always serve from the root. This makes config easier.
    publicPath: '/',
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true
  },
  module: {
    rules: [
      ...common.rules,
      {
        test: /\.js$/,
        include: paths.appDir,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }      
    ]
  },
  node: common.node,
  performance: { hints: false },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: `${paths.appDir}/index.html`,
      favicon: `${paths.appDir}/favicon.ico`
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    compress: true,
    contentBase: paths.buildDir,
    hot: true,
    publicPath: '/',
    stats: 'errors-only',
    watchOptions: {
      ignored: /node_modules/
    },
    host: process.env.HOST || getLocalIP(),
    port: process.env.PORT || 8080
  }
};
