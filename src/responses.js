const {bookLink} = require('./links')

module.exports = {
  details: ({res, data}) => {
    res.format({
      "text/html"() {
        res.render("book", data);
      },
      "application/json"() {
        res.json(data)
      },
      "default"() {
        res.json(data)
      }
    });
  },
  collection: ({res, data}) => {

    res.format({
      "text/html"() {
        res.render("books", {
          ...data,
          books: data.books.map(book => ({link: bookLink(book.isbn), ...book}))
        });
      },
      "application/json"() {
        res.json(data)
      },
      "default"() {
        res.json(data)
      }
    });
  }
}