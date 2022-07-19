module.exports = (db) => {
  const express = require("express");
  const booksRoutesFactory = require('./routes/bookRoutes');

  const { notFound, error } = require('./errors');
  const path = require('path');

  const app = express();

  const booksRoutes = booksRoutesFactory(db);

  const startTimer = (req, res, next) => {
    const startTime = new Date();
    res.on('finish', () => {
      const endTime = new Date();
      const diff = endTime - startTime;

      console.info('request time:', diff)
    });

    next();
  }

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');

  app.use(startTimer)
  app.use(express.json());
  app.use('/', booksRoutes);

  app.use(notFound);
  app.use(error);

  return app;
};