const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/test';

let mongoPromise = MongoClient.connect(url).then(function (client) {
  return client.db()
});

module.exports = mongoPromise;