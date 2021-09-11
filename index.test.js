/** Eslint-disable prefer-const */
import test from 'ava';
import * as helpArray from './index.js';

const isString = (element) => typeof element === 'string';

test('all()', (t) => {
	t.true(helpArray.all(['1', '2'], isString));
	t.false(helpArray.all([1, 2], isString));
});

test('allEqual', (t) => {
	t.true(helpArray.allEqual([2, 2, 2]));
	t.false(helpArray.allEqual([1, 2, 3]));
});

test('append()', (t) => {
	t.deepEqual(helpArray.append([1, 2, 3], 4), [1, 2, 3, 4]);
	t.notDeepEqual(helpArray.append([1, '2', 3], '4'), [1, 2, 3, 4]);
});

test('prepend()', (t) => {
	t.deepEqual(helpArray.prepend([2, 3, 4], 1), [1, 2, 3, 4]);
	t.notDeepEqual(helpArray.prepend(['2', 3, '4'], '1'), [1, 2, 3, 4]);
});

test('average()', (t) => {
	t.is(helpArray.average(2, 4, 6), 4);
	t.not(helpArray.average([2, 4, 6]), 4);
});

test('cast()', (t) => {
	t.deepEqual(helpArray.cast(2), [2]);
	t.notDeepEqual(helpArray.cast(2, 3), [2, 3]);
});

test('compact()', (t) => {
	t.deepEqual(helpArray.compact([true, false, true]), [true, true]);
	t.deepEqual(helpArray.compact([1, false, true]), [1, true]);
	t.deepEqual(helpArray.compact([true, false, Number.NaN, true]), [true, true]);
	t.deepEqual(helpArray.compact([true, undefined, true]), [true, true]);
});

test('countOccurrences()', (t) => {
	t.is(helpArray.countOccurrences([1, 2, 3, 4, 5], 3), 1);
	t.is(helpArray.countOccurrences([1, 2, 3, 3, 4], 3), 2);
});

test('fromEntries()', (t) => {
	t.deepEqual(
		helpArray.fromEntries([
			['a', 1],
			['b', 2],
		]),
		{a: 1, b: 2},
	);
});

test('flatten()', (t) => {
	t.deepEqual(helpArray.flatten([1, 2, [3]]), [1, 2, 3]);
	t.deepEqual(helpArray.flatten(, [1, 2, 3, [4, 5]]);
	t.deepEqual(helpArray.flatten([1, 2, [3, [4, 5]]], 2), [1, 2, 3, 4, 5]);
});

test('deepFlatten()', (t) => {
	t.deepEqual(helpArray.deepFlatten([1, 2, [3]]), [1, 2, 3]);
	t.deepEqual(helpArray.flatten([1, 2, [3, [4, 5]]], 2), [1, 2, 3, 4, 5]);
	t.notDeepEqual(helpArray.deepFlatten([1, 2, [3, [4, 5]]]), [1, 2, 3, [4, 5]]);
});

/**
Not ready yet

test('groupMap()', (t) => {
	t.is(helpArray.groupMap());
	t.is(helpArray.groupMap());
});

test('group()', (t) => {
	t.is(helpArray.group());
	t.is(helpArray.group());
});
	*/

test('head()', (t) => {
	t.is(helpArray.head([1, 2, 3]), 1);
	t.is(helpArray.head([]), undefined);
	t.is(helpArray.head(['1', 2, 3]), '1');
});

test('last()', (t) => {
	t.is(helpArray.last([1, 2, 3]), 3);
	t.is(helpArray.last([]), undefined);
	t.is(helpArray.last([1, 2, '3']), '3');
});

test('tail()', (t) => {
	t.deepEqual(helpArray.tail([1, 2, 3]), [2, 3]);
	t.deepEqual(helpArray.tail([1, 2, '3']), [2, '3']);
});

test('map()', (t) => {
	t.deepEqual(
		helpArray.map([4, 8, 16], (n) => n + 2),
		[6, 10, 18],
	);
	t.deepEqual(
		helpArray.map([4, 8, 16], (n) => n * n),
		[16, 64, 256],
	);
});

test('remove()', (t) => {
	const array1 = [1, 2, 3, 4];
	helpArray.remove(array1, 3);
	t.deepEqual(array1, [1, 2, 4]);

	const array2 = [1, 2, 3, 4, 3];
	helpArray.remove(array2, 3);
	t.deepEqual(array2, [1, 2, 4, 3]);
});

/**
Not ready yet

test('sample()', (t) => {
	t.is(helpArray.sample());
	t.is(helpArray.sample());
});

test('shuffle()', (t) => {
	t.is(helpArray.shuffle());
	t.is(helpArray.shuffle());
});

test('similarity()', (t) => {
	t.is(helpArray.similarity());
	t.is(helpArray.similarity());
});

test('slice()', (t) => {
	t.is(helpArray.slice());
	t.is(helpArray.slice());
});

test('sortBy()', (t) => {
	t.is(helpArray.sortBy());
	t.is(helpArray.sortBy());
});

test('toChunks()', (t) => {
	t.is(helpArray.toChunks());
	t.is(helpArray.toChunks());
});

test('toCSV()', (t) => {
	t.is(helpArray.toCSV());
	t.is(helpArray.toCSV());
});

test('unDuplicate()', (t) => {
	t.is(helpArray.unDuplicate());
	t.is(helpArray.unDuplicate());
});
	*/
