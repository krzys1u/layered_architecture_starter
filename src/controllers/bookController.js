const mapValues = require('lodash.mapvalues');

const responses = require('../responses.js');

const {bookLink} = require('../links')

const wrapWithTryCatch = (fn) => {
  return async (req, res, next) => {
    fn(req,res, next).catch(next)
  }
};

const withErrorHandling = (api) => mapValues(api, wrapWithTryCatch);

const buildController = (bookService, bookRepository) => {
  const createOrUpdate = async (req, res, next) => {
    const { title, authors, isbn, description } = req.body;

    await bookService.createOrUpdate({ title, authors, isbn, description })

    res.redirect(bookLink(isbn));
  };

  const details = async (req, res) => {
    const isbn = req.params.isbn;

    const book = await bookRepository.findOne(isbn);

    responses.details({res, data: {book, layout: 'layout'}});
  };

  const collection = async (req, res) => {
    const books = await bookRepository.findAll();

    responses.collection({res, data: {books, layout: 'layout'}});
  };

  return withErrorHandling({
    createOrUpdate,
    details,
    collection
  });
}


module.exports = buildController;