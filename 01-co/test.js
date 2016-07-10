'use strict';
const co = require('co');
const assert = require('assert');

const fs = require('./index.js');

describe('.stats()', () => {
  it('should stat this file', co(function* () {
    let stats = yield fs.stat(__filename);
    assert.ok(stats.size);
  }))

  it('should throw on a nonexistent file', co(function* () {
    try {
      yield fs.stat(__filename + 'lkjaslkdjflaksdfasdf');
      throw new Error('nope');
    } catch (err) {
      assert(err.message !== 'nope');
    }
  }))
})

describe('.exists()', () => {
  it('should find this file', co(function* () {
    assert.equal(true, yield fs.exists(__filename))
  }))

  it('should return false for a nonexistent file', co(function* () {
    assert.equal(false, yield fs.exists(__filename + 'kljalskjdfklajsdf'))
  }))
})
