const request = require("supertest");

describe("Book catalog", function() {
    xit("should support CRUD lifecycle", async function() {
        const db = await require('../../src/connection');
        const app = require("../../src/app")(db);

        const client = request(app);

        const createResult = await client
            .post('/book')
            .send({
                title: "JavaScript in Action",
                authors: ["James Smith", "Kate Donovan"],
                isbn: "0123456789",
                description: "The ultimate JS book!"
            })
            .set('Content-Type', 'application/json')
            .expect(302);

        return client
          .set('Accept', 'application/json')
          .get(createResult.header.location)
          .expect(200, {
            title: "JavaScript in Action",
            slug: "javascript-in-action",
            authors: ["James Smith", "Kate Donovan"],
            isbn: "0123456789",
            description: "The ultimate JS book!"
          })
    });
});