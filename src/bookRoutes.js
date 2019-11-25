const {BOOK, BOOK_COLLECTION} = require('./links').resources;

module.exports = (db) => {
  const { Router } = require('express');

  const validateBook = require('./validateBookMiddleware');
  const bookServiceFactory = require('./bookService');

  const bookRepositoryFactory = require('./bookRepository');
  const bookControllerFactory = require('./bookController');

  const bookRepository = bookRepositoryFactory(db);

  const bookService = bookServiceFactory(bookRepository);

  const { createOrUpdate, details, collection } = bookControllerFactory(bookService, bookRepository);
  const router = Router();

  router.post(BOOK_COLLECTION, validateBook, createOrUpdate);
  router.get(BOOK, details);
  router.get(BOOK_COLLECTION, collection);

  return router;
}
