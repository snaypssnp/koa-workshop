'use strict';

const koa = require('koa');
const app = module.exports = koa();

app.use(function* (next) {
  if (this.request.path !== '/') {
     return yield next;
  }

  if (this.request.is('application/json')) {
    this.response.body = {message: 'hi!'};
  } else {
    this.response.body = 'ok';
  }
});
