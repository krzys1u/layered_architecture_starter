const assert = require("assert");

const buildController = require('./../../src/controllers/bookController')

const BOOK_MOCK = {
    title: "JavaScript in Action",
    slug: "javascript-in-action",
    authors: ["James Smith", "Kate Donovan"],
    isbn: "0123456789",
    description: "The ultimate JS book!",
}

describe("Book controller", function() {
    it('create or update happy path', async function() {
        const req = {
            body: {
                isbn: 'ISBN',
            },
        }

        const res = {
            redirect(path) {
                res.redirect.invokeWith = path;
            }
        }

        const bookService = {
            async createOrUpdate() {

            }
        }

        const bookController = buildController(bookService);

        //when
        await bookController.createOrUpdate(req, res);

        //then
        assert.equal(res.redirect.invokeWith, `/book/${req.body.isbn}`)
    });

    xit("should properly return details", async function() {
        const controller = buildController({}, {
            findOne: (isbn) => {
                return BOOK_MOCK
            }
        })

        let t = {};

        await controller.details({params: {isbn:'1'}}, {json: (d) => {t=d}}, () => {});

        assert.equal(t, BOOK_MOCK);
    });
});