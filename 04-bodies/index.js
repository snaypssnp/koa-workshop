'use strict';

const fs = require('fs');
const koa = require('koa');
const app = module.exports = koa();

app.use(function* (next) {
  if (this.request.path !== '/stream') {
    return yield* next;
  }

  this.response.type = "application/javascript";
  this.response.body = fs.ReadStream(__filename);
});

app.use(function* (next) {
  if (this.request.path !== '/json') {
    return yield next;
  }
  this.response.body = {
    message: 'hello world'
  }
});
