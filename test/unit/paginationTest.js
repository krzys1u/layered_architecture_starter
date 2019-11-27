const assert = require("assert");
const generatePages = require("../../src/generatePages");

describe("generate pages", function () {
  it("first page on initial list", function () {
    const pages = generatePages({current: 0, maxPages: 11});

    assert.deepStrictEqual(pages, [
      {start: 0, isCurrent: true},
      {start: 1, isCurrent: false},
      {start: 2, isCurrent: false},
      {start: 3, isCurrent: false},
      {start: 4, isCurrent: false},
      {start: 5, isCurrent: false},
      {start: 6, isCurrent: false},
      {start: 7, isCurrent: false},
      {start: 8, isCurrent: false},
      {start: 9, isCurrent: false}
    ]);
  });

  it("max pages limits display list size", function () {
    const pages = generatePages({current: 0, maxPages: 4});

    assert.deepStrictEqual(pages, [
      {start: 0, isCurrent: true},
      {start: 1, isCurrent: false},
      {start: 2, isCurrent: false},
      {start: 3, isCurrent: false}
    ]);
  });

  it("up to 6th page keep 1-10 layout", function () {
    const pages = generatePages({current: 5, maxPages: 11});

    assert.deepStrictEqual(pages, [
      {start: 0, isCurrent: false},
      {start: 1, isCurrent: false},
      {start: 2, isCurrent: false},
      {start: 3, isCurrent: false},
      {start: 4, isCurrent: false},
      {start: 5, isCurrent: true},
      {start: 6, isCurrent: false},
      {start: 7, isCurrent: false},
      {start: 8, isCurrent: false},
      {start: 9, isCurrent: false}
    ]);
  });

  it("put 7th page in the middle", function () {
    const pages = generatePages({current: 6, maxPages: 11});

    assert.deepStrictEqual(pages, [
      {start: 1, isCurrent: false},
      {start: 2, isCurrent: false},
      {start: 3, isCurrent: false},
      {start: 4, isCurrent: false},
      {start: 5, isCurrent: false},
      {start: 6, isCurrent: true},
      {start: 7, isCurrent: false},
      {start: 8, isCurrent: false},
      {start: 9, isCurrent: false},
      {start: 10, isCurrent: false}
    ]);
  });

  it("max pages keeps previous 5 elements", function () {
    const pages = generatePages({current: 10, maxPages: 11});

    assert.deepStrictEqual(pages, [
      {start: 5, isCurrent: false},
      {start: 6, isCurrent: false},
      {start: 7, isCurrent: false},
      {start: 8, isCurrent: false},
      {start: 9, isCurrent: false},
      {start: 10, isCurrent: true}
    ]);
  });

  it("current beyond max pages shows nothing", function () {
    const pages = generatePages({current: 11, maxPages: 11});

    assert.deepStrictEqual(pages, []);
  });
});