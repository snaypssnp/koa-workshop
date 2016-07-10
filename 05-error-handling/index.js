'use strict';

const koa = require('koa');
const app = module.exports = koa();

app.use(function* errorHandler(next) {
  try {
    yield next;
  } catch (err) {
    this.response.status = 500;
    this.response.body = 'internal server error';
    app.emit('error', new Error('new boom!'));
  }
});

app.use(function* () {
  throw new Error('boom!');
});

