/* eslint-disable unicorn/no-array-reduce, unicorn/prefer-spread */

export const all = (array, fn) => array.every((value) => fn(value));

export const allEqual = (array) => array.every((value) => value === array[0]);

export const append = (array, value) =>
	array ? (array.push(value), array) : [value];

export const prepend = (array, value) =>
	array ? (array.unshift(value), array) : [value];

export const average = (...nums) =>
	nums.reduce((acc, value) => acc + value, 0) / nums.length;

export const cast = (value) => (Array.isArray(value) ? value : [value]);

export const compact = (array) => array.filter(Boolean);

export const countOccurrences = (array, value) =>
	array.reduce((a, v) => (v === value ? a + 1 : a), 0);

export function fromEntries(pairs) {
	const result = {};
	if (pairs === null) {
		return result;
	}

	for (const pair of pairs) {
		result[pair[0]] = pair[1];
	}

	return result;
}

export const flatten = (array, depth = 1) =>
	array.reduce(
		(a, v) =>
			a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
		[],
	);

export const deepFlatten = (array) =>
	array.flatMap((v) => (Array.isArray(v) ? deepFlatten(v) : v));

export const groupMap = (array, fn) => {
	const out = {};
	for (const item of array) {
		const key = fn(item);
		out[key] = out[key] || {key, items: []};
		out[key].items.push(item);
	}

	return out;
};

export const group = (array, fn) => Object.values(groupMap(array, fn));

export function head(array) {
	return array !== null && array.length > 0 ? array[0] : undefined;
}

export function last(array) {
	const length = array === null ? 0 : array.length;
	return length ? array[length - 1] : undefined;
}

export function tail(array) {
	const length = array === null ? 0 : array.length;
	if (!length) {
		return [];
	}

	const [, ...result] = array;
	return result;
}

export function map(array, iteratee) {
	let index = -1;
	const length = array === null ? 0 : array.length;
	const result = Array.from({length});

	while (++index < length) {
		result[index] = iteratee(array[index], index, array);
	}

	return result;
}

export const remove = (array, element) => {
	if (!array) return;
	const idx = array.indexOf(element);
	if (idx < 0) return;
	array.splice(idx, 1);
};

export function sample(array) {
	const length = array === null ? 0 : array.length;
	return length ? array[Math.floor(Math.random() * length)] : undefined;
}

export const shuffle = (array) => {
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

export const similarity = (array, values) =>
	array.filter((v) => values.includes(v));

export function slice(array, start, stop) {
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
	const result = Array.from({length});
	while (++index < length) {
		result[index] = array[index + position];
	}

	return result;
}

export const sortBy = (array, p) =>
	[...array].sort((a, b) => (a[p] > b[p] ? 1 : a[p] < b[p] ? -1 : 0));

export const toChunks = (array, limit = 1) => {
	if (limit < 1) {
		throw new Error('Limit value should be greater than 1');
	}

	const out = [];
	for (let i = 0, end = array.length; i < end; i += limit) {
		out.push(array.slice(i, i + limit));
	}

	return out;
};

export const toCSV = (array, delimiter = ',') =>
	array.map((v) => v.map((x) => `"${x}"`).join(delimiter)).join('\n');

export const unDuplicate = (array) => [...new Set(array)];
