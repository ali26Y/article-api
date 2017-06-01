'use strict';

const _ = require('lodash');
const fs = require('fs');

function errorHandler () {
  throw new Error('missing server instance');
}

function getArticle (req, res, next) {
  let article = _.find(articlesList, (obj) => obj.id === req.params.id);
  res.json(article);
}

function postArticles (req, res, next) {
  articlesList = [].concat(articlesList, req.body.articles);
  res.json(articlesList);
}

module.exports = (server = errorHandler()) => {
  server.post('/articles', postArticles);
  server.get('/articles/:id', getArticle);
};
