# Quotable
Quotable is free, open source quotations API. This package is built on top of [Quotable](https://api.quotable.io/) project, to provide quick access to the quotable API directly into your project without calling any route yourself.

- [Servers](#servers)
- [Installation](#installation)
- [Methods](#methods)
    - [Get random quote](#get-random-quote)
    - [List quotes](#list-quotes)
- [Author](#author)
- [Contributing](#contributing)


## Servers
This package is directly connected to the `Primary Server` of the Quotable API.

Quotable provides two servers, `Primary Server` is always the more stable version, whilst staging gets features first.
| Name       | URL                 | Description                                      |
| :--------- | :------------------ | :----------------------------------------------- |
| Staging    | staging.quotable.io | Synced with the master branch of this repository __(Not Available through this package)__ |
| Production | api.quotable.io     | The primary API server                           |

## Installation
Using `npm`? Run the following command to install.

```shell
$ npm install quotable --save
```

In love with `Yarn`? Run the following command to install
```shell
$ yarn add quotable --save
```

## Methods
In this version 1.1.0, only two methods are supported, but we're looking forward for more awesome way of fetching quotes from the quotable API.

All methods are available under the quotable object. Import the package in your project.

```Javascript
const quotable = require('quotable');
```

### Get random Quote
Looking for a random quote for your project, want to greet user with some awesome but new quote everytime. Well this is the best way to achieve this.

Just call the `getRandomQuote()`, use the awesome async/await within your `asynchronous` functions.

```Javascript
const aNewQuote = await quotable.getRandomQuote();

console.log(aNewQuote);
/* 
{
    return: true
    //Request Succesfull
    _id: string
    // The quotation text
    content: string
    // The full name of the author
    author: string
    // The length of quote (number of characters)
    length: number
    // An array of tag names for this quote
    tags: string[]
}
*/
```

Not inside an `asynchronous` function? Pass a callback as the second argument to the `getRandomQuote()`

```JavaScript
quotable.getRandomQuote({ /* Params here */}, (aNewQuote) => {
    console.log(aNewQuote);
    /* 
    {
        return: true
        //Request Succesfull
        _id: string
        // The quotation text
        content: string
        // The full name of the author
        author: string
        // The length of quote (number of characters)
        length: number
        // An array of tag names for this quote
        tags: string[]
    }
    */
});
```

You can get more control over the random quote you can get by passing the params as the first argument to `getRandomQuote()`

| param     | type     | Description                                                                                                                                                                                                                                                                                                            |
| :-------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| maxLength | `Int`    | The maximum Length in characters ( can be combined with `minLength` )                                                                                                                                                                                                                                                  |
| minLength | `Int`    | The minimum Length in characters ( can be combined with `maxLength` )                                                                                                                                                                                                                                                  |
| tags      | `String` | Filter random quote by tag(s). Takes a list of one or more tag names, separated by a comma (meaning `AND`) or a pipe (meaning `OR`). A comma separated list will match quotes that have **_all_** of the given tags. While a pipe (`\|`) separated list will match quotes that have **_either_** of the provided tags. 
| authorId      | `String` | Filter random quote by authorId(s). Takes a list of one or more authorId, separated by a pipe (meaning `OR`). A pipe (`\|`) separated list will match quotes that have **_either_** of the provided authorId. 
| author      | `String` | Filter random quote by author(s). Takes a list of one or more author names, separated by a pipe (meaning `OR`). A pipe (`\|`) separated list will match quotes that have **_either_** of the provided author name. 
|

For Example:
```JavaScript 
const aNewQuote = await quotable.getRandomQuote({minLength: 45, maxLength: 50});

console.log(aNewQuote);
/* 
{
    return: true
    //Request Succesfull
    _id: string
    // The quotation text
    content: string
    // The full name of the author
    author: string
    // The length of quote (number of characters) >=45 && <=50
    length: number
    // An array of tag names for this quote
    tags: string[]
}
*/
```

### List Quotes
Get a paginated list of all quotes. This method supports several filter and sorting options.
`getQuotes()` is used to list the quotes.

```js
const quotes = await quotable.getQuotes() //inside an async function

console.log(quotes)
/*
{
  // The number of quotes returned by this request
  count: number
  // The total number of quotes matching this request
  totalCount: number
  // The index of the last quote returned. When paginating through results,
  // this value would be used as the `skip` parameter when requesting the next
  // "page" of results.
  lastItemIndex: number
  // The array of quotes
  results: Array<{
    _id: string
    // The quotation text
    content: string
    // The full name of the author
    author: string
    // The length of quote (number of characters)
    length: number
    // An array of tag names for this quote
    tags: string[]
  }>
}
*/
```
__It supports various options, listed below__

| param     | type     | Description                                                                                                                                                                                                                                                                                                      |
| :-------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| authorId  | `String` | Filter quotes by author ID.                                                                                                                                                                                                                                                                                      |
| limit     | `Int`    | `Min: 1` `Max: 100` `Default: 20` <br> The number of quotes to return per request. (for pagination).                                                                                                                                                                                                             |
| skip      | `Int`    | `Min: 0` `Default: 0` <br>  The number of items to skip (for pagination).                                                                                                                                                                                                                                        |
| maxLength | `Int`    | The maximum Length in characters ( can be combined with `minLength` )                                                                                                                                                                                                                                            |
| minLength | `Int`    | The minimum Length in characters ( can be combined with `maxLength` )                                                                                                                                                                                                                                            |
| tags      | `String` | Filter quotes by tag(s). Takes a list of one or more tag names, separated by a comma (meaning `AND`) or a pipe (meaning `OR`). A comma separated list will match quotes that have **_all_** of the given tags. While a pipe (`\|`) separated list will match quotes that have **_either_** of the provided tags. |


## Author

👤 **Ashutosh Kumar**

* Website: raxraj.github.io
* Twitter: [@raxrajtwit](https://twitter.com/raxrajtwit)
* Github: [@raxraj](https://github.com/raxraj)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/raxraj/npm-quotable/issues). You can also take a look at the [contributing guide](https://github.com/raxraj/npm-quotable/blob/master/CONTRIBUTING.md).