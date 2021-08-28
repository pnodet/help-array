# help-array
> Small js functions to help dealing with array

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
![GitHub repo size](https://img.shields.io/github/repo-size/pnxdxt/help-array)
![GitHub workflow status](https://img.shields.io/github/workflow/status/pnxdxt/help-array/CI)
![npm downloads](https://img.shields.io/npm/dt/help-array)
## Install
```
$ npm install help-array
```
## Import

This package is pure [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). It cannot be `require()`'d from CommonJS.

Use `import foo from 'foo'` instead of `const foo = require('foo')` to import the package.

```js
// Load entire build
import * as helpArray from 'help-array';

// Load by method
import {countOccurrences} from 'help-array';
```
If the package is used in an async context, you could use [`await import(…)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports) from CommonJS instead of `require(…)`.

**You also need to make sure you're on the latest minor version of Node.js. At minimum Node.js 12.20, 14.14, or 16.0.**

Read more here: [sindresorhus/esm-package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

## Usage

```js

helpArray.all([1,2,3], (element) => typeof element === 'string');
//=> false

helpArray.all(['1', '2', '3'], (element) => typeof element === 'string');
//=> true
```

## License
MIT © [Paul Nodet](https://pnodet.com)
