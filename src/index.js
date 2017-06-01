'use strict';

const restify = require('restify');
const server = restify.createServer();
const emoji = require('node-emoji');
// const Raven = require('raven');

global._root = __dirname + '/../'; // eslint-disable-line
global.articlesList = require('./modules/articleList.js');

server.use(restify.fullResponse())
  .use(restify.queryParser())
  .use(restify.CORS())
  .use(restify.bodyParser());

server.on('uncaughtException', function (req, res, route, err) {
  console.log(err);
});

const routes = require('require-glob').sync('./modules/**/index.js');

Object.keys(routes).forEach((x) => {
  routes[x].index(server);
});

const port = process.env.PORT || 5000;

server.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Article API is running on ${port} ${emoji.get('flag-nz')} ${emoji.get('basketball')} ${emoji.get('raised_hand_with_fingers_splayed')} ${emoji.get('floppy_disk')} ${emoji.get('satisfied')}`);
  }
});

// health check endpoint
server.get('/health', (req, res) => {
  res.json({
    health: 'OK'
  }, 200);
});

process.on('SIGINT', () => {
  server.close();
  process.exit(); // eslint-disable-line
});

module.exports = server;
