process.env.NODE_ENV = 'development';

const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../config/webpack.dev');
const LOCAL_IP = require('./ip')();

// Some custom utilities to prettify Webpack output.
// This is a little hacky.
// It would be easier if webpack provided a rich error object.
const friendlySyntaxErrorLabel = 'Syntax error:';
function isLikelyASyntaxError(message) {
  return message.indexOf(friendlySyntaxErrorLabel) !== -1;
}
function formatMessage(message) {
  return message
    // Make some common errors shorter:
    .replace(
      // Babel syntax error
      'Module build failed: SyntaxError:',
      friendlySyntaxErrorLabel
    )
    .replace(
      // Webpack file not found error
      /Module not found: Error: Cannot resolve 'file' or 'directory'/,
      'Module not found:'
    )
    // Internal stacks are generally useless so we strip them
    .replace(/^\s*at\s.*:\d+:\d+[\s\)]*\n/gm, '') // at ... ...:x:y
    // Webpack loader names obscure CSS filenames
    .replace('./~/css-loader!./~/postcss-loader!', '');
}

let isFirstClear = true;
function clearConsole() {
  // On first run, clear completely so it doesn't show half screen on Windows.
  // On next runs, use a different sequence that properly scrolls back.
  process.stdout.write(isFirstClear ? '\x1bc' : '\x1b[2J\x1b[0f');
  isFirstClear = false;
}

let compiler;
function setupCompiler(port, protocol) {
  compiler = webpack(config);

  compiler.plugin('invalid', () => {
    clearConsole();
    console.log('Compiling...');
  });

  compiler.plugin('done', (stats) => {
    clearConsole();
    const hasErrors = stats.hasErrors();
    const hasWarnings = stats.hasWarnings();
    if (!hasErrors && !hasWarnings) {
      console.log(chalk.green('Compiled successfully!'));
      console.log();
      console.log(`The app is running at ${protocol}://${LOCAL_IP}:${port}`);
      console.log();
      return;
    }

    const json = stats.toJson({}, true);
    let formattedErrors = json.errors.map(message =>
      `Error in ${formatMessage(message)}`
    );
    const formattedWarnings = json.warnings.map(message =>
      `Warning in ${formatMessage(message)}`
    );

    if (hasErrors) {
      console.log(chalk.red('Some error has occured...'));
      console.log();
      if (formattedErrors.some(isLikelyASyntaxError)) {
        // If there are any syntax errors, show just them.
        // This prevents a confusing ESLint parsing error
        // preceding a much more useful Babel syntax error.
        formattedErrors = formattedErrors.filter(isLikelyASyntaxError);
      }
      formattedErrors.forEach((message) => {
        console.log(message);
        console.log();
      });
      // If errors exist, ignore warnings.
      return;
    }

    if (hasWarnings) {
      console.log(chalk.yellow('Compiled with warnings.'));
      console.log();
      formattedWarnings.forEach((message) => {
        console.log(message);
        console.log();
      });
    }
  });
}

function runDevServer(port, protocol) {
  const devServer = new WebpackDevServer(compiler, {
    // Silence WebpackDevServer's own logs since they're generally not useful.
    // It will still show compile warnings and errors with this setting.
    clientLogLevel: 'none',
    // By default WebpackDevServer also serves files from the current directory.
    // This might be useful in legacy apps. However we already encourage people
    // to use Webpack for importing assets in the code, so we don't need to
    // additionally serve files by their filenames. Otherwise, even if it
    // works in development, those files will be missing in production, unless
    // we explicitly copy them. But even if we copy all the files into
    // the build output (which doesn't seem to be wise because it may contain
    // private information such as files with API keys, for example), we would
    // still have a problem. Since the filenames would be the same every time,
    // browsers would cache their content, and updating file content would not
    // work correctly. This is easily solved by importing assets through Webpack
    // because if it can then append content hashes to filenames in production,
    // just like it does for JS and CSS. And because we configured "html" loader
    // to be used for HTML files, even <link href="./src/something.png"> would
    // get resolved correctly by Webpack and handled both in development and
    // in production without actually serving it by that path.
    contentBase: [],
    historyApiFallback: true,
    hot: true,
    inline: true,
    // It is important to tell WebpackDevServer to use the same "root" path
    // as we specified in the config. In development, we always serve from /.
    publicPath: config.output.publicPath,
    // WebpackDevServer is noisy by default so we emit custom message instead
    // by listening to the compiler events with `compiler.plugin` calls above.
    quiet: true,
    watchOptions: {
      ignored: /node_modules/
    },
    // Enable HTTPS if the HTTPS environment variable is set to 'true'
    https: protocol === 'https'
  });

  devServer.listen(port, (err) => {
    if (err) {
      console.log(err);
    } else {
      clearConsole();
      console.log(chalk.cyan('Starting the development server...'));
      console.log();
    }
  });
}

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const port = 8080;
setupCompiler(port, protocol);
runDevServer(port, protocol);
