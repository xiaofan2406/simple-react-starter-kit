const path = require('path');
const url = require('url');
const pkg = require('../package.json');

const appRoot = path.join(__dirname, '..');
const appSrc = path.join(appRoot, 'src');
const appDist = path.join(appRoot, 'dist');

const publicUrl = pkg.homepage;
const servedUrl = publicUrl ? url.parse(publicUrl).pathname : '/';

function ensureSlash(inputPath) {
  const hasSlash = inputPath.endsWith('/');

  return hasSlash ? inputPath : `${inputPath}/`;
}

module.exports = {
  appRoot,
  appSrc,
  appDist,
  servedPath: ensureSlash(servedUrl, true),
};
