module.exports = (db) => {
  const express = require("express");
  const booksRoutesFactory = require('./bookRoutes');

  const { notFound, error } = require('./error');
  const path = require('path');

  const app = express();

  const booksRoutes = booksRoutesFactory(db);


  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');

  app.use(express.json());
  app.use('/', booksRoutes);

  app.use(notFound);
  app.use(error);

  return app;
};