'use strict';
const koa = require('koa');
const app = module.exports = koa();

app.use(function* () {
  this.response.body = 'hello world';
});
