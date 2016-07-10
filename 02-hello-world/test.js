'use strict';
const request = require('supertest');
const app = require('./index.js');

describe('Hello World', () => {
  it('should return hello world', (done) => {
    request(app.listen())
    .get('/')
    .expect(200)
    .expect('Content-Length', 11)
    .expect('Content-Type', 'text/plain; charset=utf-8')
    .end(done)
  })
})
