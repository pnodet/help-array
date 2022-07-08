type key = string | number | symbol;

/**
 * Returns true if the predicate function returns true for all elements in a collection and false otherwise.
 */
export const all = <T>(array: T[], fn: (arg0: T) => boolean) =>
	array.every((value) => fn(value));

/**
 * Checks whether all elements of the array are equal.
 */
export const allEqual = <T>(array: T[]) =>
	array.every((value) => value === array[0]);

/**
 * Append value into array.
 */
export const append = <T>(array: T[], value: T) =>
	array ? (array.push(value), array) : [value];

/**
 * Prepend value into array.
 */
export const prepend = <T>(array: T[], value: T) =>
	array ? (array.unshift(value), array) : [value];

/**
 * Returns the average of two or more numerical values.
 */
export const average = (...nums: number[]) =>
	nums.reduce((acc, value) => acc + value, 0) / nums.length;

/**
 * Converts a non-array value into array.
 */
export const cast = <T>(value: T): T[] =>
	Array.isArray(value) ? value : [value];

/**
 * Removes false values from an array.
 */
export const compact = <T>(array: T[]) => array.filter(Boolean);

/**
 * Counts the occurrences of a value in an array.
 */
export const countOccurrences = <T>(array: T[], value: T) =>
	array.reduce((a, v) => (v === value ? a + 1 : a), 0);

/**
 * Returns an object composed from key-value `pairs`.
 * @example
 * helpArray.fromEntries([['a', 1], ['b', 2]])
 * // => { 'a': 1, 'b': 2 }
 */
export const fromEntries = <T>(pairs: [key, T][]): Record<key, T> => {
	const result: Record<key, T> = {};
	if (!pairs) return result;
	for (const pair of pairs) result[pair[0]] = pair[1];
	return result;
};

/**
 * Flattens an array up to a specified depth using recursion.
 */
export const flatten = <T>(array: T[], depth = 1): T[] =>
	array.reduce(
		(a, v) =>
			a.concat(
				(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v) as any
			),
		[]
	);

/**
 * Flattens an array recursively.
 */
export const deepFlatten = <T>(array: T[]): T[] =>
	array.flatMap((v) => (Array.isArray(v) ? deepFlatten(v) : v));

/**
 * Group items by common key and return an object of items grouped by key.
 */
export const groupMap = <T>(
	array: Record<key, T>[],
	fn: (arg0: Record<key, T>) => key
): Record<key, {items: Record<key, T>[]}> => {
	const out: Record<key, {items: Record<key, T>[]}> = {};
	for (const item of array) {
		const key = fn(item);
		out[key] = out[key] || {key, items: []};
		out[key].items.push(item);
	}

	return out;
};

/**
 * Group items by common key and return an array of groups.
 */
export const group = <T>(
	array: Record<key, T>[],
	fn: (arg0: Record<key, T>) => key
): {items: Record<key, T>[]}[] => Object.values(groupMap(array, fn));

/**
 * Gets the first element of `array`.
 * @example
 *
 * helpArray.head([1, 2, 3])
 * // => 1
 *
 * helpArray.head([])
 * // => undefined
 */
export const head = <T>(array: T[]): T | undefined =>
	array !== null && array.length > 0 ? array[0] : undefined;

/**
 * Gets the last element of `array`.
 * @example
 *
 * helpArray.last([1, 2, 3])
 * // => 3
 */
export const last = <T>(array: T[]): T | undefined => {
	const length = array === null ? 0 : array.length;
	return length ? array[length - 1] : undefined;
};

/**
 * Gets all but the first element of `array`.
 * @example
 *
 * helpArray.tail([1, 2, 3])
 * // => [2, 3]
 */
export const tail = <T>(array: T[]): T[] => {
	const length = array === null ? 0 : array.length;
	if (!length) return [];
	const [, ...result] = array;
	return result;
};

/**
 * Move an item inside array.
 */
export const moveBy = <T>(array: T[], index: number, offset: number): T[] => {
	if (!array) return [];
	const result = [...array];
	if (index === index + offset) return result;
	if (index + offset < 0 || index + offset > array.length)
		throw new Error(`error : Offset too high`);

	result.splice(index + offset, 0, result.splice(index, 1)[0]);
	return result;
};

/**
 * Remove an item of an array.
 */
export const remove = <T>(array: T[], element: T): T[] => {
	if (!array) return [];
	const array_ = [...array];
	const idx = array_.indexOf(element);
	if (idx < 0) return [];
	array_.splice(idx, 1);
	return array_;
};

/**
 * Gets a random element from `array`.
 * @example
 *
 * helpArray.sample([1, 2, 3, 4])
 * // => 2
 */
export const sample = <T>(array: T[]): T | undefined => {
	const length = array === null ? 0 : array.length;
	return length ? array[Math.floor(Math.random() * length)] : undefined;
};

/**
 * Randomly shuffle an array.
 * https://stackoverflow.com/a/2450976/1293256
 */
export const shuffle = <T>(array: T[]): T[] => {
	let currentIndex = array.length;
	let temporaryValue;
	let randomIndex;

	// While there remain elements to shuffle...
	while (currentIndex !== 0) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

/**
 * Return an array of elements that appear in two arrays.
 */
export const similarity = <T>(array: T[], values: T[]): T[] =>
	array.filter((v) => values.includes(v));

/**
 * Creates a slice of `array` from `start` up to, but not including, `stop`.
 * **Note:** This method is used instead of [`Array#slice`](https://mdn.io/Array/slice)
 * to ensure dense arrays are returned.
 * @param start The start position. A negative index will be treated as an offset from the end.
 * @param stop The end position. A negative index will be treated as an offset from the end.
 * @example
 *
 * let array = [1, 2, 3, 4]
 *
 * helpArray.slice(array, 2)
 * // => [3, 4]
 */
export const slice = <T>(array: T[], start = 0, stop = array.length): T[] => {
	let length = array === null ? 0 : array.length;
	if (!length) {
		return [];
	}

	let position = start === null ? 0 : start;
	let end = stop === undefined ? length : stop;

	if (position < 0) {
		position = -position > length ? 0 : length + position;
	}

	end = end > length ? length : end;
	if (end < 0) {
		end += length;
	}

	length = position > end ? 0 : (end - position) >>> 0;
	position >>>= 0;

	let index = -1;
	const result: T[] = Array.from({length});
	while (++index < length) {
		result[index] = array[index + position];
	}

	return result;
};

/**
 * Sort array by a category.
 */
export const sortBy = <T>(array: Record<key, T>[], p: key): Record<key, T>[] =>
	[...array].sort((a, b) => (a[p] > b[p] ? 1 : a[p] < b[p] ? -1 : 0));

/**
 * Group array in chunks of `size`.
 */
export const toChunks = <T>(array: T[], size = 1): T[][] => {
	if (size < 1) throw new Error('size value should be greater than 1');

	const out: T[][] = [];
	for (let i = 0, end = array.length; i < end; i += size)
		out.push(array.slice(i, i + size));

	return out;
};

/**
 * Converts the elements that don’t have commas or double quotes to strings with comma-separated values.
 */
export const toCSV = <T extends []>(array: T[], delimiter = ','): string =>
	array.map((v) => v.map((x) => `"${x}"`).join(delimiter)).join('\n');

/**
 * Remove duplicate items from an array.
 */
export const unDuplicate = <T>(array: T[]) => [...new Set(array)];
