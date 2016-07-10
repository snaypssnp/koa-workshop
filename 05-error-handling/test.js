'use strict';

const request = require('supertest');
const app = require('./index.js');

describe('Error Handling', () => {
  it('should return "internal server error"', (done) => {
    request(app.listen())
    .get('/')
    .expect(500)
    .expect('internal server error', done);
  })

  it('should emit an error event', (done) => {
    app.once('error', () => {
      done();
    });

    request(app.listen())
    .get('/')
    .end(function noop(){});
  })
})
