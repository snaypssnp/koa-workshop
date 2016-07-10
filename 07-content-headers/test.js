'use strict';
const assert = require('assert');
const request = require('supertest');

const app = require('./index.js');

describe('Content Headers', () => {
  describe('when sending plain text', () => {
    it('should return "ok"', (done) => {
      request(app.listen())
      .get('/')
      .set('Content-Type', 'text/plain')
      .set('Content-Length', '3')
      .send('lol')
      .expect(200)
      .expect('ok', done);
    })
  })

  describe('when sending JSON', () => {
    it('should return that JSON', (done) => {
      // just a random JSON body. don't bother parsing this.
      var body = JSON.stringify({});

      request(app.listen())
      .get('/')
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('Content-Length', Buffer.byteLength(body))
      .send(body)
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .expect('Content-Length', 17)
      .end((err, res) => {
        if (err) return done(err);

        assert.equal('hi!', res.body.message);
        done();
      })
    })
  })
})
