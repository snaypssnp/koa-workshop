'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const request = require('supertest');
const app = require('./index.js');

describe('Bodies', () => {
  it('GET /stream should return a stream', (done) => {
    let body = fs.readFileSync(path.join(__dirname, 'index.js'), 'utf8');

    request(app.listen())
    .get('/stream')
    .expect('Content-Type', /application\/javascript/)
    .expect(body, done);
  })

  it('GET /json should return a JSON body', (done) => {
    request(app.listen())
    .get('/json')
    .expect('Content-Type', /application\/json/)
    .end((err, res) => {
      if (err) {
        return done(err);
      }

      assert.equal(res.body.message, 'hello world');
      done();
    })
  })
})
