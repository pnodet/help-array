# help-array

> TS package to help dealing with array

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![GitHub workflow status](https://img.shields.io/github/workflow/status/pnxdxt/help-array/CI)](https://github.com/pnxdxt/help-array/CI)
[![npm bundle size](https://img.shields.io/bundlephobia/min/help-array)](https://bundlephobia.com/package/help-array)
[![npm downloads](https://img.shields.io/npm/dt/help-array)](https://www.npmjs.com/package/help-array)

## Install

```shell
npm install help-array
```

```shell
yarn add help-array
```

## Usage

```js
import * as helpArray from 'help-array';

helpArray.all([1, 2, 3], (element) => typeof element === 'string');
//=> false

import {all} from 'help-array';

all(['1', '2', '3'], (element) => typeof element === 'string');
//=> true
```

## Import

This package is pure [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). It cannot be `require()`'d from CommonJS.

Use `import foo from 'foo'` instead of `const foo = require('foo')` to import the package.

```js
// Load entire build
import * as helpArray from 'help-array';

// Load by method
import {all} from 'help-array';
```

If the package is used in an async context, you could use [`await import(…)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports) from CommonJS instead of `require(…)`.

**You also need to make sure you're on the latest minor version of Node.js. At minimum Node.js 12.20, 14.14, or 16.0.**

Read more here: [sindresorhus/esm-package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

## Functions

`all` : Returns true if the predicate function returns true for all elements in a collection and false otherwise.

`allEqual` : Checks whether all elements of the array are equal.

`append` : Append value into array.

`prepend` : Prepend value into array.

`average` : Returns the average of two or more numerical values.

`cast` : Converts a non-array value into array.

`compact` : Removes false values from an array.

`countOccurrences` : Counts the occurrences of a value in an array.

`fromEntries` : Returns an object composed from key-value `pairs`.

`flatten` : Flattens an array up to a specified depth using recursion.

`deepFlatten` : Flattens an array recursively.

`groupMap` : Group items by common key and return an map of items grouped by key.

`group` : Group items by common key and return an array of groups.

`head` : Gets the first element of `array`.

`last` : Gets the last element of `array`.

`tail` : Gets all but the first element of `array`.

`remove` : Remove an item of an array.

`sample` : Gets a random element from `array`.

`shuffle` : Randomly shuffle an array.

`similarity` : Return an array of elements that appear in two arrays.

`slice` : Creates a slice of `array` from `start` up to, but not including, `end`.

`sortBy` : Sort array by a category.

`sum` : Get the sum of an array of numbers

`toChunks` : Split an array into chunks.

`toCSV` : Converts the elements that don’t have commas or double quotes to strings with comma-separated values.

`unDuplicate` : Remove duplicate items from an array.

## License

MIT © [pnxdxt](https://pnxdxt.com)
