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
  expect(response.count).toBeLessThanOrEqual(20);
  expect(response.results[0]).toEqual({
    _id: expect.any(String),
    author: expect.any(String),
    content: expect.any(String),
    length: expect.any(Number),
    tags: expect.any(Array),
  });
});

test('Returns a paginated list of quotes with count = 25',async () => {
  const response = await quotable.getQuotes({limit: 25})

  expect(response).toEqual({
    count: expect.any(Number),
    totalCount: expect.any(Number),
    lastItemIndex: expect.any(Number),
    results: expect.any(Array),
    return: true,
  });
  expect(response.count).toBe(25);
  expect(response.results[0]).toEqual({
    _id: expect.any(String),
    author: expect.any(String),
    content: expect.any(String),
    length: expect.any(Number),
    tags: expect.any(Array),
  });
});

test('Returns a paginated list of quotes with maxLength = 50',async () => {
  const response = await quotable.getQuotes({maxLength: 50})

  expect(response).toEqual({
    count: expect.any(Number),
    totalCount: expect.any(Number),
    lastItemIndex: expect.any(Number),
    results: expect.any(Array),
    return: true,
  });
  expect(response.results[0]).toEqual({
    _id: expect.any(String),
    author: expect.any(String),
    content: expect.any(String),
    length: expect.any(Number),
    tags: expect.any(Array),
  });
  expect(response.count).toBeLessThanOrEqual(20);
  response.results.map(quote=>{
    expect(quote.length).toBeLessThanOrEqual(50);
  })
});

test('Returns a paginated list of quotes with minLength = 25',async () => {
  const response = await quotable.getQuotes({minLength: 25})

  expect(response).toEqual({
    count: expect.any(Number),
    totalCount: expect.any(Number),
    lastItemIndex: expect.any(Number),
    results: expect.any(Array),
    return: true,
  });
  expect(response.results[0]).toEqual({
    _id: expect.any(String),
    author: expect.any(String),
    content: expect.any(String),
    length: expect.any(Number),
    tags: expect.any(Array),
  });
  expect(response.count).toBeLessThanOrEqual(20);
  response.results.map(quote=>{
    expect(quote.length).toBeGreaterThanOrEqual(25);
  })
});

test('Returns a paginated list of quotes with maxLength = 50 && minLength = 25',async () => {
  const response = await quotable.getQuotes({maxLength: 50, minLength:25})

  expect(response).toEqual({
    count: expect.any(Number),
    totalCount: expect.any(Number),
    lastItemIndex: expect.any(Number),
    results: expect.any(Array),
    return: true,
  });
  expect(response.results[0]).toEqual({
    _id: expect.any(String),
    author: expect.any(String),
    content: expect.any(String),
    length: expect.any(Number),
    tags: expect.any(Array),
  });
  expect(response.count).toBeLessThanOrEqual(20);
  response.results.map(quote=>{
    expect(quote.length).toBeLessThanOrEqual(50);
    expect(quote.length).toBeGreaterThanOrEqual(25);
  })
});

test('Returns a paginated list of qutoes having tags friendship or famous-quotes', async ()=>{
  const response = await quotable.getQuotes({tags: 'friendship|famous-quotes'})

  expect(response).toEqual({
    count: expect.any(Number),
    totalCount: expect.any(Number),
    lastItemIndex: expect.any(Number),
    results: expect.any(Array),
    return: true,
  });
  expect(response.results[0]).toEqual({
    _id: expect.any(String),
    author: expect.any(String),
    content: expect.any(String),
    length: expect.any(Number),
    tags: expect.any(Array),
  });
  expect(response.count).toBeLessThanOrEqual(20);
  response.results.map(quote=>{
    expect(
      quote.tags.find(tag => tag === 'friendship' || tag === 'famous-quotes')
    ).not.toBeUndefined()
  })
})

test('Returns a paginated list of qutoes having tags friendship and famous-quotes', async ()=>{
  const response = await quotable.getQuotes({tags: 'friendship,famous-quotes'})

  expect(response).toEqual({
    count: expect.any(Number),
    totalCount: expect.any(Number),
    lastItemIndex: null,
    results: expect.any(Array),
    return: true,
  });
  expect(response.results[0]).toEqual({
    _id: expect.any(String),
    author: expect.any(String),
    content: expect.any(String),
    length: expect.any(Number),
    tags: expect.any(Array),
  });
  expect(response.count).toBeLessThanOrEqual(20);
  response.results.map(quote=>{
    expect(quote.tags).toContain('friendship');
    expect(quote.tags).toContain('famous-quotes');
  })
})

test('Returns a paginated list of quotes having authorId of Zig Ziglar',async () => {
  const response = await quotable.getQuotes({authorId: 'zgMVt2guVo7p'})

  expect(response).toEqual({
    count: expect.any(Number),
    totalCount: expect.any(Number),
    lastItemIndex: null,
    results: expect.any(Array),
    return: true,
  });
  expect(response.results[0]).toEqual({
    _id: expect.any(String),
    author: expect.any(String),
    content: expect.any(String),
    length: expect.any(Number),
    tags: expect.any(Array),
  });
  expect(response.count).toBeLessThanOrEqual(20);
  response.results.map(quote=>{
    expect(quote.author).toBe('Zig Ziglar');
  })
});

test('Returns a paginated list of quotes having author name Zig Ziglar',async () => {
  const response = await quotable.getQuotes({author: 'Zig Ziglar'})

  expect(response).toEqual({
    count: expect.any(Number),
    totalCount: expect.any(Number),
    lastItemIndex: null,
    results: expect.any(Array),
    return: true,
  });
  expect(response.results[0]).toEqual({
    _id: expect.any(String),
    author: expect.any(String),
    content: expect.any(String),
    length: expect.any(Number),
    tags: expect.any(Array),
  });
  expect(response.count).toBeLessThanOrEqual(20);
  response.results.map(quote=>{
    expect(quote.author).toBe('Zig Ziglar');
  })
});