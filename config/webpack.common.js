const paths = require("./paths");

module.exports = {
  resolve: {
    extensions: [".js", ".json"],
    alias: {
      components: `${paths.appDir}/components`,
      hocs: `${paths.appDir}/hocs`,
      styles: `${paths.appDir}/styles`,
      utils: `${paths.appDir}/utils`,
      app: paths.appDir // this allows import 'app/...' without knowing the relative path
    }
  },
  rules: [
    {
      test: /\.js$/,
      enforce: "pre",
      include: paths.appDir,
      loader: "eslint-loader"
    },
    {
      test: /\.(eot|otf|ttf|woff|woff2)(\?.*)?$/,
      loader: "file-loader",
      options: {
        name: "fonts/[name].[hash:8].[ext]"
      }
    },
    {
      test: /\.(jpg|jpeg|png|gif|svg|ico|webp)(\?.*)?$/,
      loader: "file-loader",
      options: {
        name: "media/[name].[hash:8].[ext]"
      }
    },
    {
      test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
      loader: "url-loader",
      options: {
        limit: 10000,
        name: "media/[name].[hash:8].[ext]"
      }
    }
  ],
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  }
};
