'use strict';

const koa = require('koa');
const escapeHtml = require('escape-html');
const app = module.exports = koa();

app.use(function* (next) {
  yield next;
  this.response.type = 'text/html';
  this.response.body =  escapeHtml(this.response.body);
})

app.use(function* body() {
  this.response.body = 'this following HTML should be escaped: <p>hi!</p>';
});

app.listen(3000);
