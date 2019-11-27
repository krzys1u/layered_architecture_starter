const links = {
  resources: {
    BOOK: '/book/:isbn',
    BOOK_COLLECTION: '/book',
  },
  bookLink(isbn) {
    return `${links.resources.BOOK.replace(':isbn', isbn)}`
  }
};

module.exports = links;