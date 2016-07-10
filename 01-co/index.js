'use strict';

const fs = require('fs');

exports.stat = (filename) => {
  return new Promise((resolve, reject) => {
    fs.stat(filename, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  });
};

exports.exists = (filename) => {
  return new Promise((resolve) => {
    fs.stat(filename, (err) => {
      if (err) {
        resolve(false);
      }
      resolve(true);
    })
  });
};
