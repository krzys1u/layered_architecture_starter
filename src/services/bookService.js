const makeSlug = require('../utils/makeSlug');

const bookServiceFactory = (bookRepository) => {
  return {
    createOrUpdate({title, authors, isbn, description}) {
      const slug = makeSlug(title);

      return bookRepository.createOrUpdate({title, slug, authors, isbn, description})
    }
  };
}

module.exports = bookServiceFactory;