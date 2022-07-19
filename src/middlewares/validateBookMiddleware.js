const validateBook = require('../validators/validateBook');

module.exports = function validateBookMiddleware(req, res, next) {
  const validationResult = validateBook(req.body);

  if (validationResult) {
    const err = new Error;

    err.message = validationResult;
    err.status = 400;

    return next(err);
  }

  next();
}