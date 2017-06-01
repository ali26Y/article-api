'use strict';

const restify = require('restify');
const _ = require('lodash');
const moment = require('moment');

function errorHandler () {
  throw new Error('missing server instance');
}

function getTag (req, res, next) {

  let result = {};
  result.tag = req.params.tagName;
  let date = moment(req.params.date).format('YYYY-MM-DD');

  let count = _.filter(articlesList, (obj) => {
    return _.includes(obj.tags, req.params.tagName) && obj.date === date;
  });
  result.count = count.length;

  let articles = count.map(function (a) { return a.id; });
  result.articles = articles;

  let resObj = [];
  let related_tags = count.forEach((item) => {
    item.tags.forEach((tag) => {
      // resObj.add(tag)
      if (tag !== req.params.tagName) resObj.push(tag);
    });
  });
  result.related_tags = resObj;

  return res.json(result);
}

module.exports = (server = errorHandler()) => {
  server.get('/tags/:tagName/:date', getTag);
};
