module.exports = () => {
  const books = {

  }

  async function createOrUpdate(book) {
    books[book.isbn] = book
  }

  async function findOne(isbn) {
    return books[isbn];
  }

  return {
    createOrUpdate,
    findOne
  }
};