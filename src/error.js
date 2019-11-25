function notFound(req, res, next) {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
}

function error(err, req, res, next) {
  res.status(err.status || 500);
  res.json({message: err.message, error: err.stack});
}

module.exports = {
  notFound,
  error
}