const {BOOK, BOOK_COLLECTION} = require('../links').resources;

module.exports = (db) => {
  const { Router } = require('express');

  const validateBook = require('../middlewares/validateBookMiddleware');
  const bookServiceFactory = require('../services/bookService');

  const bookRepositoryFactory = require('../repositories/bookRepository');
  const bookControllerFactory = require('../controllers/bookController');

  const bookRepository = bookRepositoryFactory(db);

  const bookService = bookServiceFactory(bookRepository);

  const { createOrUpdate, details, collection } = bookControllerFactory(bookService, bookRepository);
  const router = Router();

  router.post(BOOK_COLLECTION, validateBook, createOrUpdate);
  router.get(BOOK, details);
  router.get(BOOK_COLLECTION, collection);

  return router;
}
