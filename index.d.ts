/**
 * Returns true if the predicate function returns true for all elements in a collection and false otherwise.
 * @param {Array} array
 * @param {Function} fn
 */
export function all(array: any[], fn: () => boolean): boolean;

/**
 * Checks whether all elements of the array are equal.
 * @param {Array} array
 * @return {Boolean}
 */
export function allEqual(array: any[]): boolean;

/**
 * Append value into array.
 * @param {Array} array - The array
 * @param {*} value
 * @returns {Array}
 */
export function append(array: any[], value: any): any[];

/**
 * Prepend value into array.
 * @param {Array} array - The array
 * @param {*} value
 * @returns {Array}
 */
export function prepend(array: any[], value: any): any[];

/**
 * Returns the average of two or more numerical values.
 * @param {...Number} nums
 * @returns {Number}
 */
export function average(...nums: number[]): number;

/**
 * Converts a non-array value into array.
 * @param {*} value
 * @returns {Array}
 */
export function cast(value: any): any[];

/**
 * Removes false values from an array.
 * @param {Array} array - The array
 * @returns {Array} A new array without false values
 */
export function compact(array: any[]): any[];

/**
 * Counts the occurrences of a value in an array.
 * @param {Array} array - The array
 * @param {any} value - value
 * @returns {Number} Number of occurrences
 */
export function countOccurrences(array: any[], value: any): number;

/**
 * Returns an object composed from key-value `pairs`.
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * helpArray.fromEntries([['a', 1], ['b', 2]])
 * // => { 'a': 1, 'b': 2 }
 */
export function fromEntries(pairs: any[]): Record<string, unknown>;

/**
 * Flattens an array up to a specified depth using recursion.
 * @param {Array} array - The array
 * @param {Number} [depth=1]
 * @returns {Array} A new array with duplicates removed
 */
export function flatten(array: any[], depth?: number): any[];

/**
 * Flattens an array recursively.
 * @param {Array} array - The array
 * @returns {Array} A new array
 */
export function deepFlatten(array: any[]): any[];

/**
 * Group items by common key and return an object of items grouped by key.
 * @param {Array} array - The array
 * @param fn
 * @returns {{}}
 */
export function groupMap(array: any[], fn: any): Record<string, unknown>;

/**
 * Group items by common key and return an array of groups.
 * @param {Array} array - The array
 * @param fn
 * @returns {unknown[]}
 */
export function group(array: any[], fn: any): unknown[];

/**
 * Gets the first element of `array`.
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * helpArray.head([1, 2, 3])
 * // => 1
 *
 * helpArray.head([])
 * // => undefined
 */
export function head(array: any[]): any;

/**
 * Gets the last element of `array`.
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * helpArray.last([1, 2, 3])
 * // => 3
 */
export function last(array: any[]): any;

/**
 * Gets all but the first element of `array`.
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * helpArray.tail([1, 2, 3])
 * // => [2, 3]
 */
export function tail(array: any[]): any[];

/**
 * Creates an array of values by running each element of `array` thru `iteratee`.
 * The iteratee is invoked with three arguments: (value, index, array).
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * helpArray.map([4, 8], square)
 * // => [16, 64]
 */
export function map(array: any[], iteratee: () => any): any[];

/**
 * Remove an item of an array.
 * @param {Array} array - The array
 * @param {number} index - The array
 * @param {number} offset - The array
 * @returns {Array} A new array
 */
export function moveBy(array: any[], index: number, offset: number): any[];

/**
 * Remove an item of an array.
 * @param {Array} array - The array
 * @param {*} elem - The array
 */
export function remove(array: any[], element: any): void;

/**
 * Gets a random element from `array`.
 * @param {Array} array The array to sample.
 * @returns {*} Returns the random element.
 * @example
 *
 * helpArray.sample([1, 2, 3, 4])
 * // => 2
 */
export function sample(array: any[]): any;

/**
 * Randomly shuffle an array.
 * https://stackoverflow.com/a/2450976/1293256
 * @param {Array} array - The array to shuffle
 * @returns {Array} The shuffled array
 */
export function shuffle(array: any[]): any[];

/**
 * Return an array of elements that appear in two arrays.
 * @param {Array} array
 * @param {Array} values
 */
export function similarity(array: any[], values: any[]): any[];

/**
 * Creates a slice of `array` from `start` up to, but not including, `end`.
 * **Note:** This method is used instead of [`Array#slice`](https://mdn.io/Array/slice)
 * to ensure dense arrays are returned.
 * @param {Array} array The array to slice.
 * @param {Number} [start=0] The start position. A negative index will be treated as an offset from the end.
 * @param {Number} [stop=array.length] The end position. A negative index will be treated as an offset from the end.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * let array = [1, 2, 3, 4]
 *
 * helpArray.slice(array, 2)
 * // => [3, 4]
 */
export function slice(array: any[], start?: number, stop?: number): any[];

/**
 * Sort array by a category.
 * @param {Array} array - The array
 * @param {Any} p - parameter
 * @returns {Array}
 */
export function sortBy(array: any[], p: any): any[];

/**
 *
 * @param {Array} array - The array
 * @param {Number} [limit=1]
 * @returns {*[]}
 */
export function toChunks(array: any[], limit?: number): any[];

/**
 * Converts the elements that don’t have commas or double quotes to strings with comma-separated values.
 * @param {Array} array
 * @param {String} [delimiter=',']
 */
export function toCSV(array: any[], delimiter?: string): string;

/**
 * Remove duplicate items from an array.
 * @param {Array} array - The array
 * @returns {Array} A new array with duplicates removed
 */
export function unDuplicate(array: any[]): any[];
