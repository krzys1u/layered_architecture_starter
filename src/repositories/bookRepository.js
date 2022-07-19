module.exports = (db) => {
  const books = db.collection('books');

  async function createOrUpdate(book) {
    await books.updateOne(
      {isbn: book.isbn},
      {$set: book},
      {upsert: true}
    );

    return book;
  }

  async function findOne(isbn) {
    return await books.findOne({ isbn }, { projection: { _id: false } });
  }

  async function findAll() {
    return await books.find().toArray();
  }

  return {
    createOrUpdate,
    findOne,
    findAll
  };
};