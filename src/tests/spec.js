'use strict';

var test = require('tap').test;

function add (x, y) {
  return (isNaN(x)) ? new Error('Not a number') : x + y;
}

test('this is a sample test', (t) => {
  t.equal(typeof Date.now, 'function');
  t.end();
});

test('this is another sample test', (t) => {
  const res = add('foo');
  t.equal(res.message, 'Not a number');
  t.end();
});

test('another sample test', (t) => {
  const res = add(1, 2);
  t.equal(res, 3);
  t.end();
});
