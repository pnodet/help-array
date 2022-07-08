import {it, expect} from 'vitest';
import * as helpArray from '.';

it('all()', () => {
	const isString = (element: any) => typeof element === 'string';
	expect(helpArray.all(['1', '2'], isString)).toBe(true);
	expect(helpArray.all([1, 2], isString)).toBe(false);
});

it('allEqual', () => {
	expect(helpArray.allEqual([2, 2, 2])).toBe(true);
	expect(helpArray.allEqual([1, 2, 3])).toBe(false);
});

it('append()', () => {
	const result = [1, 2, 3, 4];
	expect(helpArray.append([], 4)).to.deep.equal([4]);
	expect(helpArray.append([1, 2, 3], 4)).to.deep.equal(result);
	expect(helpArray.append([1, '2', 3], '4')).to.not.deep.equal(result);
});

it('prepend()', () => {
	const result = [1, 2, 3, 4];
	expect(helpArray.prepend([2, 3, 4], 1)).to.deep.equal(result);
	expect(helpArray.prepend(['2', 3, '4'], '1')).to.not.deep.equal(result);
});

it('average()', () => {
	expect(helpArray.average([2, 4, 6])).to.equal(4);
	expect(helpArray.average([4, 6])).to.not.equal(4);
});

it('cast()', () => {
	expect(helpArray.cast(2)).to.deep.equal([2]);
	expect(helpArray.cast('hey')).to.deep.equal(['hey']);
	// @ts-expect-error Test should fail
	expect(helpArray.cast(2, 3)).to.not.deep.equal([2, 3]);
});

it('compact()', () => {
	const result = [true, true];
	expect(helpArray.compact([true, false, true])).to.deep.equal(result);
	expect(helpArray.compact([true, null, true])).to.deep.equal(result);
	expect(helpArray.compact([true, Number.NaN, true])).to.deep.equal(result);
	expect(helpArray.compact([true, undefined, true])).to.deep.equal(result);
});

it('countOccurrences()', () => {
	expect(helpArray.countOccurrences([1, 2, 3, 4, 5], 3)).to.equal(1);
	expect(helpArray.countOccurrences([1, 2, 3, 3, 4], 3)).to.equal(2);
});

it('fromEntries()', () => {
	expect(
		helpArray.fromEntries([
			['a', 1],
			['b', 2],
		])
	).to.deep.equal({a: 1, b: 2});
});

it('flatten()', () => {
	const result = [1, 2, 3, 4];
	expect(helpArray.flatten([1, 2, [3, 4]])).to.deep.equal(result);
	expect(helpArray.flatten([1, 2, [3, [4]]])).to.not.deep.equal(result);
	expect(helpArray.flatten([1, 2, [3, [4]]], 2)).to.deep.equal(result);
});

it('deepFlatten()', () => {
	const result = [1, 2, 3, 4];
	expect(helpArray.deepFlatten([1, 2, [3, 4]])).to.deep.equal(result);
	expect(helpArray.deepFlatten([1, 2, [3, [4]]])).to.deep.equal(result);
});

it('groupMap()', () => {
	const testParameter = [
		{age: 18, name: 'Jack'},
		{age: 20, name: 'Peter'},
		{age: 18, name: 'Gill'},
	];

	const result = new Map();
	result.set(18, [
		{age: 18, name: 'Jack'},
		{age: 18, name: 'Gill'},
	]);
	result.set(20, [{age: 20, name: 'Peter'}]);
	expect(helpArray.groupMap(testParameter, 'age')).to.deep.equal(result);
});

it('group()', () => {
	const testParameter = [
		{age: 18, name: 'Jack'},
		{age: 20, name: 'Peter'},
		{age: 18, name: 'Gill'},
	];

	const result = {
		'18': [
			{age: 18, name: 'Jack'},
			{age: 18, name: 'Gill'},
		],
		'20': [{age: 20, name: 'Peter'}],
	};

	expect(helpArray.group(testParameter, (v) => v.age.toString())).to.deep.equal(
		result
	);
});

it('sortBy()', () => {
	const testParameter = [
		{age: 18, name: 'Jack'},
		{age: 20, name: 'Peter'},
		{age: 19, name: 'Gill'},
	];

	const result = [
		{age: 18, name: 'Jack'},
		{age: 19, name: 'Gill'},
		{age: 20, name: 'Peter'},
	];

	expect(helpArray.sortBy(testParameter, 'age')).to.deep.equal(result);
});

it('head()', () => {
	expect(helpArray.head([1, 2, 3])).to.equal(1);
	expect(helpArray.head(['1', 2, 3])).to.equal('1');
	/* eslint-disable-next-line @typescript-eslint/no-unused-expressions, @typescript-eslint/no-confusing-void-expression */
	expect(helpArray.head([])).to.be.undefined;
});

it('last()', () => {
	expect(helpArray.last([3, 2, 1])).to.equal(1);
	expect(helpArray.last([1, 2, '3'])).to.equal('3');
	/* eslint-disable-next-line @typescript-eslint/no-unused-expressions, @typescript-eslint/no-confusing-void-expression */
	expect(helpArray.last([])).to.be.undefined;
});

it('tail()', () => {
	const result = [1, 2, 3, 4];
	expect(helpArray.tail([0, 1, 2, 3, 4])).to.deep.equal(result);
});

it('moveBy()', () => {
	const result = [1, 2, 3, 4];
	expect(helpArray.moveBy([3, 1, 2, 4], 0, 2)).to.deep.equal(result);
});

it('remove()', () => {
	const result = [1, 2, 3, 4];
	expect(helpArray.remove([1, 2, 0, 3, 4], 0)).to.deep.equal(result);
	expect(helpArray.remove([0, 1, 2, 3, 4], 0)).to.deep.equal(result);
});

it('sum()', () => {
	expect(helpArray.sum([1, 2, 3, 4])).to.deep.equal(10);
	expect(helpArray.sum([1, 2, 3, 4, -2])).to.deep.equal(8);
});

it('sample()', () => {
	const result = helpArray.sample([1, 2, 3, 4]);
	expect([1, 2, 3, 4]).to.include(result);
});

it('toChunks()', () => {
	expect(helpArray.toChunks([1, 2, 3, 4], 1)).to.deep.equal([
		[1],
		[2],
		[3],
		[4],
	]);

	expect(() => {
		helpArray.toChunks([1, 2, 3, 4], 0);
	}).to.throw('size value should be greater than 1');
});

it('unDuplicate()', () => {
	const result = [1, 2, 3, 4];
	expect(helpArray.unDuplicate([1, 2, 2, 3, 4])).to.deep.equal(result);
	expect(helpArray.unDuplicate([1, 2, 3, 2, 4])).to.deep.equal(result);
	expect(helpArray.unDuplicate([1, 2, 3, '1', 4])).to.not.deep.equal(result);
});

/**
Not ready yet

it('shuffle()', () => {
	it.is(helpArray.shuffle());
	it.is(helpArray.shuffle());
});

it('similarity()', () => {
	it.is(helpArray.similarity());
	it.is(helpArray.similarity());
});

it('slice()', () => {
	it.is(helpArray.slice());
	it.is(helpArray.slice());
});

it('toCSV()', () => {
	it.is(helpArray.toCSV());
	it.is(helpArray.toCSV());
});

it('unDuplicate()', () => {
	it.is(helpArray.unDuplicate());
	it.is(helpArray.unDuplicate());
});
	*/
