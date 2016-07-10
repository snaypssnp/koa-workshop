'use strict';

const request = require('supertest');
const app = require('./index.js');

describe('Decorators', () => {
  it('should return the string escaped', (done) => {
    request(app.listen())
    .get('/')
    .expect(200)
    .expect('this following HTML should be escaped: &lt;p&gt;hi!&lt;/p&gt;', done);
  })
})
