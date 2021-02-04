let quotable = require("../index");

test("Returns a paginated list of Quotes", async () => {
  const response = await quotable.getQuotes();

  expect(response).toEqual({
    count: expect.any(Number),
    totalCount: expect.any(Number),
    lastItemIndex: expect.any(Number),
    results: expect.any(Array),
    return: true,
  });
  expect(response.count).toBe(20);
  expect(response.results[0]).toEqual({
    _id: expect.any(String),
    author: expect.any(String),
    content: expect.any(String),
    length: expect.any(Number),
    tags: expect.any(Array),
  });
});
