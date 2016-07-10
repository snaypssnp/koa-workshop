'use strict';
const koa = require('koa');
const app = module.exports = koa();

app.use(function* (next) {
  if (this.request.path !== '/') {
    return yield next;
  }
  this.response.body = 'hello world';
});

app.use(function* (next) {
  if (this.request.path !== '/404') {
    return yield next;
  }
  this.response.status = 404;
  this.response.body = 'page not found';
});

app.use(function* () {
  if (this.request.path === '/500') {
    this.response.status = 500;
    this.response.body = 'internal server error';
  }
});
