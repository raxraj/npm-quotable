let quotable = require("../index");

test("Returns a random quote", async () => {
  const response = await quotable.getRandomQuote();

  expect(response).toEqual({
    return: expect.any(Boolean),
    _id: expect.any(String),
    author: expect.any(String),
    content: expect.any(String),
    length: expect.any(Number),
    tags: expect.any(Array),
  });
  expect(response.return).toBe(true);
});

test("Returns Quotes with the given maxLength = 50", async () => {
  const response = await quotable.getRandomQuote({ maxLength: 50 });

  expect(response).toEqual({
    return: expect.any(Boolean),
    _id: expect.any(String),
    author: expect.any(String),
    content: expect.any(String),
    length: expect.any(Number),
    tags: expect.any(Array),
  });
  expect(response.return).toBe(true);
  expect(response.length).toBeLessThanOrEqual(50);
});

test("Returns Quote with the given minLength = 45", async () => {
  const response = await quotable.getRandomQuote({ minLength: 45 });

  expect(response).toEqual({
    return: expect.any(Boolean),
    _id: expect.any(String),
    author: expect.any(String),
    content: expect.any(String),
    length: expect.any(Number),
    tags: expect.any(Array),
  });
  expect(response.return).toBe(true);
  expect(response.length).toBeGreaterThanOrEqual(45);
});

test('Returns Quote within the given range of minLength = 45, MaxLength = 45',async () => {
    const response = await quotable.getRandomQuote({minLength: 45, maxLength: 50})

    expect(response).toEqual({
        return: expect.any(Boolean),
        _id: expect.any(String),
        author: expect.any(String),
        content: expect.any(String),
        length: expect.any(Number),
        tags: expect.any(Array)
    });
    expect(response.return).toBe(true);
    expect(response.length).toBeGreaterThanOrEqual(45);
    expect(response.length).toBeLessThanOrEqual(50);
});

test('Returns Quote with the given tags friendship or famous-quotes', async () => {
    const response = await quotable.getRandomQuote({tags:'friendship|famous-quotes'})

    expect(response).toEqual({
        return: expect.any(Boolean),
        _id: expect.any(String),
        author: expect.any(String),
        content: expect.any(String),
        length: expect.any(Number),
        tags: expect.any(Array)
    });
    expect(response.return).toBe(true);
    expect(
        response.tags.find(tag => tag === 'friendship' || tag === 'famous-quotes')
      ).not.toBeUndefined()
    
});

test('Returns Quote with the given tags friendship and famous-quotes', async () => {
    const response = await quotable.getRandomQuote({tags:'friendship,famous-quotes'})

    expect(response).toEqual({
        return: expect.any(Boolean),
        _id: expect.any(String),
        author: expect.any(String),
        content: expect.any(String),
        length: expect.any(Number),
        tags: expect.any(Array)
    });
    expect(response.return).toBe(true);
    expect(response.tags).toContain('friendship');
    expect(response.tags).toContain('famous-quotes');
    
});

test('Returns Quote with the given authorId zgMVt2guVo7p or qsaptKSHuLDU', async () => {
    const response = await quotable.getRandomQuote({authorId:'zgMVt2guVo7p|qsaptKSHuLDU'})

    expect(response).toEqual({
        return: expect.any(Boolean),
        _id: expect.any(String),
        author: expect.any(String),
        content: expect.any(String),
        length: expect.any(Number),
        tags: expect.any(Array)
    });
    expect(response.return).toBe(true);
    expect(["Zig Ziglar","Laozi"]).toContain(response.author)
});

test('Returns Quote with the given authorId Zig Ziglar or Laozi', async () => {
    const response = await quotable.getRandomQuote({author:'Zig Ziglar|Laozi'})

    expect(response).toEqual({
        return: expect.any(Boolean),
        _id: expect.any(String),
        author: expect.any(String),
        content: expect.any(String),
        length: expect.any(Number),
        tags: expect.any(Array)
    });
    expect(response.return).toBe(true);
    expect(["Zig Ziglar","Laozi"]).toContain(response.author)
});