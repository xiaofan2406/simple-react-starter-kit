const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const NameAllModulesPlugin = require('name-all-modules-plugin');
const common = require('./webpack.common');
const { paths, vendors } = require('./configs');
const babelrc = require('../.babelrc');

module.exports = {
  bail: true,
  devtool: 'source-map',
  entry: {
    polyfill: require.resolve('./polyfills'),
    client: `${paths.srcDir}/index.js`,
    vendor: vendors
  },
  resolve: common.resolve,
  output: {
    path: paths.buildDir,
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    publicPath: '/',
    // Point sourcemap entries to original disk location
    devtoolModuleFilenameTemplate: info =>
      path.relative(paths.srcDir, info.absoluteResourcePath)
  },
  module: {
    strictExportPresence: true,
    rules: [
      ...common.rules,
      {
        test: /\.js$/,
        include: paths.srcDir,
        loader: require.resolve('babel-loader'),
        options: {
          presets: babelrc
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: require.resolve('style-loader'),
          use: [
            {
              loader: require.resolve('css-loader'),
              options: {
                minimize: true,
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  node: common.node,
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('css/[name].[contenthash:8].css'),
    new HtmlWebpackPlugin({
      inject: true,
      template: `${paths.srcDir}/assets/index.html`,
      favicon: `${paths.srcDir}/assets/favicon.ico`,
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
      },
      sourceMap: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.NamedChunksPlugin(chunk => {
      if (chunk.name) {
        return chunk.name;
      }
      return chunk.modules
        .map(m => path.relative(m.context, m.request))
        .join('_');
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    new NameAllModulesPlugin(),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    }),
    // Frome create-react-app
    new SWPrecacheWebpackPlugin({
      // By default, a cache-busting query parameter is appended to requests
      // used to populate the caches, to ensure the responses are fresh.
      // If a URL is already hashed by Webpack, then there is no concern
      // about it being stale, and the cache-busting can be skipped.
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      logger(message) {
        if (message.indexOf('Total precache size is') === 0) return;
        console.log(message);
      },
      minify: true,
      // For unknown URLs, fallback to the index page
      navigateFallback: '/index.html',
      // Ignores URLs starting from /__ (useful for Firebase):
      // https://github.com/facebookincubator/create-react-app/issues/2237#issuecomment-302693219
      navigateFallbackWhitelist: [/^(?!\/__).*/],
      // Don't precache sourcemaps (they're large) and build asset manifest:
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
      // Work around Windows path issue in SWPrecacheWebpackPlugin:
      // https://github.com/facebookincubator/create-react-app/issues/2235
      stripPrefix: `${paths.buildDir.replace(/\\/g, '/')}/`
    })
  ]
};
