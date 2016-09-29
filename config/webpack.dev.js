const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const precss = require('precss');
const cssnext = require('postcss-cssnext');
const babelConfig = require('./babel.dev');

const ROOT_PATH = path.join(__dirname, '..');
const SRC_PATH = path.join(ROOT_PATH, 'src');
const BUILD_PATH = path.join(ROOT_PATH, 'build');
const PUBLIC_PATH = path.join(ROOT_PATH, 'public');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client',
    'webpack/hot/dev-server',
    path.join(SRC_PATH, 'index')
  ],
  resolve: {
    extensions: ['', '.js', '.json'],
    alias: {
      src: SRC_PATH // this allows import 'src/Component'
    }
  },
  output: {
    path: BUILD_PATH,
    // In development, we always serve from the root. This makes config easier.
    publicPath: '/',
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      include: SRC_PATH,
      loader: 'eslint'
    }],
    loaders: [{
      test: /\.js$/,
      include: SRC_PATH,
      loader: 'babel',
      query: babelConfig
    }, {
      test: /\.css$/,
      include: SRC_PATH,
      loader: 'style!css!postcss'
    }, {
      test: /\.json$/,
      include: SRC_PATH,
      loader: 'json'
    }, {
      test: /\.(eot|otf|ttf|woff|woff2)(\?.*)?$/,
      include: SRC_PATH,
      loader: 'file',
      query: {
        name: 'fonts/[name].[hash:8].[ext]'
      }
    }, {
      test: /\.(jpg|jpeg|png|gif|svg|ico|webp)(\?.*)?$/,
      include: SRC_PATH,
      loader: 'file',
      query: {
        name: 'media/[name].[hash:8].[ext]'
      }
    }, {
      test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
      include: SRC_PATH,
      loader: 'url',
      query: {
        limit: 10000,
        name: 'media/[name].[hash:8].[ext]'
      }
    }]
  },
  postcss() {
    return [precss, cssnext({
      browsers: [
        '>1%',
        'last 2 versions',
        'Firefox ESR',
        'not ie < 9'
      ]
    })];
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(PUBLIC_PATH, 'index.html'),
      favicon: path.join(PUBLIC_PATH, 'favicon.ico')
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin()
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
