const path = require('path');
const url = require('url');
const pkg = require('../package.json');

const appRoot = path.join(__dirname, '..');
const appSrc = path.join(appRoot, 'src');
const appDist = path.join(appRoot, 'dist');

const publicUrl = pkg.homepage;
const servedUrl = publicUrl ? url.parse(publicUrl).pathname : '/';

function ensureSlash(inputPath, needsSlash) {
  const hasSlash = inputPath.endsWith('/');
  if (hasSlash && !needsSlash) {
    return inputPath.substr(0, inputPath.length - 1);
  }
  if (!hasSlash && needsSlash) {
    return `${inputPath}/`;
  }
  return inputPath;
}

module.exports = {
  appRoot,
  appSrc,
  appDist,
  servedPath: ensureSlash(servedUrl, true),
};
