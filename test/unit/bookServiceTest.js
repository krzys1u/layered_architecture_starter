const assert = require("assert");

const bookServiceFactory = require('../../src/bookService');
const inMemoryBookRepositoryFactory = require('../../src/inMemoryBookRepository');
const makeSlug = require('../../src/makeSlug');

const inMemoryBookRepository = inMemoryBookRepositoryFactory();

const BOOK_MOCK = {
    title: 'TITLE1',
    authors: 'AUTHORS1',
    isbn: 'ISBN',
    description: 'DESC'
};

describe("Book service", function() {
    it('create or update happy path', async function() {
        const bookService = bookServiceFactory(inMemoryBookRepository);

        bookService.createOrUpdate(BOOK_MOCK)

        const details = await inMemoryBookRepository.findOne(BOOK_MOCK.isbn);

        assert.deepEqual(details, {
            ...BOOK_MOCK,
            slug: makeSlug(BOOK_MOCK.title)
        })
    });

});