'use strict';
const koa = require('koa');
const gzip = require('mz/zlib').gzip;

const app = module.exports = koa();

app.use(function* () {
  if(this.request.path !== '/') {
    return yield next;
  }
  let acceptEncoding = this.acceptsEncodings('gzip', 'identity');
  let body = 'hello world';

  this.response.set('Content-Encoding', acceptEncoding);

  if (acceptEncoding === 'gzip') {
    this.response.body = yield gzip(body);
  } else {
    this.response.body = body;
  }
});
