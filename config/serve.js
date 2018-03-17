const server = require('serve');
const configs = require('./configs');

server(configs.paths.appDist, {
  port: configs.servePort,
  single: true,
});
