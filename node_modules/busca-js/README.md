# scrape-mdn

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Downloads][download-badge]][npm-url]

> extract data from the mozilla developer network

## Install

```sh
npm i -S scrape-mdn
```

## Usage

```js
import scrapeMdn from "scrape-mdn"
scrapeMdn.search('array.map').then((results) => {
  var {url, title, description} = results[0];
  console.log(url);
});
```

## License

MIT © [Frankie Bagnardi](https://github.com/brigand/scrape-mdn)

[npm-url]: https://npmjs.org/package/scrape-mdn
[npm-image]: https://img.shields.io/npm/v/scrape-mdn.svg?style=flat-square

[travis-url]: https://travis-ci.org/brigand/scrape-mdn
[travis-image]: https://img.shields.io/travis/brigand/scrape-mdn.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/brigand/scrape-mdn
[coveralls-image]: https://img.shields.io/coveralls/brigand/scrape-mdn.svg?style=flat-square

[depstat-url]: https://david-dm.org/brigand/scrape-mdn
[depstat-image]: https://david-dm.org/brigand/scrape-mdn.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/scrape-mdn.svg?style=flat-square
