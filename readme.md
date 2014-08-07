# yn [![Build Status](https://travis-ci.org/sindresorhus/yn.svg?branch=master)](https://travis-ci.org/sindresorhus/yn)

> Parse yes/no like values

Useful for validating answers of a CLI prompt.

-

The following case-insensitive values are recognized:

```js
'y', 'yes', 'true', true, 'n', 'no', 'false', false
```


## Install

```sh
$ npm install --save yn
```


## Usage

```js
var yn = require('yn');

yn('y');
//=> true

yn('NO');
//=> false

yn(true);
//=> true

yn('unicorn');
//=> null :(
```

Unrecognized values returns `null`.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
