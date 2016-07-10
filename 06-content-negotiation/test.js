'use strict';
const assert = require('assert');
const request = require('supertest');
const app = require('./index.js');

describe('Content Negotiation', () => {
  it('when "Accept: gzip" it should return gzip', (done) => {
    request(app.listen())
    .get('/')
    .set('Accept-Encoding', 'gzip')
    .expect(200)
    .expect('Content-Encoding', 'gzip')
    .expect('hello world', done);
  })

  it('when "Accept: identity" it should not compress', (done) => {
    request(app.listen())
    .get('/')
    .set('Accept-Encoding', 'identity')
    .expect(200)
    .expect('hello world', (err, res) => {
      if (err) return done(err);

      assert.equal(res.headers['content-encoding'] || 'identity', 'identity');
      done();
    });
  })
})
