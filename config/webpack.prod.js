const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const precss = require('precss');
const cssnext = require('postcss-cssnext');
const babelConfig = require('./babel.prod');

const ROOT_PATH = path.join(__dirname, '..');
const SRC_PATH = path.join(ROOT_PATH, 'src');
const BUILD_PATH = path.join(ROOT_PATH, 'build');
const PUBLIC_PATH = path.join(ROOT_PATH, 'public');
const NODEMODULES_PATH = path.join(ROOT_PATH, 'node_modules');

module.exports = {
  // Don't attempt to continue if there are any errors.
  bail: true,
  // We generate sourcemaps in production. This is slow but gives good results.
  // You can exclude the *.map files from the build during deployment.
  devtool: 'source-map',
  entry: [
    path.join(SRC_PATH, 'index')
  ],
  resolve: {
    // This allows you to set a fallback for where Webpack should look for modules.
    // We read `NODE_PATH` environment variable in `paths.js` and pass paths here.
    // We use `fallback` instead of `root` because we want `node_modules` to "win"
    // if there any conflicts. This matches Node resolution mechanism.
    // https://github.com/facebookincubator/create-react-app/issues/253
    fallback: NODEMODULES_PATH,
    extensions: ['', '.js', '.json'],
    alias: {
      src: SRC_PATH // this allows import 'src/Component'
    }
  },
  output: {
    path: BUILD_PATH,
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    publicPath: '/' // still confused what does this do for produnction build
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
      loader: ExtractTextPlugin.extract(
        'style',
        'css?importLoaders=1!postcss'
      )
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
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(PUBLIC_PATH, 'index.html'),
      favicon: path.join(PUBLIC_PATH, 'favicon.ico'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('css/[name].[contenthash:8].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    })
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
