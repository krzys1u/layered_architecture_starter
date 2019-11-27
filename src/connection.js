const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/booksapi';

let booksPromise = MongoClient.connect(url).then(function (client) {
  return client.db()
});

module.exports = booksPromise;